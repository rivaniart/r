# Rivani Fine Art — website export

This folder is a portable static export of the Rivani art-sales website project.

## Run locally

**Option 1 (Node.js, no dependencies):**

```bash
npm start
```
Then open `http://localhost:4173`.

**Option 2 (Python):**

```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173`.

The site includes the 21-work catalogue, category filters, search, artwork detail panels, in-home MUSE imagery, favourites/shortlist stored in the browser, and a copyable enquiry list.

## Main files
- `index.html` — page structure
- `styles.css` — full responsive styling
- `app.js` — filtering, search, product views and shortlist
- `data/artworks.js` / `data/artworks.json` — catalogue data
- `data/muse.js` — MUSE gallery image list
- `assets/logo.png` — Rivani logo asset
- `assets/images/` — artwork/interior images
- `server.js` — tiny dependency-free local server
