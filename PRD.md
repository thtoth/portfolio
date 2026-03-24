# Product Requirements Document
## Portfolio Resume — Single Page Application

**Version:** 1.0
**Date:** 2026-03-24
**Stack:** HTML · CSS · Vanilla JavaScript (no frameworks, no build tools)

---

## 1. Overview

A fast, accessible, single-page portfolio resume that showcases professional identity and work history. The site loads instantly with zero dependencies, runs without a build step, and is deployable by opening `index.html` in any browser or pushing to any static host.

---

## 2. Goals

| Goal | Description |
|------|-------------|
| **Performance** | No frameworks, no bundler, no runtime overhead — Lighthouse score ≥ 95 |
| **Accessibility** | WCAG 2.1 AA compliant: keyboard navigation, ARIA labels, sufficient contrast |
| **Maintainability** | Content is isolated in a `DATA` object in `app.js` for easy editing |
| **Responsiveness** | Full support for mobile (≥ 320px), tablet, and desktop |
| **Single file deploy** | Works as a standalone `index.html` or as three files (HTML + CSS + JS) |

---

## 3. Pages / Sections

The SPA is a single scrolling page divided into the following sections:

### 3.1 Navigation
- Fixed/sticky top bar
- Logo / name on the left
- Nav links on the right: Home · Experience · Skills · Contact
- Hamburger menu on mobile (toggle via JS)
- Active link highlight updates on scroll (Intersection Observer)

### 3.2 Hero
- Full-viewport-height opening section
- Greeting line, name (large heading), professional title with typewriter effect
- Short tagline / elevator pitch
- Two CTA buttons: **View Work** (scrolls to experience) and **Contact Me** (scrolls to contact)
- Social icon links: GitHub · LinkedIn · Twitter/X · Email
- Subtle animated background or gradient

### 3.3 Experience / Work History
- Section title: "Experience"
- Tabbed interface — clicking a company name loads that role's details without page reload
- Each job card includes:
  - Job title
  - Company name + optional link
  - Date range
  - Bullet-point responsibilities / achievements
- Keyboard accessible tabs (arrow keys navigate between tabs)

### 3.4 Skills
- Section title: "Skills"
- Three category columns: Frontend · Tools & DevOps · Design
- Each skill displayed as a pill/badge
- Responsive grid: 3 cols desktop → 1 col mobile

### 3.5 Contact
- Section title: "Get In Touch"
- Short invitation paragraph
- Prominent email button / link
- Secondary social links row

### 3.6 Footer
- Copyright line
- Quick nav links

---

## 4. Technical Requirements

### 4.1 File Structure
```
portfolio/
├── index.html      # Markup, semantic HTML5
├── style.css       # All styles, CSS custom properties for theming
├── app.js          # All interactivity + DATA object with content
├── CLAUDE.md       # Instructions for AI-assisted development
└── PRD.md          # This document
```

### 4.2 CSS
- CSS custom properties (`--color-*`, `--font-*`, `--space-*`) for theming
- Mobile-first media queries
- Smooth scroll (`scroll-behavior: smooth`)
- Transitions on interactive elements (≤ 300ms)
- No external CSS libraries

### 4.3 JavaScript
- Vanilla ES6+, no jQuery, no frameworks
- Single `DATA` config object at the top of `app.js` — all editable content lives here
- Intersection Observer for active nav + scroll animations
- Tab switching for experience section
- Mobile menu toggle
- No external JS libraries

### 4.4 HTML
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `lang="en"` on `<html>`
- Meta: charset, viewport, description, og:title, og:description
- `aria-label` on icon-only links
- `role="tablist"` / `role="tab"` / `role="tabpanel"` on experience tabs

---

## 5. Design System

| Token | Value |
|-------|-------|
| `--color-bg` | `#0a192f` |
| `--color-surface` | `#112240` |
| `--color-accent` | `#64ffda` |
| `--color-text` | `#ccd6f6` |
| `--color-text-muted` | `#8892b0` |
| `--font-sans` | `'Inter', system-ui, sans-serif` |
| `--font-mono` | `'Fira Code', monospace` |
| `--radius` | `4px` |
| `--transition` | `200ms ease` |

---

## 6. Content Schema

All content is stored in `app.js` under the `DATA` constant:

```js
DATA = {
  name: String,
  title: String,
  tagline: String,
  social: [{ label, url, icon }],
  jobs: [{
    company: String,
    url: String,
    role: String,
    period: String,
    bullets: String[]
  }],
  skills: {
    frontend: String[],
    tools: String[],
    design: String[]
  },
  contact: {
    email: String,
    message: String
  }
}
```

---

## 7. Out of Scope

- Backend / form submission (contact form links to `mailto:`)
- CMS or database integration
- Blog section
- Projects gallery (future phase)
- Dark/light mode toggle (ships dark by default)
- Animations requiring CSS animation libraries

---

## 8. Acceptance Criteria

- [ ] Opens correctly with `open index.html` (no server required)
- [ ] All sections reachable via nav links with smooth scroll
- [ ] Experience tabs work with mouse and keyboard
- [ ] Mobile menu opens/closes correctly at < 768px
- [ ] No console errors in Chrome, Firefox, Safari
- [ ] Passes WAVE accessibility checker with no errors
- [ ] All content editable by changing only the `DATA` object in `app.js`
