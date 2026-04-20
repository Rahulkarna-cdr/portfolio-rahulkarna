# Portfolio build plan (from reference sites)

How to build **your** portfolio using ideas from [Abhishek Ganvir](https://abhishekganvir.vercel.app/), [Ganesh Tharu](https://ganeshtharu.com.np/), [Abbas Raza](https://abbasraza.dev/), [Abdul Momin](https://www.abdulmomin.dev/), and [Rajveer Singh](https://rajveersingh24.vercel.app/)—without copying any one site wholesale.

## What each reference does well

- **Ganesh Tharu** — Classic, hire-ready structure: hero + “open to opportunities,” **impact lines on projects** (e.g. latency, scale), skills grouped by domain, experience with measurable bullets, education. Strong model if you want clarity over gimmicks.
- **Abbas Raza** — Bold hero positioning, **timeline “journey”** for work, skills as categories, contact form + direct outreach. Good for seniority and breadth (many stacks).
- **Abdul Momin** — Distinct **creative theme** (terminal/OS metaphor) tied together across sections; **interactive or playful** skills/projects; optional blog hook. High risk/reward: memorable if executed well, distracting if inconsistent.
- **Rajveer Singh** — **Student/new grad** angle: intro “code snippet,” filtered tech stack, **certifications and achievements** with proof links, education + grades, **resume PDF** with “last updated.” Great if you need credibility beyond job titles.
- **Abhishek Ganvir** — Simple, scannable: hero, **tech pills**, stat row, project showcase, CV link, contact. Fast to ship; easy to maintain.

**Takeaway:** Pick **one** primary personality (minimal pro / bold creative / terminal-dev) and keep navigation and typography consistent. Borrow *patterns* (metrics, timelines, resume, grouped skills), not full visual clones.

## Recommended information architecture

1. **Hero** — Name, one-line role, 1–2 sentence value prop, primary CTA (e.g. “View work” / “Contact”), optional secondary (resume/CV).
2. **About** — Short story: who you are, what you optimize for (performance, UX, systems, etc.), 1 paragraph max above the fold; optional “currently learning” line.
3. **Skills** — Grouped (languages, frameworks, infra, data/ML, etc.); avoid an endless flat list. Optional: filter tabs (like Rajveer) if the list is long.
4. **Experience** — Reverse-chronological; each role: title, company, dates, location, 3–5 bullets with **outcomes** (numbers when honest).
5. **Projects** — 3–6 featured items: problem → what you built → **impact or constraint** (latency, users, cost) → stack → links (live, repo, case study).
6. **Education & credentials** — Degrees, notable courses; certifications with issuer + date + link to credential where possible.
7. **Contact** — Email/socials; optional form (needs backend or service: Formspree, Resend, etc.).

Optional sections: **Blog** (if you will post), **FAQ** (only if real Q&A), **Open source** highlights.

## Content checklist (before you design pixels)

- One sentence: “I help X build Y using Z.”
- 3–6 projects with: one-line pitch, 2–3 bullets, stack tags, links.
- Resume/CV PDF path + last-updated date.
- Social links you actually check (GitHub, LinkedIn, etc.).
- Professional email; spam-safe contact if using a form.

## Visual and UX principles

- **Typography:** One strong display choice + one readable body font; limit weights.
- **Motion:** Subtle scroll/hover beats heavy animation everywhere (reference: Abbas/Ganesh balance).
- **Accessibility:** Semantic headings, focus states, sufficient contrast, `alt` on images.
- **Performance:** Static generation where possible; optimize images (Next/Image or equivalent); lazy-load below-fold media.

## Technical approach (aligned with your references)

Most of the sites imply **React + Tailwind** and often **Next.js** (routing, SEO, OG metadata). Reasonable default for your repo:

- **Next.js (App Router)** or **Vite + React** if you want zero framework lock-in.
- **Tailwind CSS** for speed and consistency.
- Deploy: **Vercel** (matches several `.vercel.app` examples) or Netlify/Cloudflare Pages.

**SEO:** Unique `<title>` and meta description per page; Open Graph/Twitter cards; `sitemap.xml` / `robots.txt` if you care about discoverability.

## Differentiation (pick one lane)

| Lane | Best if you… | Risk |
|------|----------------|------|
| Minimal pro (Ganesh / Abhishek) | Want fast hire readability | Can feel generic without strong copy |
| Bold editorial (Abbas-style hero) | Have strong brand voice | Needs design discipline |
| Themed dev UI (Abdul) | Want memorability | Easy to overdo; test on mobile |
| Credibility-heavy (Rajveer) | Are early-career or switching fields | Must keep proof links fresh |

## Milestones

1. **Content draft** in Notion/Markdown (sections above).
2. **Wireframe** one scroll (hero → projects → contact).
3. **Implement** static site; ship to production URL.
4. **Iterate:** Lighthouse pass, mobile check, ask one peer for a 30-second “what do I do here?” test.

## Repo note

This repository contains the implementation scaffold (`src/`, `public/`, etc.) alongside this plan. Replace placeholder copy, links, and `/public/og.png` with your own assets before launch.
