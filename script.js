document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════════════════════════
     ── Site Data (edit here or in site-data.json) ──
     To update content: change the values below, commit, push.
     ══════════════════════════════════════ */

  const D = {
    name: "nidhi",
    eyebrow: "software engineer · hyderabad",
    bio: "Final year CS student who accidentally became an ML engineer. I build things that probably shouldn\u2019t work but somehow do  -  from post-quantum crypto scanners to delivery route optimizers. Currently interning at Infor, mass-applying to jobs, and learning way too many programming languages at once.",
    email: "nidhiiyer04@gmail.com",
    linkedin: "https://www.linkedin.com/in/nidhi-iyer-6ab24b251/",
    github: "https://github.com/NidhiIyer04",

    status: {
      learning: { label: "currently obsessing over", value: "LISP" },
      roles:    { label: "hire me pls",              value: "ML/AI \u00b7 SDE \u00b7 Fintech",    detail: "Hyderabad \u00b7 remote \u00b7 will relocate for good coffee" },
      leetcode: { label: "leetcode arc",             value: "~200 problems deep",                  detail: "aiming for 400 by July (send help)" }
    },

    now: {
      week: 2,
      totalWeeks: 9,
      text: "week 2 of 9  -  grinding 15 LeetCode problems, rewriting my resume for the 47th time, applying to 3 jobs a day, and somehow also learning ALGOL & SQL for a 7-languages in 10-weeks challenge I voluntarily signed up for."
    },

    projects: [
      { tag: "security \u00b7 python",        title: "QSecure",                       desc: "A scanner that finds quantum vulnerable crypto in your codebase and migrates it to post quantum algorithms. Because future me shouldn\u2019t have to deal with that.", url: "https://github.com/NidhiIyer04/QSecure" },
      { tag: "mobile \u00b7 fastapi",         title: "RouteGenie",                    desc: "Delivery route optimizer with a Flutter app, FastAPI backend, and way too many analytics dashboards. It calculates time, fuel, and traffic so drivers don\u2019t have to.", url: "https://github.com/NidhiIyer04/RouteGenie" },
      { tag: "open source \u00b7 games",      title: "WE Arcade",                     desc: "Ran a GitHub org where 100+ people built browser games together. My job was mostly saying \u2018please write tests\u2019 and \u2018that\u2019s not how you do a code review.\u2019", url: "https://github.com/WE-Arcade" },
      { tag: "mlops \u00b7 aws",              title: "SconeVision",                   desc: "An MLOps pipeline on AWS that classifies delivery vehicles in real-time. SageMaker, Step Functions, the whole circus. 97.68% accuracy  -  the 2.32% keeps me humble.", url: "https://github.com/NidhiIyer04/ML-Workflow-For-Scones-Unlimited-On-Amazon-SageMaker" },
      { tag: "research \u00b7 deep learning", title: "Arrhythmia Detection",          desc: "Teaching a neural network to read heartbeats better than I can. ResNet + BiLSTM + Attention for 61-class ECG classification. Still ongoing, still debugging.", url: "" },
      { tag: "hackathon \u00b7 ocr",          title: "Smart India Hackathon  -  Top 5", desc: "Built an OCR system to digitize government documents that scanners couldn\u2019t read. Placed top 5 nationally, which was cool until I realized I had end sems at the same time.", url: "" }
    ],

    learning: {
      active:   ["Hashing", "Neetcode 150", "ALGOL & SQL"],
      upcoming: ["Binary Search", "Trees & Graphs", "Dynamic Programming", "System Design"]
    },

    writing: [
      { title: "Why I\u2019m Learning 7 Programming Languages in 7 Weeks",                    date: "May 2026",  url: "https://www.linkedin.com/posts/nidhi-iyer-dev_im-starting-a-10-weeks-7-ur-languages-challenge-ugcPost-7454239607182741504-kbPw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4meiMBZnhat0-m46tDyuNAW7tuOWbeaH8" },
      { title: "My Favorite achievement",                    date: "May 2025",  url: "https://www.linkedin.com/posts/nidhi-iyer-dev_from-receiving-a-rejection-email-to-becoming-ugcPost-7309510817564016640-udLh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4meiMBZnhat0-m46tDyuNAW7tuOWbeaH8" }
    ],

    fireflyFacts: [
      "top 500 globally in the AWS AI/ML scholarship  -  out of thousands, not gonna lie that felt good",
      "survived 2 years of Google Women Engineers and graduated as class rep",
      "200+ LeetCode problems solved and I am slowly becoming one with my desk chair",
      "once built an AI fitness trainer using Claude Sonnet... the irony is not lost on me",
      "herded 100+ open source contributors across 10 teams",
      "currently learning 7 programming languages in 10 weeks because apparently I hate free time",
      "got a Linux Foundation scholarship for Kubernetes  -  yes I can explain pods, no I will not",
      "my computer vision model hit 97.68% accuracy  -  the remaining 2.32% is \u2728character\u2728",
      "built a post-quantum crypto tool before most people knew quantum computing was a threat",
      "presented an AI system to senior leadership at TalentSprint and didn\u2019t pass out (growth!)",
      "fine-tuned a local LLM with prompt-injection safeguards  -  trust issues, but make it engineering",
      "researching 61-class ECG arrhythmia detection because apparently 5 classes was too easy"
    ]
  };

  /* ── Stars ── */
  const starBox = document.getElementById('stars');
  const starCount = window.innerWidth < 768 ? 50 : 90;
  for (let i = 0; i < starCount; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2 + 0.5;
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*55}%;--d:${(Math.random()*3+2).toFixed(1)}s;--delay:${(Math.random()*4).toFixed(1)}s;--min-op:${(Math.random()*0.3+0.1).toFixed(2)};--max-op:${(Math.random()*0.4+0.5).toFixed(2)}`;
    starBox.appendChild(s);
  }

  /* ── Nav scroll ── */
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');
  new IntersectionObserver(([e]) => {
    nav.classList.toggle('nav--scrolled', !e.isIntersecting);
  }, { threshold: 0 }).observe(hero);

  /* ── Hamburger ── */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');
  hamburger.addEventListener('click', () => drawer.classList.toggle('nav-drawer--open'));
  drawer.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => drawer.classList.remove('nav-drawer--open'))
  );

  /* ── Helper ── */
  const $ = (id) => document.getElementById(id);

  /* ── Populate hero ── */
  $('hero-eyebrow').textContent = D.eyebrow;
  $('hero-name').textContent = D.name;
  $('hero-bio').textContent = D.bio;

  /* ── Email popup ── */
  const emailBtn = $('email-btn');
  const emailPopup = $('email-popup');
  const emailText = $('email-popup-text');
  const emailCopy = $('email-popup-link');
  emailText.textContent = D.email;
  emailBtn.addEventListener('click', () => {
    emailPopup.classList.toggle('visible');
  });
  emailCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(D.email).then(() => {
      emailCopy.textContent = 'copied!';
      setTimeout(() => { emailCopy.textContent = 'copy'; }, 1500);
    });
  });
  document.addEventListener('click', (e) => {
    if (!emailBtn.contains(e.target) && !emailPopup.contains(e.target)) {
      emailPopup.classList.remove('visible');
    }
  });

  /* ── Status cards ── */
  const cardsEl = $('status-cards');
  const s = D.status;
  const pct = Math.round((D.now.week / D.now.totalWeeks) * 100);
  cardsEl.innerHTML =
    `<div class="status-card"><p class="label">${s.learning.label}</p><p class="status-card-value">${s.learning.value}</p><div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div></div>` +
    `<div class="status-card"><p class="label">${s.roles.label}</p><p class="status-card-value">${s.roles.value}</p><p class="status-card-detail">${s.roles.detail}</p></div>` +
    `<div class="status-card"><p class="label">${s.leetcode.label}</p><p class="status-card-value">${s.leetcode.value}</p><p class="status-card-detail">${s.leetcode.detail}</p></div>`;

  /* ── Now strip ── */
  $('now-text').textContent = 'right now: ' + D.now.text;

  /* ── Projects ── */
  $('proj-grid').innerHTML = D.projects.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const isLink = !!p.url;
    const tag = isLink ? 'a' : 'div';
    const href = isLink ? ` href="${p.url}" target="_blank" rel="noopener"` : '';
    const link = isLink ? '<span class="proj-link">view details \u2192</span>' : '';
    return `<${tag} class="proj-card"${href}><div class="proj-num">${num}</div><div class="proj-tag">${p.tag}</div><h3 class="proj-title">${p.title}</h3><p class="proj-desc">${p.desc}</p>${link}</${tag}>`;
  }).join('');

  /* ── Learning pills ── */
  $('learning-pills').innerHTML =
    D.learning.active.map(t => `<span class="pill pill--active">${t}</span>`).join('') +
    D.learning.upcoming.map(t => `<span class="pill pill--upcoming">${t}</span>`).join('');
  $('learning-label').textContent = `week ${D.now.week} of ${D.now.totalWeeks}`;
  $('learning-fill').style.width = pct + '%';

  /* ── Writing ── */
  $('writing-list').innerHTML = D.writing.map(w =>
    `<li class="writing-row"><a href="${w.url}" class="writing-title" target="_blank" rel="noopener">${w.title}</a><span class="writing-date">${w.date}</span></li>`
  ).join('');
  $('writing-more').href = D.linkedin;
  $('footer-linkedin').href = D.linkedin;
  $('footer-github').href = D.github;
  $('footer-email').href = 'mailto:' + D.email;

  /* ══════════════════════════════════════
     ── Firefly Game ──
     ══════════════════════════════════════ */

  const canvas = $('firefly-canvas');
  const ctx = canvas.getContext('2d');
  const factEl = $('firefly-fact');
  const scoreEl = $('firefly-score');
  const facts = D.fireflyFacts;
  const totalFacts = facts.length;
  let caught = 0;
  const caughtSet = new Set();
  let fireflies = [];
  let factTimer;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function spawnFirefly() {
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01
    };
  }

  function initFireflies() {
    fireflies = [];
    const count = window.innerWidth < 768 ? 5 : 8;
    for (let i = 0; i < count; i++) fireflies.push(spawnFirefly());
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);

    for (const f of fireflies) {
      f.phase += f.speed;
      f.x += f.vx;
      f.y += f.vy;
      if (Math.random() < 0.01) f.vx = (Math.random() - 0.5) * 0.6;
      if (Math.random() < 0.01) f.vy = (Math.random() - 0.5) * 0.4;
      if (f.x < -10) f.x = w + 10;
      if (f.x > w + 10) f.x = -10;
      if (f.y < -10) f.y = h + 10;
      if (f.y > h + 10) f.y = -10;

      const glow = 0.5 + 0.5 * Math.sin(f.phase);
      const alpha = 0.3 + glow * 0.7;

      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 4);
      grad.addColorStop(0, `rgba(196,161,90,${alpha * 0.4})`);
      grad.addColorStop(1, 'rgba(196,161,90,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(245,237,216,${alpha})`;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * glow, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const cx = (e.clientX || e.touches[0].clientX) - rect.left;
    const cy = (e.clientY || e.touches[0].clientY) - rect.top;

    for (let i = fireflies.length - 1; i >= 0; i--) {
      const f = fireflies[i];
      const dx = f.x - cx, dy = f.y - cy;
      if (dx * dx + dy * dy < (f.r * 5) ** 2) {
        let idx = -1;
        for (let j = 0; j < totalFacts; j++) {
          if (!caughtSet.has(j)) { idx = j; break; }
        }
        if (idx >= 0) {
          caughtSet.add(idx);
          caught++;
          scoreEl.textContent = `${caught} / ${totalFacts} caught`;
          factEl.textContent = '\u2726 ' + facts[idx];
          factEl.classList.add('visible');
          clearTimeout(factTimer);
          factTimer = setTimeout(() => factEl.classList.remove('visible'), 4000);
        }
        fireflies[i] = spawnFirefly();
        return;
      }
    }
  }

  canvas.addEventListener('click', handleClick);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); handleClick(e); }, { passive: false });

  let gameStarted = false;
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !gameStarted) {
      gameStarted = true;
      resize();
      initFireflies();
      draw();
    }
  }, { threshold: 0.2 }).observe($('fireflies'));

  window.addEventListener('resize', () => { if (gameStarted) resize(); });
});
