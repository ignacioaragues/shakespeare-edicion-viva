(function () {
  'use strict';

  const data = window.SHAKESPEARE_READER_DATA;
  if (!data || !data.scenes || !data.scenes.length) return;
  let scene = data.scenes.find((s) => s.id === (localStorage.getItem('shakespeare-scene') || 'coriolanus-1-1')) || data.scenes[0];
  let characters = new Map(scene.characters.map((character) => [character.id, character]));
  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = 'shakespeare-edicion-viva-v1';

  const stored = (() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; }
    catch (_) { return {}; }
  })();
  const state = {
    fontSize: Math.max(15, Math.min(22, Number(stored.fontSize) || 17)),
    notes: stored.notes !== false,
    dividers: stored.dividers === true,
    navCollapsed: stored.navCollapsed === true,
    collapsedActs: Array.isArray(stored.collapsedActs) ? stored.collapsedActs.map(String) : [],
    charactersCollapsed: stored.charactersCollapsed === true,
    bookmark: null,
    mobileLang: stored.mobileLang === 'es' ? 'es' : 'en',
    query: '',
    readAct: false,
    bookmarks: {...(stored.bookmarks || {})},
    bookmarkSceneId: stored.bookmarkSceneId || scene.id,
    autoPosition: stored.autoPosition && typeof stored.autoPosition.sceneId === 'string' && Number.isInteger(stored.autoPosition.index)
      ? stored.autoPosition : null
  };
  if (scene.id === 'coriolanus-1-1' && !Number.isInteger(state.bookmarks[scene.id]) && Number.isInteger(stored.bookmark) && stored.bookmark >= 0 && stored.bookmark < scene.blocks.length) state.bookmarks[scene.id] = stored.bookmark;
  state.bookmark = Number.isInteger(state.bookmarks[scene.id]) && state.bookmarks[scene.id] >= 0 && state.bookmarks[scene.id] < scene.blocks.length ? state.bookmarks[scene.id] : null;
  let currentNoteTrigger = null;
  let autoPositionTimer = null;
  let pendingAutoResume = null;

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        fontSize: state.fontSize, notes: state.notes, dividers: state.dividers,
        navCollapsed: state.navCollapsed, charactersCollapsed: state.charactersCollapsed,
        collapsedActs: state.collapsedActs,
        bookmark: state.bookmark, bookmarks: state.bookmarks, bookmarkSceneId: state.bookmarkSceneId,
        mobileLang: state.mobileLang, autoPosition: state.autoPosition
      }));
    } catch (_) { /* Reading works with storage disabled. */ }
  }

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined && content !== null) node.textContent = content;
    return node;
  }


  // Build the scene list from the same data that powers the reader.
  // New scenes and acts appear automatically when data.js is updated.
  function buildSceneNavigation() {
    const nav = $('dynamic-scene-navigation');
    if (!nav) return;
    nav.replaceChildren();
    const roman = ['','I','II','III','IV','V'];
    let currentAct = null;
    for (const item of data.scenes) {
      if (item.act !== currentAct) {
        currentAct = item.act;
        const heading = el('div', 'act-label');
        heading.append(el('span', '', 'ACTO ' + (roman[item.act] || item.act)));
        heading.append(el('span', 'act-count', String(item.act).padStart(2, '0') + ' / 05'));
        nav.append(heading);
      }
      const button = el('button', 'scene-nav');
      button.type = 'button';
      button.dataset.sceneId = item.id;
      button.append(el('span', 'scene-number', String(item.scene).padStart(2, '0')));
      button.append(el('span', '', item.place || 'Escena ' + item.scene));
      nav.append(button);
    }
    const lastAct = Math.max(0, ...data.scenes.map(item => item.act));
    if (lastAct < 5) {
      const future = el('div', 'disabled-acts');
      future.setAttribute('aria-label', 'Actos todavía no incorporados');
      for (let act = lastAct + 1; act <= 5; act++) {
        const item = el('div', '', 'ACTO ' + roman[act] + ' —');
        future.append(item);
      }
      nav.append(future);
    }
  }

  function enableActAccordions() {
    const sidebar = $('sidebar-content');
    if (!sidebar) return;
    Array.from(sidebar.querySelectorAll('.act-label')).forEach(label => {
      const match = (label.querySelector('span')?.textContent || '').match(/ACTO\s+([IVX]+)/i);
      if (!match) return;
      const act = match[1].toUpperCase();
      const group = el('div', 'act-scenes');
      group.id = 'act-scenes-' + act.toLowerCase();
      let next = label.nextElementSibling;
      while (next && next.classList.contains('scene-nav')) {
        const moving = next;
        next = next.nextElementSibling;
        group.appendChild(moving);
      }
      label.after(group);
      const toggle = el('button', 'act-toggle');
      toggle.type = 'button';
      toggle.setAttribute('aria-controls', group.id);
      toggle.appendChild(label.querySelector('span')?.cloneNode(true) || el('span', '', 'ACTO ' + act));
      const count = label.querySelector('.act-count');
      if (count) toggle.appendChild(count.cloneNode(true));
      toggle.appendChild(el('span', 'act-chevron', '⌄'));
      label.replaceWith(toggle);
      const apply = collapsed => {
        group.hidden = collapsed;
        toggle.setAttribute('aria-expanded', String(!collapsed));
        toggle.classList.toggle('is-collapsed', collapsed);
      };
      apply(state.collapsedActs.includes(act));
      toggle.addEventListener('click', () => {
        const collapsed = !group.hidden;
        state.collapsedActs = collapsed
          ? [...new Set([...state.collapsedActs, act])]
          : state.collapsedActs.filter(item => item !== act);
        apply(collapsed);
        persist();
      });
    });
  }

  function revealActiveAct() {
    const selected = document.querySelector('.scene-nav.active');
    const group = selected?.closest('.act-scenes');
    if (!group || !group.hidden) return;
    const toggle = document.querySelector('[aria-controls="' + group.id + '"]');
    if (!toggle) return;
    group.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.remove('is-collapsed');
    const act = group.id.split('-').pop().toUpperCase();
    state.collapsedActs = state.collapsedActs.filter(item => item !== act);
    persist();
  }

  function notesForBlock(text, notes) {
    const candidates = notes.map((note, index) => ({ note, index, start: text.toLocaleLowerCase('en').indexOf(note.term.toLocaleLowerCase('en')) }))
      .filter((item) => item.start >= 0)
      .sort((a, b) => a.start - b.start || b.note.term.length - a.note.term.length);
    const selected = [];
    let lastEnd = 0;
    for (const item of candidates) {
      if (item.start >= lastEnd) {
        selected.push(item);
        lastEnd = item.start + item.note.term.length;
      }
    }
    return selected;
  }

  function setNote(note, anchor) {
    const popup = $('note-popover');
    $('note-type').textContent = note.type;
    $('note-title').textContent = note.title;
    $('note-body').textContent = note.body;
    let extra = $('note-lexical-extra');
    if (!extra) {
      extra = el('div', 'note-lexical-extra');
      extra.id = 'note-lexical-extra';
      extra.style.cssText = 'text-align:left;margin-top:0.65rem;font-size:0.86rem;line-height:1.5;';
      $('note-body').insertAdjacentElement('afterend', extra);
    }
    extra.replaceChildren();
    if (note.gloss) {
      const gloss = el('div', 'note-gloss', note.gloss);
      gloss.style.cssText = 'font-weight:600;text-align:left;';
      extra.appendChild(gloss);
    }
    if (note.lemmaUrl && note.lemma) {
      const link = el('a', 'note-lemma-link', 'Lema y flexión ↗');
      link.href = note.lemmaUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.cssText = 'display:inline-block;margin-top:0.3rem;font-size:0.78rem;';
      extra.appendChild(link);
    }
    popup.hidden = false;
    currentNoteTrigger = anchor;
    const rect = anchor.getBoundingClientRect();
    const bounds = popup.getBoundingClientRect();
    const left = Math.max(14, Math.min(window.innerWidth - bounds.width - 14, rect.left + Math.min(28, rect.width / 2)));
    const beneath = rect.bottom + 13 + bounds.height <= window.innerHeight - 12;
    const top = beneath ? rect.bottom + 11 : Math.max(12, rect.top - bounds.height - 11);
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  }

  function closeNote() { $('note-popover').hidden = true; currentNoteTrigger = null; }

  function noteButton(note, label, supplemental) {
    const button = el('button', supplemental ? 'supplementary-note' : 'note-trigger', label);
    button.type = 'button';
    button.title = `${note.type}: ${note.title}`;
    button.setAttribute('aria-label', `Nota sobre ${note.title}: ${note.type}`);
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      if (currentNoteTrigger === button && !$('note-popover').hidden) closeNote();
      else setNote(note, button);
    });
    return button;
  }

  function originalText(text, notes) {
    const fragment = document.createDocumentFragment();
    const selections = notesForBlock(text, notes);
    const used = new Set();
    let pos = 0;
    for (const item of selections) {
      if (item.start > pos) fragment.appendChild(document.createTextNode(text.slice(pos, item.start)));
      fragment.appendChild(noteButton(item.note, text.slice(item.start, item.start + item.note.term.length), false));
      pos = item.start + item.note.term.length;
      used.add(item.index);
    }
    if (pos < text.length) fragment.appendChild(document.createTextNode(text.slice(pos)));
    const supplemental = notes.filter((_, index) => !used.has(index));
    if (supplemental.length) {
      const notesContainer = el('span', 'supplemental-notes');
      supplemental.forEach((note) => notesContainer.appendChild(noteButton(note, '✳', true)));
      fragment.appendChild(document.createTextNode(' '));
      fragment.appendChild(notesContainer);
    }
    return fragment;
  }

  function characterButton(character, translated) {
    const button = el('button', `speaker color-${character.color}`, translated ? character.name : character.english);
    button.type = 'button';
    button.title = `Ver ficha de ${character.name}`;
    button.prepend(el('span', 'speaker-dot'));
    button.addEventListener('click', () => openModal('character', character));
    return button;
  }

  // Verse breaks are zero-text DOM markers: neither en/es nor reading offsets change.
  // Each anchor is checked against the published string before applying the layout.
  const verifiedVerseStarts = {
    'coriolanus-1-10|846–859': { en: ["I would I were","Being a Volsce","What good condition","I’ th’ part","I have fought","And wouldst do","As often as","If e’er again","He’s mine","Hath not that","I thought to crush","True sword to sword","Or wrath or craft"] },
    'coriolanus-1-10|861–873': { en: ["With only suff’ring","Shall fly out","Being naked","The prayers of priests","Embarquements all","Their rotten privilege","My hate to Martius","At home","Against the hospitable","Wash my fierce hand","Learn how ’tis held","Be hostages"] },
    'coriolanus-1-10|875–878': { en: ["’Tis south the city","How the world goes","I may spur"] },
    'coriolanus-1-8|716–717': { en: ["Worse than a promise-breaker."] },
    'coriolanus-1-8|718–720': { en: ["Not Afric owns","More than thy fame"] },
    'coriolanus-1-8|721–722': { en: ["And the gods doom"] },
    'coriolanus-1-8|723–724': { en: ["Hollo me like"] },
    'coriolanus-1-8|725–730': { en: ["Tullus,","Alone I fought","And made what work","Wherein thou seest","Wrench up thy power"] },
    'coriolanus-1-8|731–734': { en: ["Hector","That was the whip","Thou shouldst not scape"] },
    'coriolanus-1-8|735–737': { en: ["shamed me","In your condemnèd seconds."] },
    'coriolanus-1-9|738–749': { en: ["Thou ’t not believe","Where senators","Where great patricians","I’ th’ end admire","And, gladly quaked","tribunes,","That with the fusty","Shall say against","Our Rome hath","Yet cam’st thou","Having fully dined"] },
    'coriolanus-1-9|750–752': { en: ["Here is the steed","Hadst thou beheld"] },
    'coriolanus-1-9|753–759': { en: ["Who has a charter","When she does praise","As you have done","Induced as you","He that has but","Hath overta’en"] },
    'coriolanus-1-9|760–768': { en: ["The grave of your","The value of her","Worse than a theft","To hide your doings","Which, to the spire","Would seem but modest","In sign of what","What you have done"] },
    'coriolanus-1-9|769–770': { en: ["To hear themselves"] },
    'coriolanus-1-9|771–778': { en: ["Well might they fester","And tent themselves","Whereof we have","The treasure in","We render you","Before the common","At your only choice."] },
    'coriolanus-1-9|779–783': { en: ["But cannot make","A bribe to pay","And stand upon","That have beheld"] },
    'coriolanus-1-9|784–795': { en: ["Never sound more","I’ th’ field prove","Made all of","Soft as the parasite","An ovator","For that I have","Or foiled some","Here’s many else","In acclamations","As if I loved","In praises sauced"] },
    'coriolanus-1-9|796–809': { en: ["More cruel to","To us that give","If ’gainst yourself","Like one that means","Then reason safely","As to us","Wears this war’s","My noble steed","With all his trim","For what he did","With all th’ applause","Martius Caius Coriolanus! Bear","Th’ addition nobly"] },
    'coriolanus-1-9|811–816': { en: ["And when my face","Whether I blush","I mean to stride","To undercrest","To th’ fairness"] },
    'coriolanus-1-9|817–822': { en: ["Where, ere we do","To Rome of our","Must to Corioles","The best, with","For their own good"] },
    'coriolanus-1-9|824–826': { en: ["Refused most princely","Of my lord general."] },
    'coriolanus-1-9|828–833': { en: ["At a poor man’s","He cried to me","But then Aufidius","And wrath o’erwhelmed","To give my poor"] },
    'coriolanus-1-9|834–836': { en: ["Were he the butcher","Be free as is"] },
    'coriolanus-1-9|838–840': { en: ["I am weary","Have we no wine"] },
    'coriolanus-1-9|841–843': { en: ["The blood upon","It should be looked"] },

    'coriolanus-1-5|571–575': { en: ["At a cracked drachma.","Irons of a doit,","Bury with those","Ere yet the fight"] },
    'coriolanus-1-5|576–581': { en: ["There is the man","Piercing our Romans.","Convenient numbers","Whilst I,","To help Cominius."] },
    'coriolanus-1-5|582–584': { en: ["Thy exercise","For a second course"] },
    'coriolanus-1-5|585–589': { en: ["My work hath","The blood I drop","Than dangerous","I will appear"] },
    'coriolanus-1-5|590–593': { en: ["Fall deep in love","Misguide thy opposers","Prosperity be"] },
    'coriolanus-1-5|594–595': { en: ["Than those she placeth"] },
    'coriolanus-1-5|596–599': { en: ["Go sound thy trumpet","Call thither all","Where they shall know"] },
    'coriolanus-1-6|600–610': { en: ["off Like Romans","Like Romans","Nor cowardly","We shall be charged","By interims","The charges","Lead their successes","That both our powers","encount’ring","May give you"] },
    'coriolanus-1-6|612–615': { en: ["And given to Lartius","I saw our party","And then I came"] },
    'coriolanus-1-6|616–618': { en: ["Methinks thou speak’st","since?"] },
    'coriolanus-1-6|620–622': { en: ["How couldst thou","And bring thy news"] },
    'coriolanus-1-6|623–626': { en: ["Held me in chase","Three or four miles","Half an hour since"] },
    'coriolanus-1-6|627–630': { en: ["That does appear","He has the stamp","Before-time seen"] },
    'coriolanus-1-6|632–634': { en: ["More than I know","From every meaner"] },
    'coriolanus-1-6|636–637': { en: ["But mantled"] },
    'coriolanus-1-6|638–641': { en: ["In arms as sound","As merry as","And tapers burnt"] },
    'coriolanus-1-6|643–648': { en: ["Condemning some","Ransoming him","Holding Corioles","Even like a fawning","To let him slip"] },
    'coriolanus-1-6|649–651': { en: ["Which told me","Where is he?"] },
    'coriolanus-1-6|652–656': { en: ["He did inform","The common file","The mouse ne’er","From rascals"] },
    'coriolanus-1-6|658–660': { en: ["Where is the enemy?","If not, why"] },
    'coriolanus-1-6|661–662': { en: ["And did retire"] },
    'coriolanus-1-6|663–664': { en: ["They have placed"] },
    'coriolanus-1-6|665–669': { en: ["Martius,","Their bands i’","Of their best trust","Their very heart"] },
    'coriolanus-1-6|670–678': { en: ["By all the battles","By th’ blood","have made","To endure friends","Against Aufidius","And that you not","Filling the air","We prove this"] },
    'coriolanus-1-6|679–683': { en: ["You were conducted","And balms applied","Deny your asking","That best can aid"] },
    'coriolanus-1-6|684–693': { en: ["That most are willing","As it were sin","Wherein you see","Lesser his person","If any think","And that his country’s","Let him alone","Wave thus","And follow Martius."] },
    'coriolanus-1-6|694–703': { en: ["If these shows","But is four Volsces?","Able to bear","A shield as hard","Though thanks to all","The rest shall bear","As cause will","And I shall quickly","Which men are best"] },
    'coriolanus-1-6|704–706': { en: ["Make good this ostentation","Divide in all"] },
    'coriolanus-1-7|707–711': { en: ["As I have set","Those centuries","For a short holding","We cannot keep"] },
    'coriolanus-1-7|713–715': { en: ["Our guider, come.","camp conduct us."] },
    'coriolanus-1-4|494–495': { en: ["For half a hundred years."] },
    'coriolanus-1-4|498–502': { en: ["Now, Mars,","That we with smoking swords","hence","To help our fielded friends!"] },
    'coriolanus-1-4|504–514': { en: ["That’s lesser than a little.","Hark, our drums","Are bringing forth our youth.","Rather than they shall pound","Which yet seem shut","rushes.","They’ll open of themselves.","Hark you, far off!","There is Aufidius.","Amongst your cloven army."] },
    'coriolanus-1-4|517–525': { en: ["Now put your shields","With hearts more proof","brave Titus.","They do disdain us","Which makes me sweat","fellows!","He that retires","And he shall feel"] },
    'coriolanus-1-4|526–539': { en: ["You shames of Rome!","plagues","Plaster you o’er","Farther than seen","Against the wind","That bear the shapes","From slaves that apes","All hurt behind.","With flight and agued","Or, by the fires","And make my wars","If you’ll stand fast","As they us to our trenches."] },
    'coriolanus-1-4|540–543': { en: ["seconds!","’Tis for the followers","Not for the fliers."] },
    'coriolanus-1-4|550–553': { en: ["With them he enters","Clapped to their gates.","To answer all the city."] },
    'coriolanus-1-4|554–564': { en: ["Who sensibly outdares","And when it bows","Martius.","A carbuncle entire","Were not so rich","Even to ⌜Cato’s⌝ wish","Only in strokes","The thunderlike percussion","Thou mad’st thine enemies","Were feverous"] },
    'coriolanus-1-4|566–567': { en: ["Let’s fetch him off"] },

    'coriolanus-1-3|400–409': { en: ["Methinks I hear hither","See him pluck Aufidius","As children from a bear","Methinks I see him stamp","“Come on, you cowards!","Though you were born","With his mailed hand","Like to a harvestman","Or all or lose his hire."] },
    'coriolanus-1-3|411–416': { en: ["Than gilt his trophy.","When she did suckle Hector","Than Hector’s forehead","At Grecian sword","We are fit to bid"] },
    'coriolanus-1-3|418–419': { en: ["And tread upon his neck."] },

    'coriolanus-1-2|322–324': { en: ["That they of Rome","And know how we proceed."] },
    'coriolanus-1-2|325–340': { en: ["Whatever have been thought","That could be brought","Had circumvention?","Since I heard thence.","I have the letter here.","They have pressed a power","known Whether","Whether for east or west.","The people mutinous;","Cominius, Martius","Who is of Rome","And Titus Lartius","These three lead","Whither ’tis bent.","Consider of it."] },
    'coriolanus-1-2|341–343': { en: ["We never yet","To answer us."] },
    'coriolanus-1-2|344–351': { en: ["To keep your great","They needs must","hatching, It seemed","It seemed, appeared","We shall be shortened","To take in many towns","Should know we were afoot."] },
    'coriolanus-1-2|352–357': { en: ["Take your commission","Let us alone","If they set down","Bring up your army.","They’ve not prepared"] },
    'coriolanus-1-2|358–364': { en: ["I speak from certainties.","Some parcels of their power","And only hitherward.","If we and Caius Martius","’Tis sworn between us","Till one can do no more."] },
    'coriolanus-1-1|301–308': {
      en: ["In whom already he’s well graced","Better be held nor more attained","A place below the first;","Shall be the General’s fault","To th’ utmost of a man","Will then cry out of Martius","Had borne the business!"],
      es: ["y que ya lo favorece tanto","no podría conservarse","ocupando el segundo puesto.","Porque cualquier fracaso","aunque este haga cuanto humanamente pueda","y la opinión, tan voluble","«¡Ah, si él hubiera estado al mando!»"]
    },
    'coriolanus-1-1|309–311': {
      en: ["Opinion that so sticks","Of his demerits rob Cominius."],
      es: ["la opinión pública","despojará a Cominio"]
    },
    'coriolanus-1-1|312–316': {
      en: ["Half all Cominius’ honors","Though Martius earned them not","To Martius shall be honors","In aught he merit not."],
      es: ["La mitad de todos los honores","aunque Marcio no los haya ganado","y hasta los errores de Cominio","aunque este no haya hecho nada"]
    },
    'coriolanus-1-1|317–320': {
      en: ["How the dispatch is made","More than his singularity","Upon this present action."],
      es: ["cómo se organiza la partida","aparte de su habitual extravagancia","emprende esta campaña."]
    },
    'coriolanus-1-1|294–295': {
      en: ['Too proud to be so valiant.'],
      es: ['Se ha vuelto demasiado soberbio']
    },
    'coriolanus-1-1|296–300': {
      en: ['Tickled with good success', 'Which he treads on at noon.', 'His insolence can brook', 'Under Cominius.'],
      es: ['halagado por sus triunfos', 'desprecia hasta la sombra', 'Pero me sorprende', 'tolere estar bajo las órdenes']
    },
    'coriolanus-1-1|264–265': {
      en: ['Attend upon Cominius'],
      es: ['acompaña a Cominio']
    },
    'coriolanus-1-1|267–270': {
      en: ['And I am constant.', 'Shalt see me once more', 'What, art thou stiff?'],
      es: ['y mantengo mi palabra.', 'volverás a verme atacar', '¿Qué ocurre?']
    },
    'coriolanus-1-1|271–273': {
      en: ['I’ll lean upon one crutch', 'Ere stay behind this business.'],
      es: ['Antes de quedarme fuera', 'me apoyaré en una muleta']
    },
    'coriolanus-1-1|275–276': {
      en: ['Our greatest friends attend us.'],
      es: ['donde sé que nos esperan']
    },
    'coriolanus-1-1|277–279': {
      en: ['Follow Cominius.', 'We must follow you;', 'Right worthy you priority.'],
      es: ['Nosotros debemos seguirte', 'bien mereces ir primero.']
    },
    'coriolanus-1-1|282–284': {
      en: ['The Volsces have much corn;', 'To gnaw their garners.'],
      es: ['Los volscos tienen mucho grano;', 'lleven allí a estas ratas']
    },
    'coriolanus-1-1|285–286': {
      en: ['Your valor puts well forth.'],
      es: ['su valentía se luce']
    },
    'coriolanus-1-1|237–243': {
      en: ['Of their own choice.', 'Sicinius Velutus', '’Sdeath!', 'Ere so prevailed with me.', 'Win upon power', 'For insurrection’s arguing.'],
      es: ['Uno es Junio Bruto', '¡Por la muerte de Dios!', 'Antes habría tenido', 'Con el tiempo', 'y dará nuevos motivos', 'para justificar la insurrección.']
    },
    'coriolanus-1-1|249–251': {
      en: ['Our musty superfluity.', 'See our best elders.'],
      es: ['Así tendremos ocasión', 'Ahí vienen nuestros más ilustres mayores.']
    },
    'coriolanus-1-1|252–253': {
      en: ['The Volsces are in arms.'],
      es: ['los volscos están en armas.']
    },
    'coriolanus-1-1|254–258': {
      en: ['Tullus Aufidius', 'I sin in envying', 'And, were I anything', 'I would wish me only he.'],
      es: ['Tulo Aufidio', 'Pecaría por envidiar', 'y, si yo pudiera ser', 'solo desearía ser él.']
    },
    'coriolanus-1-1|260–263': {
      en: ['Upon my party', 'Only my wars with him.', 'That I am proud to hunt.'],
      es: ['y él combatiera de mi lado', 'yo cambiaría de bando', 'Es un león al que me enorgullece dar caza.']
    },
    'coriolanus-1-1|201–202': {
      en: ['The city is well stored.'],
      es: ['dicen que la ciudad']
    },
    'coriolanus-1-1|203–215': {
      en: ["They’ll sit by th’ fire","What’s done i’ th’ Capitol","Who thrives, and who declines","give out","Conjectural marriages","And feebling such","Below their cobbled shoes","enough? Would the nobility","Would the nobility","And let me use my sword","With thousands","As I could pick"],
      es: ['¿Eso dicen?', 'qué ocurre en el Capitolio', 'quién prospera y quién cae.', 'Toman partido por unas facciones', 'fortaleciendo a unos bandos', 'ni estar bajo sus zapatos remendados.', 'Si la nobleza dejara', 'y me permitiera usar la espada', 'amontonaría los cuerpos descuartizados', 'hasta donde alcanzara']
    },
    'coriolanus-1-1|216–219': {
      en: ['For though abundantly', 'Yet are they passing cowardly.', 'What says the other troop?'],
      es: ['aunque les falta muchísimo juicio', 'son extraordinariamente cobardes.', '¿qué dice el otro grupo?']
    },
    'coriolanus-1-1|220–235': {
      en: ["’em! They said","They said they were","proverbs That hunger","That hunger broke","That meat was made","not Corn for","Corn for the rich","They vented their complainings","answered And a petition","And a petition granted","To break the heart","And make bold power","caps As they would","As they would hang","Shouting their emulation"],
      es: ['Decían que tenían hambre', 'que el hambre derriba muros', 'que la comida se hizo para las bocas', 'y que los dioses no enviaron', 'Con esos retazos daban salida', 'Cuando recibieron respuesta', 'una petición insólita', 'y hacer palidecer al poder', 'lanzaron sus gorros', 'gritando en su afán']
    },
    'coriolanus-1-1|174–176': {
      en: ['That, rubbing the poor itch', 'Make yourselves scabs?'],
      es: ['De tanto rascarse', '¿acaban convirtiéndose']
    },
    'coriolanus-1-1|178–200': {
      en: ["Beneath abhorring.","That like nor peace","The other makes","Where he should","Where foxes, geese.","Than is the coal","Or hailstone","To make him worthy","And curse that justice","Deserves your hate","A sick man’s appetite","Which would increase","Upon your favors","And hews down oaks","you? With every minute","With every minute","And call him noble","Him vile that was","That in these several","You cry against","Under the gods","Would feed on one another"],
      es: ['más allá de lo que permite', '¿Qué quieren, perros', 'La una los asusta', 'Quien confía en ustedes', 'donde espera zorros', 'No son más constantes', 'o que un granizo', 'Su virtud consiste', 'y maldecir a la justicia', 'Quien merece grandeza', 'sus afectos son como', 'que desea precisamente', 'Quien depende de su favor', 'y pretende talar robles', '¡Malditos sean!', 'Cambian de parecer', 'y vil a quien antes', '¿Qué ocurre para que', 'protesten contra el noble Senado', 'que, después de los dioses', 'Sin él, se devorarían']
    },
    'coriolanus-1-1|151–155': {
      en: ['See what I do deliver', 'Yet I can make', 'From me do back', 'And leave me but the bran.'],
      es: ['lo que entrego a cada uno', 'puedo presentar mis cuentas', 'que todos reciben de mí', 'mientras que para mí solo queda el salvado']
    },
    'coriolanus-1-1|157–164': {
      en: ['And you the mutinous', 'Their counsels and their cares', 'Touching the weal', 'No public benefit', 'But it proceeds', 'And no way from yourselves.', 'You, the great toe'],
      es: ['y ustedes, los miembros amotinados.', 'Examinen sus decisiones', 'si consideran debidamente', 'descubrirán que todos los beneficios', 'proceden de ellos', 'y de ningún modo de ustedes mismos.', '¿Qué opinas tú']
    },
    'coriolanus-1-1|166–172': {
      en: ['Of this most wise rebellion', 'Thou rascal', 'Lead’st first', 'But make you ready', 'Rome and her rats', 'The one side must'],
      es: ['de esta sapientísima rebelión', '¡Canalla!', 'te adelantas para sacar ventaja.', 'Pero preparen sus recios bastones', 'Roma y sus ratas', 'Uno de los dos bandos']
    },
    'coriolanus-1-1|130–132': {
      en: ['If you’ll bestow', 'Patience awhile'],
      es: ['si me concede un poco', 'Espere un momento']
    },
    'coriolanus-1-1|134–149': {
      en: ['Your most grave belly', 'Not rash like his accusers', '“True is it', '“That I receive', 'Which you do live upon', 'Because I am', 'Of the whole body.', 'I send it through', 'Even to the court', 'And, through the cranks', 'The strongest nerves', 'From me receive', 'Whereby they live.', 'You, my good friends', 'me—'],
      es: ['el muy respetable vientre', 'no se precipitó', 'Y dijo:', 'que soy el primero', 'Y así debe ser', 'porque soy el almacén', 'Pero recuerden', 'hasta la corte del corazón', 'y que, a través', 'tanto los nervios', 'como las venas menores', 'reciben de mí', 'Y aunque todos a la vez', 'Esto lo dice el vientre', 'fíjese bien…']
    },
    'coriolanus-1-1|109–116': {
      en: ['Which ne’er came', 'For, look you', 'As well as speak', 'To th’ discontented', 'That envied his receipt', 'As you malign', 'They are not such'],
      es: ['que no salía de los pulmones', 'Porque, fíjese', 'tanto como hacerlo hablar.', 'a los miembros descontentos', 'que envidiaban cuanto recibía', 'exactamente como ustedes denigran', 'porque no son como ustedes.']
    },
    'coriolanus-1-1|117–122': {
      en: ['The kingly crownèd', 'The counselor heart', 'Our steed the leg', 'With other muniments', 'In this our fabric'],
      es: ['La cabeza coronada', 'el corazón consejero', 'la pierna que es nuestra montura', 'y las demás defensas', 'de esta estructura que es nuestro cuerpo']
    },
    'coriolanus-1-1|123–124': {
      en: ['’Fore me, this fellow'],
      es: ['¡Por mi vida']
    },
    'coriolanus-1-1|125–126': {
      en: ['Who is the sink'],
      es: ['que es el sumidero']
    },
    'coriolanus-1-1|128–129': {
      en: ['What could the belly answer?'],
      es: ['¿qué podría responderles el vientre?']
    },
    'coriolanus-1-1|98–107': {
      en: ['Rebelled against the belly', 'That only like a gulf', 'I’ th’ midst', 'Still cupboarding', 'Like labor with the rest', 'Did see and hear', 'And, mutually participate', 'Unto the appetite', 'Of the whole body.'],
      es: ['se rebelaron contra el vientre', 'de permanecer en medio', 'ocioso e inactivo', 'guardando siempre la comida', 'y sin compartir el trabajo', 'Los otros órganos veían', 'y, colaborando entre sí', 'atendían las necesidades', 'El vientre respondió']
    },
    'coriolanus-1-1|55–57': {
      en: ['you with bats', 'with bats and clubs'],
      es: ['¿Adónde van con palos', '¿Qué sucede?']
    },
    'coriolanus-1-1|63–65': {
      en: ['neighbors,', 'will you undo yourselves?'],
      es: ['honrados vecinos,', '¿quieren provocar su propia ruina?']
    },
    'coriolanus-1-1|89–94': {
      en: ['malicious', 'Or be accused of folly.', 'A pretty tale.', 'But since it serves my purpose,', 'To stale ’t a little more.'],
      es: ['o habrá que acusarlos de necios.', 'Les contaré una bonita fábula.', 'Tal vez ya la hayan oído,', 'pero, como viene bien a mi propósito,', 'me arriesgaré a gastarla un poco más']
    },
    'coriolanus-1-1|67–80': {
      en: ['Have the patricians','Your suffering','Strike at the heaven','Against the Roman state','The way it takes','Of more strong link','Appear in your impediment','The gods, not the patricians','Your knees to them','You are transported','Thither where more attends','The helms o’ th’ state','When you curse them'],
      es: ['En cuanto a sus necesidades','y a lo que sufren','tanto les serviría','como alzarlos contra','Este seguirá su curso','y romperá diez mil','más resistentes que','La escasez la causan','deben buscar remedio','¡Ay! La desgracia','hacia males aún mayores','y ustedes calumnian','llamándolos enemigos']
    }
  };

  function restoreVisualVerseLines(paragraph, sourceText, starts) {
    if (!starts || !starts.length) return;
    const positions = starts.map(anchor => sourceText.indexOf(anchor));
    if (positions.some((position, i) => position <= 0 || sourceText.indexOf(starts[i], position + 1) !== -1)
        || positions.some((position, i) => i > 0 && position <= positions[i - 1])) return;
    // Apply backwards so splitting nodes cannot shift earlier character positions.
    for (const position of positions.reverse()) {
      const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
      let textNode, cursor = 0;
      while ((textNode = walker.nextNode())) {
        if (textNode.parentElement?.closest('.supplemental-notes')) continue;
        const end = cursor + textNode.length;
        if (position <= end && position >= cursor) {
          const marker = el('span', 'verse-break');
          marker.setAttribute('aria-hidden', 'true');
          if (position === cursor) textNode.before(marker);
          else if (position === end) textNode.after(marker);
          else textNode.splitText(position - cursor).before(marker);
          break;
        }
        cursor = end;
      }
    }
  }

  function renderSpeech(block, index, sourceScene) {
    const row = el('article', 'speech-row');
    row.dataset.index = String(index);
    row.dataset.sceneId = sourceScene.id;
    row.id = `speech-${sourceScene.id}-${index}`;
    const selected = state.bookmarks[sourceScene.id] === index;
    if (selected) row.classList.add('bookmarked');

    const gutter = el('div', 'line-gutter');
    gutter.appendChild(el('span', '', block.line));
    const mark = el('button', 'mark-button', selected ? '◆' : '◇');
    mark.type = 'button';
    mark.title = `Guardar marcador en las líneas ${block.line}`;
    mark.setAttribute('aria-label', `Marcar lectura en las líneas ${block.line}`);
    mark.addEventListener('click', () => {
      if (state.bookmarks[sourceScene.id] === index) delete state.bookmarks[sourceScene.id];
      else state.bookmarks[sourceScene.id] = index;
      state.bookmarkSceneId = sourceScene.id;
      state.bookmark = Number.isInteger(state.bookmarks[scene.id]) ? state.bookmarks[scene.id] : null;
      persist();
      updateBookmark();
    });
    gutter.appendChild(mark);
    row.appendChild(gutter);

    const character = sourceScene.characters.find(item => item.id === block.speaker)
      || { name: block.speaker, english: block.speaker, color: 'slate', identity: '' };
    const englishCell = el('div', 'speech-cell english');
    englishCell.appendChild(characterButton(character, false));
    const englishParagraph = el('p', 'speech-text');
    englishParagraph.appendChild(originalText(block.en, block.notes || []));
    const verseLayout = verifiedVerseStarts[sourceScene.id + '|' + block.line];
    restoreVisualVerseLines(englishParagraph, block.en, verseLayout?.en);
    englishCell.appendChild(englishParagraph);
    row.appendChild(englishCell);

    const spanishCell = el('div', 'speech-cell spanish');
    spanishCell.appendChild(characterButton(character, true));
    const spanishParagraph = el('p', 'speech-text', block.es);
    restoreVisualVerseLines(spanishParagraph, block.es, verseLayout?.es);
    spanishCell.appendChild(spanishParagraph);
    row.appendChild(spanishCell);
    return row;
  }

  function scenesInAct() {
    return data.scenes.filter(item => item.act === scene.act).sort((a, b) => a.scene - b.scene);
  }

  function activeCharacters() {
    const present = state.readAct ? scenesInAct().flatMap(item => item.characters) : scene.characters;
    const seen = new Set();
    return present.filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  function focusedBookmarkScene() {
    return state.readAct ? scenesInAct().find(item => item.id === state.bookmarkSceneId) || scene : scene;
  }

  function renderSpeeches() {
    closeNote();
    const container = $('dialogue-container');
    container.replaceChildren();
    const needle = state.query.trim().toLocaleLowerCase();
    let count = 0;
    const readingScenes = state.readAct ? scenesInAct() : [scene];

    readingScenes.forEach(sourceScene => {
      const matches = sourceScene.blocks.map((block, index) => ({ block, index })).filter(({ block }) => {
        const character = sourceScene.characters.find(item => item.id === block.speaker);
        const haystack = `${block.en} ${block.es} ${character?.name || ''} ${character?.english || ''}`.toLocaleLowerCase();
        return !needle || haystack.includes(needle);
      });
      if (!matches.length) return;
      const section = state.readAct ? el('section', 'act-scene') : container;
      if (state.readAct) {
        section.id = `act-scene-${sourceScene.act}-${sourceScene.scene}`;
        const heading = el('div', 'act-scene-heading');
        heading.appendChild(el('span', 'act-scene-number', `ESCENA ${sourceScene.scene}`));
        heading.appendChild(el('span', 'act-scene-place', sourceScene.place));
        section.appendChild(heading);
        if (sourceScene.stage) section.appendChild(el('div', 'stage-direction act-stage', sourceScene.stage));
      }
      matches.forEach(({ block, index }) => {
        if (block.stageBefore) section.appendChild(el('div', 'inline-stage', block.stageBefore));
        section.appendChild(renderSpeech(block, index, sourceScene));
        if (block.stageAfter) section.appendChild(el('div', 'inline-stage', block.stageAfter));
        count++;
      });
      if (state.readAct) container.appendChild(section);
    });
    $('empty-state').hidden = count !== 0;
    $('reader-end').hidden = count === 0 || !!needle;
  }

  function updateAutoPosition() {
    const saved = state.autoPosition;
    const targetScene = saved && data.scenes.find(item => item.id === saved.sceneId);
    const valid = !!targetScene && Number.isInteger(saved.index) && saved.index >= 0 && saved.index < targetScene.blocks.length;
    $('auto-position-copy').textContent = valid
      ? `Escena ${targetScene.act}.${targetScene.scene} · líneas ${targetScene.blocks[saved.index].line}`
      : 'Todavía no hay una posición guardada.';
    $('auto-resume-button').disabled = !valid;
  }

  function captureAutoPosition() {
    if ($('app-shell').hidden || !$('modal-backdrop').hidden || state.query) return;
    const focusY = Math.min(window.innerHeight * 0.33, 250);
    let row = null;
    for (const candidate of document.querySelectorAll('#dialogue-container .speech-row')) {
      const box = candidate.getBoundingClientRect();
      if (box.bottom >= focusY && box.top <= focusY) { row = candidate; break; }
      if (!row && box.top > focusY && box.top < window.innerHeight * 0.72) row = candidate;
      if (box.top > window.innerHeight * 0.72) break;
    }
    if (!row) return;
    const index = Number(row.dataset.index);
    const sceneId = row.dataset.sceneId;
    if (!sceneId || !Number.isInteger(index) || index < 0) return;
    if (state.autoPosition?.sceneId === sceneId && state.autoPosition.index === index) return;
    state.autoPosition = { sceneId, index };
    persist();
    updateAutoPosition();
  }

  function jumpToPosition(sceneId, index) {
    const target = $(`speech-${sceneId}-${index}`);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.remove('highlighted');
    void target.offsetWidth;
    target.classList.add('highlighted');
    $('sidebar').classList.remove('open');
    $('mobile-contents-button').setAttribute('aria-expanded', 'false');
  }

  function resumeAuto() {
    const saved = state.autoPosition;
    const targetScene = saved && data.scenes.find(item => item.id === saved.sceneId);
    if (!targetScene || !Number.isInteger(saved.index) || saved.index < 0 || saved.index >= targetScene.blocks.length) return;
    if (state.query) { state.query = ''; $('search-input').value = ''; renderSpeeches(); updateBookmark(); }
    if ($(`speech-${saved.sceneId}-${saved.index}`)) {
      jumpToPosition(saved.sceneId, saved.index);
      return;
    }
    pendingAutoResume = { sceneId: saved.sceneId, index: saved.index };
    const destination = `#coriolanus-${targetScene.act}-${targetScene.scene}`;
    if (window.location.hash !== destination) window.location.hash = destination;
    else { selectScene(targetScene, false); showView(); }
  }

  function updateBookmark() {
    document.querySelectorAll('.speech-row').forEach(row => {
      const selected = Number(row.dataset.index) === state.bookmarks[row.dataset.sceneId];
      row.classList.toggle('bookmarked', selected);
      row.querySelector('.mark-button').textContent = selected ? '◆' : '◇';
    });
    const targetScene = focusedBookmarkScene();
    const index = state.bookmarks[targetScene.id];
    const valid = Number.isInteger(index) && index >= 0 && index < targetScene.blocks.length;
    const percentage = valid ? ((index + 1) / targetScene.blocks.length) * 100 : 0;
    $('progress-fill').style.width = `${percentage}%`;
    $('progress-copy').textContent = valid
      ? `Escena ${targetScene.act}.${targetScene.scene} · líneas ${targetScene.blocks[index].line}`
      : 'Todavía no hay un marcador.';
    $('resume-button').disabled = !valid;
  }

  function resume() {
    const targetScene = focusedBookmarkScene();
    const index = state.bookmarks[targetScene.id];
    if (!Number.isInteger(index) || index < 0 || index >= targetScene.blocks.length) return;
    if (state.query) { state.query = ''; $('search-input').value = ''; renderSpeeches(); }
    const target = $(`speech-${targetScene.id}-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.remove('highlighted');
      void target.offsetWidth;
      target.classList.add('highlighted');
    }
    $('sidebar').classList.remove('open');
    $('mobile-contents-button').setAttribute('aria-expanded', 'false');
  }

  function renderCharacters() {
    const container = $('character-list');
    container.replaceChildren();
    activeCharacters().forEach(character => {
      const button = el('button', 'character-card');
      button.type = 'button';
      const initial = el('span', `character-initial color-${character.color}`, character.name.charAt(0));
      const copy = el('span', 'character-card-copy');
      copy.appendChild(el('span', 'character-card-name', character.name));
      copy.appendChild(el('span', 'character-card-sub', character.mentionedOnly ? 'Solo mencionado' : character.english));
      button.append(initial, copy, el('span', 'character-card-arrow', '→'));
      button.addEventListener('click', () => openModal('character', character));
      container.appendChild(button);
    });
  }

  function renderCharacterDetail(character, container) {
    const wrapper = el('div', 'modal-character');
    wrapper.style.borderBottom = '0';
    wrapper.appendChild(el('span', `character-initial color-${character.color}`, character.name.charAt(0)));
    const content = el('div');
    content.appendChild(el('h3', '', character.name));
    content.appendChild(el('span', 'english-name', character.english));
    content.appendChild(el('p', '', character.identity));
    if (character.mentionedOnly) content.appendChild(el('small', '', 'Mencionado, pero todavía no interviene en el fragmento.'));
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  }

  function modalSection(container, heading, body) {
    const section = el('section', 'help-section');
    section.append(el('h3', '', heading), el('p', '', body));
    container.appendChild(section);
  }

  function addSourceLink(container, label, url) {
    const link = el('a', 'source-modal-link', label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    container.appendChild(link);
  }

  function openModal(mode, target) {
    closeNote();
    const content = $('modal-content');
    content.replaceChildren();
    if (mode === 'character' && target) {
      $('modal-kicker').textContent = 'FICHA DE PERSONAJE';
      $('modal-title').textContent = target.name;
      renderCharacterDetail(target, content);
    } else if (mode === 'characters') {
      $('modal-kicker').textContent = 'SIN ADELANTOS DE LA TRAMA';
      $('modal-title').textContent = state.readAct ? 'Personajes del acto' : 'Personajes de la escena';
      activeCharacters().forEach((character) => renderCharacterDetail(character, content));
    } else if (mode === 'sources') {
      $('modal-kicker').textContent = 'FUENTES Y LICENCIAS';
      $('modal-title').textContent = 'Sobre esta edición';
      modalSection(content, 'Texto inglés', 'El texto de lectura sigue Folger Digital Texts, Folger Shakespeare Library. Se organiza aquí en parlamentos alineados con traducción y anotaciones. La edición Folger tiene licencia Creative Commons Atribución–NoComercial 3.0.');
      addSourceLink(content, 'Edición Folger · Coriolanus I.1 →', 'https://www.folger.edu/explore/shakespeares-works/coriolanus/read/1/1/');
      addSourceLink(content, 'Licencia CC BY-NC 3.0 →', 'https://creativecommons.org/licenses/by-nc/3.0/');
      modalSection(content, 'Cotejo y traducción', 'Algunas lecturas se cotejaron con el First Folio de 1623. La traducción y las notas en español son originales de este proyecto. Esta muestra es de uso educativo y no comercial.');
      addSourceLink(content, 'Bodleian First Folio →', 'https://firstfolio.bodleian.ox.ac.uk/');
    } else {
      $('modal-kicker').textContent = 'CÓMO LEER ESTA EDICIÓN';
      $('modal-title').textContent = 'Una lectura a dos voces';
      modalSection(content, 'Dos columnas, una misma intervención', 'Cada parlamento está alineado con su traducción para que puedas contrastarlo sin perder el lugar. En pantallas pequeñas, alterna entre inglés y español con las pestañas.');
      modalSection(content, 'Notas emergentes', 'Las palabras subrayadas con un pequeño punto esconden explicaciones léxicas, sintácticas, retóricas o de crítica textual. Selecciona una para abrir la nota. El interruptor «Notas» permite ocultar las marcas.');
      modalSection(content, 'Nombres completos', 'En lugar de abreviaturas como 1. Cit., 2. Cit. o All, cada intervención identifica al personaje o grupo. Selecciona el nombre para consultar la ficha, sin adelantos innecesarios.');
      modalSection(content, 'Marcador y búsqueda', 'Selecciona el rombo junto a un parlamento para marcar hasta dónde llegaste; queda guardado en este navegador. La búsqueda encuentra palabras tanto en inglés como en español. La tecla «/» abre la búsqueda.');
      modalSection(content, 'Separadores', 'El lector muestra los parlamentos sin líneas horizontales de forma predeterminada. Puedes recuperar esas líneas con el interruptor «Separadores».');
      modalSection(content, 'Acerca del texto', 'La columna inglesa sigue la edición Folger. La española es una traducción explicativa propia de este prototipo. Cuando hay una decisión editorial relevante, la nota identifica su carácter y la fuente.');
    }
    $('modal-backdrop').hidden = false;
    $('modal-close').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('modal-backdrop').hidden = true;
    document.body.style.overflow = '';
  }

  function applyPreferences() {
    document.documentElement.style.setProperty('--reading-size', `${state.fontSize}px`);
    $('notes-toggle').checked = state.notes;
    document.body.classList.toggle('notes-off', !state.notes);
    $('dividers-toggle').checked = state.dividers;
    document.body.classList.toggle('dividers-on', state.dividers);
    $('reader').dataset.mobileLang = state.mobileLang;
    $('lang-en').classList.toggle('active', state.mobileLang === 'en');
    $('lang-es').classList.toggle('active', state.mobileLang === 'es');
    $('lang-en').setAttribute('aria-pressed', String(state.mobileLang === 'en'));
    $('lang-es').setAttribute('aria-pressed', String(state.mobileLang === 'es'));
    $('app-shell').classList.toggle('nav-collapsed', state.navCollapsed);
    $('app-shell').classList.toggle('characters-collapsed', state.charactersCollapsed);
    $('nav-panel-toggle').setAttribute('aria-expanded', String(!state.navCollapsed));
    $('characters-panel-toggle').setAttribute('aria-expanded', String(!state.charactersCollapsed));
    $('nav-panel-toggle').title = state.navCollapsed ? 'Desplegar navegación y posición de lectura' : 'Replegar navegación y posición de lectura';
    $('characters-panel-toggle').title = state.charactersCollapsed ? 'Desplegar personajes' : 'Replegar personajes';
    $('nav-toggle-icon').textContent = state.navCollapsed ? '→' : '←';
    $('characters-toggle-icon').textContent = state.charactersCollapsed ? '←' : '→';
    if (!state.notes) closeNote();
  }

  function selectScene(target, readAct = false) {
    scene = target;
    state.readAct = readAct;
    characters = new Map(scene.characters.map(character => [character.id, character]));
    try { localStorage.setItem('shakespeare-scene', scene.id); } catch (_) {}
    if (!readAct) state.bookmarkSceneId = scene.id;
    state.bookmark = Number.isInteger(state.bookmarks[scene.id]) && state.bookmarks[scene.id] >= 0
      && state.bookmarks[scene.id] < scene.blocks.length ? state.bookmarks[scene.id] : null;
    state.query = '';
    $('search-input').value = '';

    $('scene-introduction').textContent = scene.introduction;
    $('scene-introduction').hidden = readAct;
    $('stage-direction').textContent = scene.stage;
    $('stage-direction').hidden = readAct;
    document.querySelector('.act-ornament').textContent = readAct ? String(scene.act) : `${scene.act}.${scene.scene}`;
    document.querySelector('.chapter-title').textContent = readAct
      ? `ACTO ${scene.act} / LECTURA CONTINUA`
      : `ACTO ${scene.act} / ESCENA ${scene.scene}`;
    document.querySelector('.heading-place').textContent = readAct
      ? `${scenesInAct().length} ESCENAS` : scene.place.toUpperCase();
    document.querySelector('.popover-foot').textContent = `CORIOLANUS · ${scene.act}`;
    const railTitle = document.querySelector('.rail-content .side-overline');
    if (railTitle) railTitle.textContent = readAct ? 'EN ESTE ACTO' : 'EN ESTA ESCENA';
    $('character-rail').setAttribute('aria-label', readAct ? 'Personajes del acto' : 'Personajes de esta escena');
    $('search-input').placeholder = readAct ? 'Buscar en el acto...' : 'Buscar en esta escena...';

    const modeLabel = readAct ? 'Leer por escenas' : `Leer acto ${scene.act} completo`;
    $('read-act-toggle').textContent = modeLabel;
    $('read-act-toggle').setAttribute('aria-pressed', String(readAct));
    $('read-mode-footer').textContent = modeLabel;
    $('reader-end-label').textContent = readAct ? `Fin del acto ${scene.act}` : `Fin de la escena ${scene.act}.${scene.scene}`;
    const index = data.scenes.findIndex(item => item.id === scene.id);
    const next = data.scenes[index + 1];
    $('next-scene').hidden = readAct || !next;
    $('next-scene').textContent = next ? `Escena ${next.act}.${next.scene} →` : '';

    document.querySelectorAll('[data-scene-id]').forEach(button => {
      const active = !readAct && button.dataset.sceneId === scene.id;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
    revealActiveAct();
    renderCharacters();
    renderSpeeches();
    updateBookmark();
    updateAutoPosition();
    persist();
    $('sidebar').classList.remove('open');
    $('mobile-contents-button').setAttribute('aria-expanded', 'false');
  }

  function showView() {
    const hash = window.location.hash.toLowerCase();
    const reading = hash.startsWith('#coriolanus');
    const wasReading = !$('app-shell').hidden;
    const requestedAct = hash.match(/^#coriolanus-act-(\d+)$/);
    const requestedScene = hash.match(/^#coriolanus-(\d+)-(\d+)$/);
    if (reading) {
      if (requestedAct) {
        const actNumber = Number(requestedAct[1]);
        const target = scene.act === actNumber ? scene : data.scenes.find(item => item.act === actNumber);
        if (target) selectScene(target, true);
      } else if (requestedScene) {
        const target = data.scenes.find(item => item.act === Number(requestedScene[1]) && item.scene === Number(requestedScene[2]));
        if (target) selectScene(target, false);
      } else {
        selectScene(scene, false);
      }
    }
    if (wasReading && !reading) window.dispatchEvent(new Event('edicion-viva:reading-exit'));
    $('home-screen').hidden = reading;
    $('app-shell').hidden = !reading;
    if (!wasReading && reading) window.dispatchEvent(new Event('edicion-viva:reading-enter'));
    if (!reading) {
      closeNote();
      if (!$('modal-backdrop').hidden) closeModal();
      $('sidebar').classList.remove('open');
      $('mobile-contents-button').setAttribute('aria-expanded', 'false');
    }
    document.title = reading ? 'Coriolanus · Shakespeare · Edición viva' : 'Shakespeare · Edición viva';
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (reading && pendingAutoResume) {
      const pending = pendingAutoResume;
      pendingAutoResume = null;
      requestAnimationFrame(() => requestAnimationFrame(() => jumpToPosition(pending.sceneId, pending.index)));
    }
  }

  function addListeners() {
    $('search-input').addEventListener('input', (event) => {
      state.query = event.target.value;
      renderSpeeches();
      updateBookmark();
    });
    $('clear-search').addEventListener('click', () => { $('search-input').value = ''; state.query = ''; renderSpeeches(); updateBookmark(); $('search-input').focus(); });
    $('notes-toggle').addEventListener('change', (event) => { state.notes = event.target.checked; applyPreferences(); persist(); });
    $('dividers-toggle').addEventListener('change', (event) => { state.dividers = event.target.checked; applyPreferences(); persist(); });
    $('nav-panel-toggle').addEventListener('click', () => { state.navCollapsed = !state.navCollapsed; applyPreferences(); persist(); });
    $('characters-panel-toggle').addEventListener('click', () => { state.charactersCollapsed = !state.charactersCollapsed; applyPreferences(); persist(); });
    $('font-minus').addEventListener('click', () => { state.fontSize = Math.max(15, state.fontSize - 1); applyPreferences(); persist(); });
    $('font-plus').addEventListener('click', () => { state.fontSize = Math.min(22, state.fontSize + 1); applyPreferences(); persist(); });
    $('lang-en').addEventListener('click', () => { state.mobileLang = 'en'; applyPreferences(); persist(); });
    $('lang-es').addEventListener('click', () => { state.mobileLang = 'es'; applyPreferences(); persist(); });
    $('resume-button').addEventListener('click', resume);
    $('auto-resume-button').addEventListener('click', resumeAuto);
    window.addEventListener('scroll', () => {
      if (autoPositionTimer) clearTimeout(autoPositionTimer);
      autoPositionTimer = setTimeout(captureAutoPosition, 160);
    }, { passive: true });
    window.addEventListener('pagehide', captureAutoPosition);
    document.addEventListener('visibilitychange', () => { if (document.hidden) captureAutoPosition(); });
    $('guide-button').addEventListener('click', () => openModal('characters'));
    $('full-guide-button').addEventListener('click', () => openModal('characters'));
    $('work-picker').addEventListener('click', () => { window.location.hash = ''; showView(); });
    $('home-button').addEventListener('click', () => { window.location.hash = ''; showView(); });
    $('open-reader').addEventListener('click', () => { window.location.hash = 'coriolanus'; showView(); });
    $('source-button').addEventListener('click', () => openModal('sources'));
    $('help-button').addEventListener('click', () => openModal('help'));
    window.addEventListener('hashchange', showView);
    document.querySelectorAll('[data-scene-id]').forEach(button => button.addEventListener('click', () => {
      const target = data.scenes.find(item => item.id === button.dataset.sceneId);
      if (!target) return;
      const destination = `#coriolanus-${target.act}-${target.scene}`;
      if (window.location.hash === destination) { selectScene(target, false); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      else window.location.hash = destination;
    }));
    const toggleMode = () => {
      window.location.hash = state.readAct ? `coriolanus-${scene.act}-${scene.scene}` : `coriolanus-act-${scene.act}`;
    };
    $('read-act-toggle').addEventListener('click', toggleMode);
    $('read-mode-footer').addEventListener('click', toggleMode);
    $('next-scene').addEventListener('click', () => {
      const index = data.scenes.findIndex(item => item.id === scene.id);
      const next = data.scenes[index + 1];
      if (next) window.location.hash = `coriolanus-${next.act}-${next.scene}`;
    });
    $('mobile-contents-button').addEventListener('click', () => {
      const open = $('sidebar').classList.toggle('open');
      $('mobile-contents-button').setAttribute('aria-expanded', String(open));
    });
    $('close-note').addEventListener('click', closeNote);
    $('modal-close').addEventListener('click', closeModal);
    $('modal-backdrop').addEventListener('click', (event) => { if (event.target === $('modal-backdrop')) closeModal(); });
    document.addEventListener('click', (event) => {
      if (!$('note-popover').hidden && !event.target.closest('#note-popover') && !event.target.closest('.note-trigger') && !event.target.closest('.supplementary-note')) closeNote();
      if ($('sidebar').classList.contains('open') && !event.target.closest('#sidebar') && !event.target.closest('#mobile-contents-button')) {
        $('sidebar').classList.remove('open');
        $('mobile-contents-button').setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('resize', closeNote);
    window.addEventListener('scroll', closeNote, { passive: true });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeNote(); closeModal(); $('sidebar').classList.remove('open');
        $('mobile-contents-button').setAttribute('aria-expanded', 'false');
      }
      if (event.key === '/' && !$('app-shell').hidden && !event.ctrlKey && !event.metaKey && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && $('modal-backdrop').hidden) {
        event.preventDefault(); $('search-input').focus();
      }
    });
  }

  buildSceneNavigation();
  enableActAccordions();
  selectScene(scene, false);
  updateAutoPosition();
  applyPreferences();
  addListeners();
  showView();
})();
