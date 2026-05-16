# Deathmancer Website

First static website for **Deathmancer**, a competitive engine-building card game where players race to 100 score over 6 rounds. Living Heroes generate score while Undead units scale the multiplier.

## Project Structure

```text
.
├── index.html
├── how-to-play.html
├── scorekeeper.html
├── styles.css
├── script.js
├── assets/
│   ├── downloads/
│   │   └── deathmancer-rulebook-v1.pdf
│   └── images/
│       ├── card-placeholder-living.svg
│       ├── card-placeholder-undead.svg
│       ├── deathmancer-hero.svg
│       ├── deathmancer-playmat.jpg
│       ├── grief.jpg
│       ├── mercy.jpg
│       ├── proxy-playtest.jpg
│       └── table-placeholder.svg
```

## Local Preview

Open `index.html` directly in a browser, or run a tiny static server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing Notes

- Main page content lives in `index.html`.
- The placeholder video guide page is `how-to-play.html`.
- The placeholder scorekeeper route is `scorekeeper.html`.
- Global styles live in `styles.css`.
- Mobile navigation behavior lives in `script.js`.
- Final illustrations currently used by the site are `assets/images/grief.jpg` and `assets/images/mercy.jpg`.
- The gallery uses `assets/images/proxy-playtest.jpg` for the early proxy playtest concept.
- The rulebook download currently points to `assets/downloads/deathmancer-rulebook-v1.pdf`.
- Artwork and rulebook content are project assets; preserve credit and copyright notes when publishing.

## GitHub Pages Deployment

This site is ready for GitHub Pages because it uses static files only.

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose the `main` branch and the repository root folder.
6. Save, then wait for GitHub Pages to publish the site.

No build command is required.
