# Roshen — Sigiriya Local Guide

Marketing site for **Roshen**, a local guide in Sigiriya, Sri Lanka.

The site deliberately shows only his first name and "Sigiriya" as the location —
no full name and no street address. Keep it that way when editing content.

- Mobile-first one-pager, Next.js 15 App Router, static export (`output: "export"`).
- Four languages switchable from the header: **English, සිංහල, हिन्दी, Deutsch**.
  The choice is remembered in `localStorage`, can be forced with `?lang=de`, and
  otherwise follows the browser language.
- Tours covered: Pidurangala sunrise hike, Sigiriya Lion Rock, Thalkote Wewa lake,
  hidden local spots, cooking class at Roshen's home, accommodation & transport.
- Contact goes straight to WhatsApp / phone: **+94 78 691 5604**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Content

All copy lives in [`lib/dictionary.ts`](lib/dictionary.ts) — one object per
language, same shape. To change a sentence, edit it in all four objects.

Photos and the video are listed in [`lib/media.ts`](lib/media.ts). To add new
media, drop the originals somewhere, add an entry to
[`scripts/optimize-media.mjs`](scripts/optimize-media.mjs) and run:

```bash
MEDIA_SRC=/path/to/originals npm run media
```

That writes web-sized WebP files into `public/media`. Then register the new file
in `lib/media.ts` and add a caption for every language in `lib/dictionary.ts`.
