# ghibli613.github.io (Angular)

Personal portfolio site built with Angular and structured for long-term growth.

## Runtime requirement

- Node.js `25.8.1` (configured in `.nvmrc`)
- npm `11+`

If you use `nvm`:

```bash
nvm use
```

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Build production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured for the user site `ghibli613.github.io`.

```bash
npm run deploy
```

The deploy script builds with the proper base href and publishes `dist/ghibli-portfolio/browser`.

## Project structure

- `src/app/pages/home`: landing page and highlights
- `src/app/pages/projects`: project list page
- `src/app/pages/publications`: scientific publishing page (ready to expand)
- `src/app/pages/about`: personal profile page
- `src/app/data/site-content.ts`: central content model for projects and publications

## Extend with more pages later

1. Generate a new standalone page component.
2. Add a route in `src/app/app.routes.ts`.
3. Add a nav item in `src/app/app.component.ts`.
4. Add or reuse data entries in `src/app/data/site-content.ts`.

The router currently uses hash location strategy so deep links work reliably on GitHub Pages.
