/* ============================================================
   DATA — edit this object to update all portfolio content
   ============================================================ */
const DATA = {
  name: 'John Carter',
  initials: 'JC',
  greeting: "Hi, my name is",
  titles: [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Open Source Contributor',
  ],
  tagline:
    "I build fast, accessible, and beautiful digital experiences. " +
    "Specialising in JavaScript ecosystems and turning complex problems into " +
    "elegant, user-centred solutions.",

  social: [
    {
      label: 'GitHub',
      url: 'https://github.com',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385
          .6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
          C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236
          1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332
          -5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
          3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
          3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
          5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57
          C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>`,
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
          1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
          3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
          2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
          0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451
          C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`,
    },
    {
      label: 'Twitter / X',
      url: 'https://twitter.com',
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401
          6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833
          L7.084 4.126H5.117z"/>
      </svg>`,
    },
    {
      label: 'Email',
      url: 'mailto:john@example.com',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>`,
    },
  ],

  jobs: [
    {
      company: 'TechCorp',
      url: 'https://example.com',
      role: 'Senior Frontend Developer',
      period: 'Jan 2023 — Present',
      bullets: [
        'Architected and shipped a component library used across 12 product teams, reducing UI inconsistencies by 40% and cutting new-feature delivery time by an estimated 30%.',
        'Led migration of a 200k-line React codebase from class components to hooks and concurrent features, improving Lighthouse performance score from 64 to 94.',
        'Defined and enforced frontend standards: code-review checklists, accessibility audits, and bundle-size budgets integrated into CI.',
        'Mentored four junior developers through fortnightly one-on-ones and pair-programming sessions.',
        'Collaborated with product and design to implement a real-time analytics dashboard processing 50k events/minute using WebSockets and Canvas charts.',
      ],
    },
    {
      company: 'DesignStudio',
      url: 'https://example.com',
      role: 'UI/UX Developer',
      period: 'Mar 2021 — Dec 2022',
      bullets: [
        'Translated Figma prototypes into pixel-perfect, responsive interfaces for clients in fintech, health, and e-commerce verticals.',
        'Built a headless CMS-driven marketing site achieving sub-1s LCP on mobile through image optimisation and edge caching strategies.',
        'Introduced automated accessibility testing (axe-core + Playwright) that caught regressions before production on every pull request.',
        'Worked closely with UX researchers to iterate on user flows based on usability test findings, improving checkout conversion by 18%.',
      ],
    },
    {
      company: 'StartupX',
      url: 'https://example.com',
      role: 'Full-Stack Developer',
      period: 'Jun 2019 — Feb 2021',
      bullets: [
        'Built and maintained a Node.js / Express REST API serving 20k daily active users, achieving 99.9% uptime.',
        'Developed a React Native mobile app (iOS + Android) downloaded 15k times in the first quarter after launch.',
        'Designed the PostgreSQL schema and wrote optimised queries, reducing average API response time from 420ms to 85ms.',
        'Implemented OAuth 2.0 authentication and role-based access control across web and mobile platforms.',
      ],
    },
    {
      company: 'AgencyPro',
      url: 'https://example.com',
      role: 'Junior Web Developer',
      period: 'Sep 2017 — May 2019',
      bullets: [
        'Built and maintained 30+ WordPress and Shopify sites for small-business clients.',
        'Developed custom JavaScript widgets (carousels, interactive maps, booking flows) without jQuery.',
        'Reduced average page load time by 35% across client sites through image compression and lazy-loading.',
        'Supported senior developers on a Vue.js SPA for a logistics company — first exposure to component-based architecture.',
      ],
    },
  ],

  skills: {
    frontend: [
      'HTML5', 'CSS3', 'JavaScript (ES2024)',
      'TypeScript', 'React', 'Next.js',
      'Vue 3', 'Tailwind CSS', 'Web APIs',
      'SVG & Canvas', 'WebSockets',
    ],
    tools: [
      'Node.js', 'Express', 'PostgreSQL',
      'Docker', 'GitHub Actions', 'Vite',
      'Playwright', 'Vitest', 'Linux',
      'AWS (S3, Lambda, CloudFront)',
    ],
    design: [
      'Figma', 'Storybook', 'Design Systems',
      'Accessibility (WCAG 2.1)', 'Responsive Design',
      'Motion Design', 'User Research',
    ],
  },

  contact: {
    email: 'john@example.com',
    message:
      "Whether you have a role in mind, a project to collaborate on, or just " +
      "want to say hello — my inbox is always open. I'll do my best to get back to you.",
  },
};

/* ============================================================
   SVG ICONS (used inline to avoid external requests)
   ============================================================ */
const ICON_ARROW_DOWN = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <polyline points="19 12 12 19 5 12"/>
  </svg>`;

const ICON_MAIL = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`;

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderNav() {
  const logo = document.getElementById('nav-logo');
  logo.textContent = DATA.initials;

  const links = document.getElementById('nav-links');
  const drawer = document.getElementById('nav-drawer');
  const navItems = ['experience', 'skills', 'contact'];

  navItems.forEach((id, i) => {
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    const a = `<a href="#${id}" class="nav-link" data-section="${id}">${label}</a>`;
    links.insertAdjacentHTML('beforeend', a);
    drawer.insertAdjacentHTML('beforeend', a);
  });
}

function renderHero() {
  document.getElementById('hero-greeting').textContent = DATA.greeting;
  document.getElementById('hero-name').textContent = DATA.name;
  document.getElementById('hero-tagline').textContent = DATA.tagline;

  const socialEl = document.getElementById('hero-social');
  DATA.social.forEach(({ label, url, icon }) => {
    socialEl.insertAdjacentHTML(
      'beforeend',
      `<a href="${url}" aria-label="${label}" rel="noopener noreferrer" target="_blank">
        ${icon}
      </a>`
    );
  });
}

function renderExperience() {
  const tablist = document.getElementById('job-tabs');
  const panels = document.getElementById('job-panels');

  DATA.jobs.forEach((job, i) => {
    const isFirst = i === 0;

    tablist.insertAdjacentHTML(
      'beforeend',
      `<button
        class="job-tab"
        role="tab"
        id="tab-${i}"
        aria-controls="panel-${i}"
        aria-selected="${isFirst}"
        tabindex="${isFirst ? '0' : '-1'}"
      >${job.company}</button>`
    );

    const bullets = job.bullets
      .map(b => `<li class="job-bullet">${b}</li>`)
      .join('');

    panels.insertAdjacentHTML(
      'beforeend',
      `<div
        class="job-panel${isFirst ? ' active' : ''}"
        role="tabpanel"
        id="panel-${i}"
        aria-labelledby="tab-${i}"
      >
        <h3 class="job-role">
          ${job.role}
          <span class="job-company">
            &nbsp;@&nbsp;<a href="${job.url}" rel="noopener noreferrer" target="_blank">${job.company}</a>
          </span>
        </h3>
        <span class="job-period">${job.period}</span>
        <ul class="job-bullets">${bullets}</ul>
      </div>`
    );
  });
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  const categories = {
    Frontend: DATA.skills.frontend,
    'Tools & DevOps': DATA.skills.tools,
    Design: DATA.skills.design,
  };

  Object.entries(categories).forEach(([name, items]) => {
    const badges = items
      .map(s => `<span class="skill-badge">${s}</span>`)
      .join('');

    container.insertAdjacentHTML(
      'beforeend',
      `<div class="skill-category reveal">
        <h3>${name}</h3>
        <div class="skill-badges">${badges}</div>
      </div>`
    );
  });
}

function renderContact() {
  document.getElementById('contact-message').textContent = DATA.contact.message;
  document.getElementById('contact-email-link').href = `mailto:${DATA.contact.email}`;
  document.getElementById('contact-email-text').textContent = DATA.contact.email;

  const socialEl = document.getElementById('contact-social');
  DATA.social.forEach(({ label, url, icon }) => {
    socialEl.insertAdjacentHTML(
      'beforeend',
      `<a href="${url}" aria-label="${label}" rel="noopener noreferrer" target="_blank">
        ${icon}
      </a>`
    );
  });
}

function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById('footer-copy').innerHTML =
    `&copy; ${year} <a href="#home">${DATA.name}</a>. All rights reserved.`;

  const nav = document.getElementById('footer-nav');
  ['home', 'experience', 'skills', 'contact'].forEach(id => {
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    nav.insertAdjacentHTML(
      'beforeend',
      `<a href="#${id}">${label}</a>`
    );
  });
}

/* ============================================================
   TYPEWRITER EFFECT
   ============================================================ */
function initTypewriter(elementId, strings) {
  const el = document.getElementById(elementId);
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');

  let strIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = strings[strIndex];
    const displayed = deleting
      ? current.slice(0, charIndex--)
      : current.slice(0, charIndex++);

    el.textContent = displayed;
    el.appendChild(cursor);

    let delay = deleting ? 50 : 90;

    if (!deleting && charIndex > current.length) {
      delay = 2000; // pause at end
      deleting = true;
    } else if (deleting && charIndex < 0) {
      deleting = false;
      charIndex = 0;
      strIndex = (strIndex + 1) % strings.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ============================================================
   TAB SWITCHING (keyboard + mouse)
   ============================================================ */
function initTabs() {
  const tablist = document.getElementById('job-tabs');
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = Array.from(
    document.getElementById('job-panels').querySelectorAll('[role="tabpanel"]')
  );

  function selectTab(index) {
    tabs.forEach((t, i) => {
      const active = i === index;
      t.setAttribute('aria-selected', active);
      t.tabIndex = active ? 0 : -1;
    });
    panels.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }

  // Mouse click
  tablist.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (!tab) return;
    selectTab(tabs.indexOf(tab));
    tab.focus();
  });

  // Keyboard: arrow keys, Home, End
  tablist.addEventListener('keydown', e => {
    const current = tabs.indexOf(document.activeElement);
    if (current === -1) return;

    let next = current;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      next = (current + 1) % tabs.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      next = (current - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    selectTab(next);
    tabs[next].focus();
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');

  function open() {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () =>
    hamburger.classList.contains('open') ? close() : open()
  );

  overlay.addEventListener('click', close);

  // Close on any drawer link click
  drawer.addEventListener('click', e => {
    if (e.target.tagName === 'A') close();
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}

/* ============================================================
   NAV SCROLL EFFECTS
   ============================================================ */
function initNavScroll() {
  const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ============================================================
   ACTIVE NAV LINK (Intersection Observer)
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle(
              'active',
              a.dataset.section === entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all sections from DATA
  renderNav();
  renderHero();
  renderExperience();
  renderSkills();
  renderContact();
  renderFooter();

  // 2. Wire interactivity
  initTypewriter('hero-title', DATA.titles);
  initTabs();
  initMobileMenu();
  initNavScroll();
  initActiveNav();
  initScrollReveal();
});
