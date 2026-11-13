# Editorial workflow for *Coriolanus*

This is an incremental, noncommercial, bilingual reading edition. The machine-readable checkpoint is [`progress.json`](progress.json). Review it and the actual live `main` branch before every editing session. Never assume chat history or a temporary workspace is the source of truth.

1. Verify the last published speech and the next exact Folger passage by **act, scene, and line range**. Work in coherent dialogue units, normally about 20–30 Folger lines, or fewer at natural speech boundaries; a fragment may stop within a scene, but never mid-speech unless there is a clear editorial reason. Do not duplicate or silently skip text.
2. Transcribe/check the English against the **online Folger Digital Texts reading edition**: <https://www.folger.edu/explore/shakespeares-works/coriolanus/>. That edition has an Attribution–NonCommercial 3.0 licence; retain credit and keep the site noncommercial.
3. The user's supplied Folger-branded EPUB is a **separately copyrighted Simon & Schuster edition** (eBook edition November 2015, 2009 Folger copyright, all rights reserved). It can be privately consulted for editorial comparison, **not copied into this repository as the licensed base text**. The user also supplied a Spanish *Coriolano* PDF from textos.info (2017) for private comparison. Do not copy that translation: author an independent Spanish explanatory rendering.
4. Use clear **general Spanish**, with *tú* where singular address is needed and *ustedes* for plural; never Argentine *voseo* or *vosotros*. Aim for accuracy and readability before literary flourish. Keep philological notes selective, concise, and clearly distinguish grammar, lexicon, interpretation, and textual variants. Verify variant readings before claiming them.
5. Keep English and Spanish aligned by complete speech blocks, with full speaker names. Adapt scene navigation and loading before incorporating multiple scenes. Preserve the home page, togglable horizontal separators, character guide, and mobile layout.
6. Run syntax and interaction checks, then commit the publication and checkpoint **together**, using optimistic concurrency/expected branch SHA. Verify GitHub Pages builds successfully. Update `progress.json` only for text really published and checked. If blocked, do not increment the checkpoint and do not fabricate content.
7. At the end of each session, report the exact act/scene/lines, what changed, the commit or URL, any uncertainties, and the next passage. Upon completing and checking all five acts, set `status` to `complete`, report the result, and disable the recurring task.

The current 1.1.1–67 sample is a **prototype** and needs eventual editorial rechecking against these sources. Avoid treating it as a finished critical edition.

## Large-file GitHub connector fallback (mandatory)

The GitHub connector's `fetch_file` can return an empty `content` for the large root `data.js` while still returning its correct blob `sha`. **This is not proof that the file is empty or inaccessible.** Before reporting a blockage or asking the user to use Codex:

1. Call `fetch_file` for `data.js` and capture `result.sha`. If `result.content` is empty, call `fetch_blob({repository_full_name: "ignacioaragues/shakespeare-edicion-viva", blob_sha: result.sha})`. The blob endpoint has successfully returned the complete ~1.45 MB file.
2. Validate the recovered content: it begins with `window.SHAKESPEARE_READER_DATA =`, ends with `;`, parses as JSON after removing that assignment and semicolon, and contains `works` and `scenes`. Check the latest published scene against `editorial/progress.json` before editing.
3. Never substitute an empty `fetch_file` response for the existing data, truncate the file, or advance the checkpoint on a failed read. A failed blob retrieval is a real blocker: leave `main` unchanged and report it.
4. Before committing, recheck the latest `main` head. Write updated `data.js`, `editorial/progress.json`, and any reader changes into **one Git tree and one commit**, then update `main` with `expected_sha` equal to the head inspected. On a race, re-read and reconcile; never force-overwrite.
5. For future substantial growth, consider splitting scene data only after a separate migration with verified navigation and stable `data-reading-id` highlight identifiers; splitting is **not** necessary merely because `fetch_file` returns empty content.
