# WebPulse UX

Static marketing site built with Next.js 16, TypeScript, and Tailwind. The project now exports a fully static bundle suited for GitHub Pages.

## Development
- Install: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`

## Static export (GitHub Pages)
- Build + export: `npm run build` (outputs to `out/` and drops a `.nojekyll` file)
- Preview export locally: `npx serve out`
- Note: building fetches the Google Geist fonts at compile time; make sure the build runner has internet access (GitHub Actions does).

## Deployment
- A workflow at `.github/workflows/deploy.yml` builds on pushes to `main` and publishes the `out/` directory to GitHub Pages.
- Enable it in GitHub: Settings → Pages → Source → GitHub Actions.
- Once enabled, push to `main` to trigger deployment; the workflow uses Node 20 with cached npm installs.
