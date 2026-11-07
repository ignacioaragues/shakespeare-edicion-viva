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
    charactersCollapsed: stored.charactersCollapsed === true,
    bookmark: null,
    mobileLang: stored.mobileLang === 'es' ? 'es' : 'en',
    query: '',
    readAct: false,
    bookmarks: {...(stored.bookmarks || {})},
    bookmarkSceneId: stored.bookmarkSceneId || scene.id
  };
  if (scene.id === 'coriolanus-1-1' && !Number.isInteger(state.bookmarks[scene.id]) && Number.isInteger(stored.bookmark) && stored.bookmark >= 0 && stored.bookmark < scene.blocks.length) state.bookmarks[scene.id] = stored.bookmark;
  state.bookmark = Number.isInteger(state.bookmarks[scene.id]) && state.bookmarks[scene.id] >= 0 && state.bookmarks[scene.id] < scene.blocks.length ? state.bookmarks[scene.id] : null;
  let currentNoteTrigger = null;

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        fontSize: state.fontSize, notes: state.notes, dividers: state.dividers,
        navCollapsed: state.navCollapsed, charactersCollapsed: state.charactersCollapsed,
        bookmark: state.bookmark, bookmarks: state.bookmarks, bookmarkSceneId: state.bookmarkSceneId,
        mobileLang: state.mobileLang
      }));
    } catch (_) { /* Reading works with storage disabled. */ }
  }

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined && content !== null) node.textContent = content;
    return node;
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
    englishCell.appendChild(englishParagraph);
    row.appendChild(englishCell);

    const spanishCell = el('div', 'speech-cell spanish');
    spanishCell.appendChild(characterButton(character, true));
    spanishCell.appendChild(el('p', 'speech-text', block.es));
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
    renderCharacters();
    renderSpeeches();
    updateBookmark();
    persist();
    $('sidebar').classList.remove('open');
    $('mobile-contents-button').setAttribute('aria-expanded', 'false');
  }

  function showView() {
    const hash = window.location.hash.toLowerCase();
    const reading = hash.startsWith('#coriolanus');
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
    $('home-screen').hidden = reading;
    $('app-shell').hidden = !reading;
    if (!reading) {
      closeNote();
      if (!$('modal-backdrop').hidden) closeModal();
      $('sidebar').classList.remove('open');
      $('mobile-contents-button').setAttribute('aria-expanded', 'false');
    }
    document.title = reading ? 'Coriolanus · Shakespeare · Edición viva' : 'Shakespeare · Edición viva';
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  selectScene(scene, false);
  applyPreferences();
  addListeners();
  showView();
})();
