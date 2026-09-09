# AURELIA GEMS — React / Vite

This version fixes the production image issue on Vercel.

## Important fix
All website images are now stored in:

`public/assets/`

and referenced as:

`/assets/image-name.jpg`

Vite copies everything inside `public/` directly into the production build, so the images work both locally and on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Deploy the project root to Vercel. Framework preset: **Vite**.
