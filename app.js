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
    query: ''
  };
  state.bookmark = Number.isInteger(stored.bookmarks?.[scene.id]) && stored.bookmarks[scene.id] < scene.blocks.length ? stored.bookmarks[scene.id] : (scene.id === 'coriolanus-1-1' && Number.isInteger(stored.bookmark) && stored.bookmark < scene.blocks.length ? stored.bookmark : null);
  let currentNoteTrigger = null;

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ fontSize: state.fontSize, notes: state.notes, dividers: state.dividers, navCollapsed: state.navCollapsed, charactersCollapsed: state.charactersCollapsed, bookmark: state.bookmark, bookmarks: {...(stored.bookmarks || {}), [scene.id]: state.bookmark}, mobileLang: state.mobileLang })); }
    catch (_) { /* Browsers that disable local storage still get the reader. */ }
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

  function renderSpeech(block, index) {
    const row = el('article', 'speech-row');
    row.dataset.index = String(index);
    row.id = `speech-${index}`;
    if (state.bookmark === index) row.classList.add('bookmarked');

    const gutter = el('div', 'line-gutter');
    gutter.appendChild(el('span', '', block.line));
    const mark = el('button', 'mark-button', state.bookmark === index ? '◆' : '◇');
    mark.type = 'button';
    mark.title = `Guardar marcador en las líneas ${block.line}`;
    mark.setAttribute('aria-label', `Marcar lectura en las líneas ${block.line}`);
    mark.addEventListener('click', () => {
      state.bookmark = state.bookmark === index ? null : index;
      persist();
      updateBookmark();
    });
    gutter.appendChild(mark);
    row.appendChild(gutter);

    const character = characters.get(block.speaker);
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

  function renderSpeeches() {
    closeNote();
    const container = $('dialogue-container');
    container.replaceChildren();
    const needle = state.query.trim().toLocaleLowerCase();
    let count = 0;
    scene.blocks.forEach((block, index) => {
      const character = characters.get(block.speaker);
      const haystack = `${block.en} ${block.es} ${character.name} ${character.english}`.toLocaleLowerCase();
      if (needle && !haystack.includes(needle)) return;
      if (block.stageBefore) container.appendChild(el('div', 'inline-stage', block.stageBefore));
      container.appendChild(renderSpeech(block, index));
      if (block.stageAfter) container.appendChild(el('div', 'inline-stage', block.stageAfter));
      count++;
    });
    $('empty-state').hidden = count !== 0;
  }

  function updateBookmark() {
    document.querySelectorAll('.speech-row').forEach((row) => {
      const selected = Number(row.dataset.index) === state.bookmark;
      row.classList.toggle('bookmarked', selected);
      row.querySelector('.mark-button').textContent = selected ? '◆' : '◇';
    });
    const percentage = state.bookmark === null ? 0 : ((state.bookmark + 1) / scene.blocks.length) * 100;
    $('progress-fill').style.width = `${percentage}%`;
    $('progress-copy').textContent = state.bookmark === null ? 'Todavía no hay un marcador.' : `Marcador en las líneas ${scene.blocks[state.bookmark].line} · ${Math.round(percentage)} % de la muestra`;
    $('resume-button').disabled = state.bookmark === null;
  }

  function resume() {
    if (state.bookmark === null) return;
    if (state.query) { state.query = ''; $('search-input').value = ''; renderSpeeches(); }
    const target = $(`speech-${state.bookmark}`);
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
    scene.characters.forEach((character) => {
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
      $('modal-title').textContent = 'Personajes de la escena';
      scene.characters.forEach((character) => renderCharacterDetail(character, content));
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

  function selectScene(target) {
    scene = target;
    characters = new Map(scene.characters.map(character => [character.id, character]));
    try { localStorage.setItem('shakespeare-scene', scene.id); } catch (_) {}
    state.bookmark = Number.isInteger(stored.bookmarks?.[scene.id]) && stored.bookmarks[scene.id] < scene.blocks.length ? stored.bookmarks[scene.id] : null;
    state.query = ''; $('search-input').value = '';
    $('scene-introduction').textContent = scene.introduction;
    $('stage-direction').textContent = scene.stage;
    document.querySelector('.act-ornament').textContent = `${scene.act}.${scene.scene}`;
    document.querySelector('.chapter-title').textContent = `ACTO ${scene.act} / ESCENA ${scene.scene}`;
    document.querySelector('.heading-place').textContent = scene.place.toUpperCase();
    document.querySelector('.sample-notice').textContent = `Edición en curso: ${scene.sectionLabel}.`;
    document.querySelector('.popover-foot').textContent = `CORIOLANUS · ${scene.act}.${scene.scene}`;
    document.querySelectorAll('[data-scene-id]').forEach(button => { const active = button.dataset.sceneId === scene.id; button.classList.toggle('active', active); if (active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current'); });
    renderCharacters(); renderSpeeches(); updateBookmark(); persist();
    $('sidebar').classList.remove('open'); $('mobile-contents-button').setAttribute('aria-expanded','false');
  }

  function showView() {
    const reading = window.location.hash.toLowerCase().startsWith('#coriolanus');
    const requested = window.location.hash.toLowerCase().match(/^#coriolanus-(\d+)-(\d+)$/);
    if (requested) { const target = data.scenes.find(s => s.act === Number(requested[1]) && s.scene === Number(requested[2])); if (target && target !== scene) selectScene(target); }
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
    document.querySelectorAll('[data-scene-id]').forEach(button => button.addEventListener('click', () => { const target = data.scenes.find(s => s.id === button.dataset.sceneId); if (target) { selectScene(target); window.location.hash = `coriolanus-${target.act}-${target.scene}`; window.scrollTo({top:0,behavior:'smooth'}); } }));
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

  $('scene-introduction').textContent = scene.introduction;
  $('stage-direction').textContent = scene.stage;
  selectScene(scene);
  applyPreferences();
  updateBookmark();
  addListeners();
  showView();
})();
