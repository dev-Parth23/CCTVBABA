# Baba Sales (`cctvbaba.com`) — Next.js Static Export Source

Built strictly with **Next.js (App Router)**, **React.js**, **JavaScript** (`.js` / `.jsx`), and **Tailwind CSS**, configured for static export (`output: 'export'`).

## Quick Start

```bash
npm install
npm run dev
```

## Build Static Site (`out/` folder for cctvbaba.com hosting)

```bash
npm run build
```

Upload the generated `out/` directory to Hostinger, cPanel, Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

## Adding Your Google My Business (GMB) Video Links

Open `src/data/siteData.js` and locate `GMB_VIDEOS`. Paste any YouTube URL (`youtubeUrl`) or Google Drive share link (`driveUrl`) into each item—the video modal automatically embeds it.

## Optional: Direct Background Email Delivery (No Mail App Prompt)

The contact form in `src/components/EnquiryForm.jsx` prepares a structured enquiry and lets visitors dispatch directly via `mailto:cctvagra1@gmail.com` or WhatsApp (`+91 94102 54350`). To also submit silently in the background on a static site, add a free Web3Forms or Formspree endpoint `fetch()` call inside `handleSubmit`.

## SEO & ChatGPT / AI Search Optimization

- `src/app/layout.js` embeds complete Schema.org JSON-LD (`LocalBusiness`, `OfferCatalog`, `FAQPage`), OpenGraph, and Twitter metadata.
- `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` expose verified business data to Googlebot, GPTBot, and OAI-SearchBot.
