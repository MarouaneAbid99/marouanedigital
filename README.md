# MAROUANEDIGITAL

Premium Next.js portfolio site built with App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run start
```

## Environment Variables
Copy `.env.example` to `.env.local` and fill values:

```bash
NEXT_PUBLIC_SITE_URL=REQUIRED_FROM_USER
```

## Deploy to Vercel (Hobby)
1. Push this repository to GitHub.
2. In Vercel, click `Add New Project` and import the repo.
3. Framework preset: `Next.js` (auto-detected).
4. Add environment variables from `.env.example` in:
   `Project Settings` -> `Environment Variables`.
5. Click `Deploy`.

After first deploy, every push to your production branch triggers a new deployment automatically.
