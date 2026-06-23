# Sahil Kriplani — Portfolio

A cinematic, space/nebula-themed developer portfolio. Dark by default, glassmorphism throughout, scroll-triggered animations, sliding skill marquees, live project countdowns, and a working contact form.

**Live:** _coming soon at sahilkriplani.com_

![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Deep-space nebula theme** — animated aurora blobs, canvas starfield, and a masked grid backdrop.
- **Glassmorphism design system** — frosted cards with inner highlights, hover-lift, and glowing gradient borders.
- **Dark / light mode** — system-independent toggle (dark is the default).
- **Animated hero** — gradient name, floating glass orbs, avatar with a spinning neon ring.
- **Sliding skill marquees** — one row per category, alternating direction, hover to pause.
- **Project showcase** — status badges, themed gradient thumbnails, live **countdown timers** for upcoming launches, and a separate NDA-safe "Professional Work" section.
- **Working contact form** — server-side email via Resend, with honeypot + rate limiting.
- **Single source of truth** — all content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). No JSX edits needed to update copy.
- **Fully responsive** and motion-reduced friendly (`prefers-reduced-motion`).

## 🧱 Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui (Radix) |
| Animation | Framer Motion |
| Icons | Lucide + custom inline brand SVGs |
| Theming | next-themes |
| Email | Resend (via REST, no SDK) |

## 🚀 Getting Started

```bash
# install
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## ⚙️ Configuration

The contact form works out of the box in development (messages are logged). To send real emails, create `.env.local` from the example:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Where contact messages are delivered |
| `CONTACT_FROM_EMAIL` | _(optional)_ sender; defaults to `onboarding@resend.dev` |

## ✏️ Editing Content

Everything — bio, skills, projects, experience, links — lives in one typed file:

```
src/data/portfolio.ts
```

- **Profile photo:** drop an image at `public/profile.jpg` (falls back to a gradient monogram).
- **Resume:** replace `public/resume.pdf`.
- **Project screenshots:** add `public/projects/<name>.png` and set `image` on the project (falls back to themed gradient art).
- **Project preview links:** set `previewUrl` on a project to show the **Preview** button.

## 📁 Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # contact form email endpoint
│   ├── globals.css            # theme tokens + nebula utilities
│   ├── layout.tsx
│   └── page.tsx               # composes the sections
├── components/
│   ├── sections/              # navbar, hero, about, skills, projects, experience, contact, footer
│   ├── ui/                    # reveal, section primitives
│   ├── background.tsx         # starfield + aurora
│   ├── project-card.tsx
│   ├── project-thumb.tsx
│   └── ...
├── data/
│   └── portfolio.ts           # ← all content
└── lib/utils.ts
```

## ☁️ Deployment

Deployed on **Vercel**. Push to the main branch and Vercel builds automatically. Add the env vars above in the Vercel project settings, then attach a custom domain under **Settings → Domains**.

---

Built by Sahil Kriplani · [LinkedIn](https://www.linkedin.com/in/sahil-kriplani-96b555234/) · [GitHub](https://github.com/SahilKriplani)
