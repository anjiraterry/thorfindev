# Thorfin Dev: marketing site

1. `npx create-next-app@latest thorfin-dev --ts --tailwind --app --eslint --src-dir=false --import-alias "@/*"`
2. Copy `app/`, `components/` and `lib/` from this folder over the generated ones.
3. `npm run dev`

Requires Next.js 15+ and Tailwind CSS v4 (the default in create-next-app). Tokens live in `app/globals.css`; content lives in `lib/data.ts`.
Replace the placeholder LinkedIn URLs, team names and testimonials in `lib/data.ts`.
