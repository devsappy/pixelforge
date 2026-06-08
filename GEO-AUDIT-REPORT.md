# GEO Audit Report: GPTShopExpert

**Audit Date:** 2026-06-05
**URL:** Not deployed — analyzed from source (`index.html` + React/Vite SPA in this workspace)
**Business Type:** Agency / Services (design & engineering studio)
**Pages Analyzed:** 1 (single-page application; 13 sections on one route)

---

## Executive Summary

**Overall GEO Score: 13/100 (Critical)**

GPTShopExpert is a beautifully engineered, animation-rich single-page site — but from a GEO/SEO standpoint it is currently **near-invisible to both search engines and AI systems**. The root cause is that 100% of the content is client-side rendered: the HTML shipped to crawlers is an empty `<div id="root">`, so AI crawlers (which mostly don't execute JavaScript) see *nothing*. On top of that, the site has **zero structured data, no robots.txt, no sitemap, no llms.txt, no Open Graph tags, no canonical URL, and no real brand footprint**. The good news: the foundations (semantic HTML, clear copy, a real service offering) are solid, so once content is made server-visible and the technical basics are added, the score can rise dramatically with relatively contained effort.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 15/100 | 25% | 3.75 |
| Brand Authority | 5/100 | 20% | 1.00 |
| Content E-E-A-T | 20/100 | 20% | 4.00 |
| Technical GEO | 22/100 | 15% | 3.30 |
| Schema & Structured Data | 0/100 | 10% | 0.00 |
| Platform Optimization | 5/100 | 10% | 0.50 |
| **Overall GEO Score** | | | **~13/100** |

---

## Critical Issues (Fix Immediately)

1. **No indexable content — JavaScript-rendered only, no SSR/SSG.**
   `index.html` ships `<body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>`. All headings, copy, services, and the brand name only appear *after* React hydrates in a browser. Google renders JS slowly and imperfectly; AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) generally do **not** execute JS at all. → The single biggest blocker. Add prerendering / SSG (`vite-react-ssg`, `vite-plugin-prerender`) or migrate to **Astro / Next.js**.

2. **Complete absence of any structured data.**
   No JSON-LD anywhere. AI engines have no machine-readable entity to recognize. Add `Organization`, `WebSite`, and `Service` schema at minimum.

3. **Brand is not a recognizable entity.**
   "GPTShopExpert" has no live domain, no Wikipedia/LinkedIn/Crunchbase presence, and the contact domain (`hello@gptshopexpert.com`) and all social links (`href="#"`) are placeholders ([Footer.tsx:21-28](src/components/Footer.tsx#L21-L28)). AI systems cannot cite a brand they cannot find.

---

## High Priority Issues (Fix Within 1 Week)

1. **No `robots.txt`** — crawlers and AI bots have no access directives. Add one that explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot.
2. **No `sitemap.xml`** — nothing tells search engines what exists.
3. **No `llms.txt`** — the emerging standard for describing a site to LLMs is absent. (Ironic: section 10 of the Skills grid literally sells "llms.txt" as a service — [Skills.tsx:135-136](src/components/Skills.tsx#L135-L136).)
4. **No Open Graph or Twitter Card tags, and no `og:image`.** Links shared anywhere will render bare. ([index.html](index.html#L3-L18) has only `title` + `description`.)
5. **No `<link rel="canonical">`** — duplicate-URL ambiguity (www vs non-www, trailing slash) once deployed.
6. **Zero question-answering / self-contained content blocks.** All copy is punchy marketing fragments ("We forge them."), not the declarative, quotable passages AI systems extract and cite.
7. **No author/team attribution or "About" depth.** E-E-A-T has nothing to grab onto.

---

## Medium Priority Issues (Fix Within 1 Month)

1. **Single-page architecture limits indexable surface.** "Selected work" projects (NOIR, Helios, Atelier 9, Kairo — [Journey.tsx:6-38](src/components/Journey.tsx#L6-L38)) are anchor sections, not real URLs. Each case study should be its own indexable page.
2. **Unsubstantiated statistics with no sourcing.** "+312% conversion lift", "98 avg. Lighthouse" ([Stats.tsx:27-42](src/components/Stats.tsx#L27-L42)) read as decorative; AI systems favor stats with attribution. Either source them or frame as illustrative.
3. **No favicon / web manifest** referenced in `index.html`.
4. **No FAQ content or `FAQPage` schema** — a major GEO citability lever for service businesses.
5. **Heavy animation may hurt Core Web Vitals (INP/LCP).** Framer Motion drives scroll transforms on nearly every section; needs Lighthouse measurement and lazy-loading below the fold.
6. **No `Service` / `Offer` schema** for the three packages ($18k / $6k / $9k-mo — [Services.tsx:4-44](src/components/Services.tsx#L4-L44)) that could earn rich results.

---

## Low Priority Issues (Optimize When Possible)

1. Decorative SVGs use `aria-hidden`/`fill="none"` correctly, but the brand wordmark relies on text in `<span>` — fine, just confirm post-SSR.
2. `theme-color`, `lang="en"`, and `viewport` are present and correct — keep them.
3. Fonts loaded via blocking `<link>` to Google Fonts — consider `font-display: swap` (already in the URL) and self-hosting for LCP.
4. Email CTA form ([CTA.tsx:32-47](src/components/CTA.tsx#L32-L47)) only fakes submission client-side — wire to a real endpoint before launch (trust signal).

---

## Category Deep Dives

### AI Citability (15/100)
The *latent* copy is strong and on-brand, but it is (a) invisible pre-hydration and (b) structured for vibe, not extraction. AI systems cite **self-contained, declarative passages** ("GPTShopExpert is a design and engineering studio that builds Next.js websites in 6–10 weeks, with performance audits on every project."). The site currently offers fragments like "We forge them." and "Calm on the outside. Relentless on the inside." Rewrite at least one section per page into a clear, quotable answer block. Once SSR is in place, citability is the highest-leverage content lever.

### Brand Authority (5/100)
Effectively nonexistent: no live domain, placeholder social links, no third-party mentions, no Wikipedia/Reddit/LinkedIn/Clutch/Awwwards profile (despite "Awwwards SOTD" claimed in copy). Entity recognition by AI requires corroborating off-site signals. This is mostly off-page work and will be the slowest dimension to move.

### Content E-E-A-T (20/100)
Experience/Expertise are *asserted* ("No juniors, no account managers") but not *demonstrated* — no named team, bios, credentials, real case-study writeups, or client logos with links. Trust signals (real contact, privacy policy, terms, working form) are absent. The studio brief quote ([Signal.tsx:49-56](src/components/Signal.tsx#L49-L56)) is anonymous. Add a real About page with people and proof.

### Technical GEO (22/100)
Positives: valid `lang`, `viewport`, `theme-color`, semantic landmarks (`<main>`, `<nav>`, `<section>`, `<article>`, `<ol>`, `<footer>`), proper heading hierarchy (single `<h1>`, `<h2>`/`<h3>` per section), `aria-label`s on nav/links. Negatives that dominate the score: CSR-only render, and missing robots.txt / sitemap.xml / llms.txt / canonical. The bones are good; the delivery layer is the problem.

### Schema & Structured Data (0/100)
None present. Highest-ROI additions for an agency: `Organization` (with `sameAs` to real socials), `WebSite`, `Service` (×3 packages), `Person` (team), and `FAQPage` once FAQ content exists.

### Platform Optimization (5/100)
No Open Graph, no Twitter Cards, no presence on platforms AI models train on or cite (YouTube, Reddit, GitHub, Dribbble, Behance, Awwwards, Clutch). Footer *links* to Dribbble/Awwwards/Twitter but they're dead anchors.

---

## Quick Wins (Implement This Week)

1. **Add `public/robots.txt`** explicitly allowing AI crawlers + pointing to the sitemap. (~15 min)
2. **Add `public/sitemap.xml`** (even one URL to start). (~15 min)
3. **Add `public/llms.txt`** describing the studio, services, and contact. (~30 min)
4. **Add Open Graph + Twitter Card meta + canonical + a favicon and `og:image`** to `index.html`. (~1 hr)
5. **Add `Organization` + `WebSite` JSON-LD** to `index.html` `<head>` (renders server-side regardless of React). (~1 hr)

> Note: items 1–5 are real wins but are *capped* in value until the SSR/prerender fix lands — they make the shell discoverable, not the content.

## 30-Day Action Plan

### Week 1: Make the site visible
- [ ] Add prerendering/SSG (`vite-react-ssg`) or migrate to Astro/Next.js so full HTML ships to crawlers
- [ ] Add `robots.txt`, `sitemap.xml`, `llms.txt`
- [ ] Add OG/Twitter/canonical meta + favicon + `og:image`
- [ ] Register a real domain; replace placeholder email and social links

### Week 2: Structured data + trust
- [ ] Add `Organization`, `WebSite`, `Service` JSON-LD
- [ ] Build a real **About** page (named team, bios, credentials)
- [ ] Wire the contact form to a real endpoint; add privacy policy + terms
- [ ] Set up Google Search Console + Bing Webmaster Tools

### Week 3: Content depth + citability
- [ ] Convert the 4 portfolio items into individual case-study pages (own URLs, real writeups, results)
- [ ] Add an **FAQ** section + `FAQPage` schema
- [ ] Rewrite one quotable, self-contained answer block per page
- [ ] Source or reframe the headline statistics

### Week 4: Performance + off-page
- [ ] Run Lighthouse; fix INP/LCP regressions from animation; lazy-load below-the-fold
- [ ] Create real profiles: LinkedIn, Dribbble/Behance, Clutch, Awwwards, GitHub
- [ ] Begin backlink/brand outreach (directories, "made with" features, guest posts)
- [ ] Re-run this audit to measure the delta

---

## Appendix: Sections Analyzed

| Section | Source | GEO Issues |
|---|---|---|
| `<head>` | [index.html](index.html) | No OG, no schema, no canonical, no favicon |
| Hero | [Hero.tsx](src/components/Hero.tsx) | Content CSR-only; fragments not citable |
| Marquee / Signal | [Signal.tsx](src/components/Signal.tsx) | Anonymous quote; no E-E-A-T |
| Skills | [Skills.tsx](src/components/Skills.tsx) | Good copy, but JS-only; no schema |
| Journey (Work) | [Journey.tsx](src/components/Journey.tsx) | Projects are anchors, not indexable pages |
| Services | [Services.tsx](src/components/Services.tsx) | No `Service`/`Offer` schema |
| Process | [Process.tsx](src/components/Process.tsx) | Could map to `HowTo` schema |
| Stats | [Stats.tsx](src/components/Stats.tsx) | Unsourced statistics |
| CTA | [CTA.tsx](src/components/CTA.tsx) | Form is fake/client-only |
| Footer | [Footer.tsx](src/components/Footer.tsx) | Placeholder email + dead social links |
