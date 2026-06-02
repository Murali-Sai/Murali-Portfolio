# Murali Sai — Portfolio

A single-page portfolio for an AI Engineer, built in the academic-CV style (profile rail + content column). Sections: **About → Skills → Experience → Projects → Publications**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **lucide-react** icons. Deploys to **Vercel**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

> Note: this machine's `C:` drive is full, so local installs/builds need the npm cache and temp dir on another drive, e.g.:
> ```bash
> npm install --cache E:/npm-cache
> # PowerShell, before `npm run build`:
> $env:TMP="E:\tmp"; $env:TEMP="E:\tmp"; npm run build
> ```
> Vercel builds in the cloud, so this only affects local runs. Freeing space on `C:` removes the need for these flags.

## Customize

All content lives in one file: [`lib/data.ts`](lib/data.ts) — edit `profile`, `about`, `skills`, `experience`, `projects`, `publications` there. No component edits needed for content changes.

**Add your photo:** drop a square image named `avatar.jpg` into the [`public/`](public/) folder. Until then, an "MS" monogram placeholder is shown. (To use a different filename/format, update the `src` in [`components/Avatar.tsx`](components/Avatar.tsx).)

**Resume / Download CV:** replace [`public/Murali_Sai_Resume.pdf`](public/Murali_Sai_Resume.pdf) with your latest PDF (keep the filename, or update `profile.resume` in `lib/data.ts`).

**Theme color:** the emerald accent is defined in [`tailwind.config.ts`](tailwind.config.ts) under `colors.accent`, plus the background gradient in [`app/globals.css`](app/globals.css).

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js**; no env vars needed. Click **Deploy**.

Vercel auto-deploys on every push to the default branch.
