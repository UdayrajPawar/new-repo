# Wadaje Motors India — Pre-Launch Corporate Website

A professional, premium pre-launch corporate website for **Wadaje Motors India**, built to build trust, display official company documents, and announce the upcoming launch of the company's products and services.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (light animations only)
- **Lucide React** (icons)

No database. No Supabase. No Firebase. No MongoDB. No PostgreSQL. No environment variables. No API keys. Everything is stored locally in JSON files and static PDF files.

---

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The site runs immediately — no additional configuration, database setup, or `.env` file is required.

To create a production build:

```bash
npm run build
npm run start
```

---

## Project Structure

```
wadaje-motors/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx           # Home page (assembles all sections)
│   └── globals.css        # Tailwind + global styles
├── components/
│   ├── Navbar.tsx          # Sticky, responsive navbar with mobile menu
│   ├── Hero.tsx             # Hero section with logo, heading, CTAs
│   ├── Documents.tsx        # Official document cards (view/download PDF)
│   ├── About.tsx            # About the company
│   ├── ComingSoon.tsx       # "Services Launching Soon" cards
│   ├── Social.tsx           # Social media icon links
│   ├── Contact.tsx          # Contact info (mailto / tel / WhatsApp links)
│   └── Footer.tsx           # Footer with logo, quick links, socials
├── data/
│   ├── company.json         # All company content (editable, no code changes needed)
│   └── socials.json         # Social media links
├── types/
│   └── index.ts              # Shared TypeScript types
├── public/
│   ├── logo.png               # Company logo (replace with your real logo)
│   └── documents/
│       ├── gst-certificate.pdf
│       ├── udyam-registration.pdf
│       ├── shop-act-license.pdf
│       └── pan-card.pdf
└── README.md
```

---

## Editing Content

You do **not** need to touch any component code to update the website's content.

### Company info, documents, services, contact details
Edit `data/company.json`:
- `companyName`, `tagline`, `description`, `subDescription`
- `about.paragraphs` — About Us text
- `services[]` — "Coming Soon" service cards
- `documents[]` — each entry needs `title`, `file` (path under `/documents/`), and `verified`
- `contact` — phone, email, address, WhatsApp number
- `footer.quickLinks` — footer navigation links

### Social media links
Edit `data/socials.json`. Supported `id` values with matching icons: `instagram`, `facebook`, `linkedin`, `youtube`, `whatsapp`.

### Replacing documents
Drop your real PDF files into `public/documents/` and reference them from `data/company.json` (e.g. `"file": "/documents/gst-certificate.pdf"`). The four PDFs currently in `public/documents/` are **sample placeholder documents** — replace them with your actual scanned certificates before going live.

### Replacing the logo
Replace `public/logo.png` with your actual company logo (recommended: square PNG, at least 512×512px, transparent background). The current file is a placeholder.

---

## Design System

| Token | Value |
|---|---|
| Navy | `#0B1736` |
| Royal Blue | `#2563EB` |
| Off-white | `#F8FAFC` |
| Light Gray | `#F1F5F9` |

Colors and design tokens live in `tailwind.config.ts` under `theme.extend.colors`.

---

## Features

- ✅ Sticky, fully responsive navbar with animated mobile menu
- ✅ Hero section with centered logo and clear launch messaging
- ✅ Document verification cards with View/Download actions served directly from `/public/documents`
- ✅ About section
- ✅ "Coming Soon" services grid
- ✅ Social media links section
- ✅ Contact section using `mailto:`, `tel:`, and WhatsApp deep links (no backend form)
- ✅ Footer with quick links and social icons
- ✅ Mobile / tablet / desktop responsive, no horizontal scroll
- ✅ Light Framer Motion animations (fade/slide on scroll, hover states)
- ✅ Zero external services — runs fully offline after `npm install`

---

## Notes

- This project intentionally has **no backend, no forms that submit data anywhere, and no environment variables**. All "contact" actions open the user's email client, phone dialer, or WhatsApp.
- All content is data-driven from the two JSON files in `/data`, making it easy to hand off to a non-developer for future updates.
