# CLAUDE.md — Portfolio SPA

This file provides context and conventions for AI-assisted development on this project.

## Project Summary

A zero-dependency portfolio resume SPA built with plain HTML, CSS, and vanilla JavaScript. No build step. No frameworks. No package manager required for the SPA itself.

**Entry point:** `index.html`
**Styles:** `style.css`
**Logic + content:** `app.js`

---

## Stack Rules (Strict)

- **No frameworks** — React, Vue, Svelte, etc. are not allowed for the SPA files
- **No build tools** — Webpack, Vite, esbuild, etc. are not used
- **No external dependencies** — no npm installs, no CDN imports, no jQuery
- **ES6+ is fine** — arrow functions, template literals, destructuring, `const`/`let`, Intersection Observer, etc.
- The existing Gatsby project in `src/` is separate and unrelated to the SPA

---

## File Responsibilities

| File | Purpose |
|------|---------|
| `index.html` | Semantic HTML structure. No inline styles. No inline scripts except the `<script src="app.js">` tag. |
| `style.css` | All visual styles. Uses CSS custom properties defined in `:root`. Mobile-first. |
| `app.js` | All interactivity. Top-level `DATA` object holds all editable content. Functions below handle DOM rendering and event wiring. |

---

## Content Editing

**All user-facing text lives in the `DATA` object at the top of `app.js`.** To update the portfolio content (name, jobs, skills, contact info), edit only that object. Do not hardcode content in `index.html` or `style.css`.

```js
// app.js — top of file
const DATA = {
  name: '...',
  jobs: [...],
  // etc.
};
```

---

## CSS Conventions

- Use CSS custom properties for all colours, spacing, and fonts — never hardcode hex values outside `:root`
- Class names use kebab-case: `.hero-title`, `.job-tab`, `.skill-badge`
- Section wrapper class pattern: `.<section-name>` (e.g. `.hero`, `.experience`, `.skills`)
- Inner content container: `.container` (max-width + centered)
- BEM-lite: `.block`, `.block-element`, `.block--modifier`

---

## JavaScript Conventions

- No global variable pollution — wrap everything in an IIFE or use module pattern if needed
- DOM queries happen once on `DOMContentLoaded`, stored in named variables
- Event delegation preferred over attaching listeners to many child elements
- The `render*` functions build and inject HTML from `DATA`; they run once on load
- The tab switching, mobile menu, and scroll observer are wired after rendering

---

## Accessibility Requirements

- Every `<img>` must have a meaningful `alt` attribute
- Icon-only `<a>` and `<button>` elements must have `aria-label`
- Experience tabs use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`
- Focus styles must be visible — do not `outline: none` without a replacement
- Colour contrast ratio ≥ 4.5:1 for body text against background

---

## Responsive Breakpoints

| Name | Min-width |
|------|-----------|
| Mobile (default) | 0px |
| Tablet | 640px |
| Desktop | 1024px |
| Wide | 1280px |

---

## Branch / Commit Conventions

- Feature branch: `claude/plan-session-8k3MD`
- Commit messages: imperative mood, < 72 chars, e.g. `add experience tab keyboard navigation`
- Do not commit build artefacts or node_modules

---

## What Claude Should NOT Do

- Do not modify files inside `src/` (that is the separate Gatsby project)
- Do not add `<script src="...cdn...">` tags to index.html
- Do not introduce a package.json or node_modules for the SPA
- Do not use `document.write()`
- Do not use `var` — use `const` or `let`
- Do not add comments explaining obvious code; only comment non-obvious logic
