# Shakespeare · Edición viva

An experimental, buildless bilingual and annotated Shakespeare reader. Currently ships a incremental edition of *Coriolanus*, currently covering Act I and the opening of II.2, rather than claiming to include a whole play.

## What the site does

- A literary landing page with a work selector, followed by the reading view. Only genuinely available works appear as readable cards.
- Synchronized English/Spanish speeches, with full speaker labels on both sides. The Spanish uses a general register without Argentine *voseo* or *vosotros*.
- Contextual notes on words and constructions, as well as a small piece of textual criticism.
- An accessible dramatis personae guide without spoilers beyond the sample.
- Search in both languages, font controls, mobile language switch, browser-local bookmark.
- Optional horizontal speech separators, off by default, with the reader preference stored locally.
- Clear edition/provenance labels.

## Adding plays and scenes

The text/data model is in `data.js`. A work declares an `id`, titles and scene IDs. A scene declares an act, a scene, a setting, characters and an ordered array of bilingual blocks. Each block includes source line numbers, one speaker key, an English `en` string, an original Spanish `es` rendering, and optional notes keyed to a term in the English text. Notes whose terms overlap another annotation remain available as small supplementary buttons.

The reader supports explicit scene navigation, with scene-specific bookmarks and direct scene hashes. For substantial expansion, move each scene to its own JSON file and load scenes on demand, retaining this alignment model.

Incremental work on *Coriolanus* is tracked in [`editorial/progress.json`](editorial/progress.json), with the source, translation, quality and publication rules in [`editorial/WORKFLOW.md`](editorial/WORKFLOW.md). Each new batch must update the code and progress together; do not infer the next passage from a chat summary alone.

The home page opens at the site root. `#coriolanus` opens the reader and `#coriolanus-1-2` selects scene I.2 and `#coriolanus-1-3` selects I.3; `#coriolanus-1-4` selects I.4; `#coriolanus-1-5` selects I.5; `#coriolanus-1-6` selects I.6; `#coriolanus-1-7` selects I.7; `#coriolanus-1-8` selects I.8; `#coriolanus-1-9` selects I.9; `#coriolanus-1-10` selects I.10; `#coriolanus-2-1` selects II.1; `#coriolanus-2-2` selects II.2. `#coriolanus-act-1` offers continuous reading of Act I. The brand button returns to the library. Sources and license details remain accessible through the home-page attribution and the reader's **Fuentes** control.

The three static assets linked in `index.html` carry a small `?v=` cache-busting version. Increase it when changing `styles.css`, `app.js` or `data.js`; otherwise readers may see the new HTML with cached old assets for a while after a GitHub Pages deployment.

## Sources and rights

English base: [Folger Digital Texts, *Coriolanus* I.1](https://www.folger.edu/explore/shakespeares-works/coriolanus/read/1/1/), © editorial text Folger Shakespeare Library, [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/). The extract has been segmented by individual speeches and given bilingual annotation markers; punctuation and spelling follow the modernized reading text in the main. Select textual readings were checked against the [Bodleian First Folio](https://firstfolio.bodleian.ox.ac.uk/). This version is **noncommercial**. The underlying Shakespeare play is public domain, but the Folger editorial text is separately licensed.

The Spanish translations and Spanish critical notes in this sample are newly authored for this project. **Do not paste modern published Spanish translations into this repository without confirming their publication rights or obtaining permission.**

No server-side accounts or remote user data: reader preferences and bookmarks are stored locally in the browser. Permanent library updates require publishing a new version of the website.

## Publishing on GitHub Pages

This repository is a static site ready to publish directly from its root directory on the `main` branch. In repository settings, choose **Pages → Deploy from a branch → main / (root)**. The page uses only relative paths, so it works at a GitHub project URL without a custom domain.
