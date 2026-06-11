/* =========================================================
   Parisa Ghasemi — Portfolio
   Motion: scroll reveals, parallax, magnetic buttons,
   timeline progress, nav state, skill lines
   ========================================================= */
(function () {
  "use strict";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll reveal (manual check — robust across contexts) ---------- */
  const revealEls = [...document.querySelectorAll(".reveal, .reveal-stagger")];
  const revealOne = (el) => {
    if (el.classList.contains("in")) return;
    if (el.classList.contains("reveal-stagger")) {
      [...el.children].forEach((c, i) => { c.style.transitionDelay = (i * 90) + "ms"; });
    }
    el.classList.add("in");
  };
  if (reduced) {
    revealEls.forEach(revealOne);
  } else {
    const checkReveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = revealEls.length - 1; i >= 0; i--) {
        const el = revealEls[i];
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          revealOne(el);
          revealEls.splice(i, 1);
        }
      }
    };
    checkReveal();
    window.addEventListener("scroll", checkReveal, { passive: true });
    window.addEventListener("resize", checkReveal);
    window.addEventListener("load", checkReveal);
    // belt-and-braces: ensure first paint reveals above-the-fold content
    requestAnimationFrame(checkReveal);
    setTimeout(checkReveal, 200);
  }

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (window.scrollY > 30) {
      nav.classList.add("glass");
      nav.style.boxShadow = "var(--sh-md)";
    } else {
      nav.classList.remove("glass");
      nav.style.boxShadow = "none";
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Magnetic buttons ---------- */
  if (!reduced && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      const strength = parseFloat(btn.dataset.magnetic) || 0.32;
      const inner = btn.querySelector(".btn-in") || btn;
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
        inner.style.transform = `translate(${mx * strength * 0.4}px, ${my * strength * 0.4}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
        inner.style.transform = "";
      });
    });
  }

  /* ---------- Hero parallax (mouse) ---------- */
  const heroArt = document.querySelector(".hero-art");
  if (heroArt && !reduced && window.matchMedia("(pointer:fine)").matches) {
    const layers = heroArt.querySelectorAll("[data-depth]");
    let tx = 0, ty = 0, cx = 0, cy = 0;
    heroArt.addEventListener("mousemove", (e) => {
      const r = heroArt.getBoundingClientRect();
      tx = (e.clientX - r.left - r.width / 2) / r.width;
      ty = (e.clientY - r.top - r.height / 2) / r.height;
    });
    heroArt.addEventListener("mouseleave", () => { tx = 0; ty = 0; });
    (function loop() {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth) || 0;
        l.style.setProperty("--px", (cx * d * 40).toFixed(2) + "px");
        l.style.setProperty("--py", (cy * d * 40).toFixed(2) + "px");
      });
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Floating particles (subtle ambient) ---------- */
  const fx = document.querySelector(".fx");
  if (fx && !reduced) {
    const n = window.innerWidth < 700 ? 8 : 14;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "p";
      const size = 3 + Math.random() * 5;
      p.style.width = p.style.height = size.toFixed(1) + "px";
      p.style.left = (Math.random() * 100).toFixed(2) + "%";
      p.style.top = (Math.random() * 100).toFixed(2) + "%";
      p.style.animationDuration = (10 + Math.random() * 12).toFixed(1) + "s";
      p.style.animationDelay = (-Math.random() * 14).toFixed(1) + "s";
      if (Math.random() > 0.6) p.style.background = "radial-gradient(circle, rgba(240,166,208,0.5), transparent 70%)";
      fx.appendChild(p);
    }
  }

  /* ---------- About timeline progress + active nodes ---------- */
  const tl = document.querySelector(".timeline");
  if (tl) {
    const fill = tl.querySelector(".spine .fill");
    const items = [...tl.querySelectorAll(".tl-item")];
    const update = () => {
      const r = tl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const progressed = Math.min(Math.max(vh * 0.6 - r.top, 0), total);
      const pct = total ? (progressed / total) * 100 : 0;
      if (fill) fill.style.height = pct + "%";
      items.forEach((it) => {
        const nr = it.querySelector(".node").getBoundingClientRect();
        if (nr.top < vh * 0.62) it.classList.add("active");
        else it.classList.remove("active");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------- Skills connector lines ---------- */
  const stage = document.querySelector(".skills-stage");
  const svg = document.querySelector(".skills-svg");
  if (stage && svg) {
    const draw = () => {
      const sr = stage.getBoundingClientRect();
      const heads = [...stage.querySelectorAll(".eco-head .dot")];
      const cards = [...stage.querySelectorAll(".skill-card")];
      const pt = (el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - sr.left + r.width / 2, y: r.top - sr.top + r.height / 2 };
      };
      let d = "";
      // connect each head to its column cards
      stage.querySelectorAll(".eco-col").forEach((col) => {
        const head = col.querySelector(".eco-head .dot");
        if (!head) return;
        const hp = pt(head);
        col.querySelectorAll(".skill-card").forEach((c) => {
          const cp = pt(c);
          const midY = (hp.y + cp.y) / 2;
          d += `M ${hp.x} ${hp.y} C ${hp.x} ${midY}, ${cp.x} ${midY}, ${cp.x} ${cp.y} `;
        });
      });
      // connect heads horizontally
      for (let i = 0; i < heads.length - 1; i++) {
        const a = pt(heads[i]), b = pt(heads[i + 1]);
        d += `M ${a.x} ${a.y} C ${(a.x + b.x) / 2} ${a.y}, ${(a.x + b.x) / 2} ${b.y}, ${b.x} ${b.y} `;
      }
      svg.setAttribute("viewBox", `0 0 ${sr.width} ${sr.height}`);
      const path = svg.querySelector("path");
      path.setAttribute("d", d);
    };
    const ro = new ResizeObserver(draw);
    ro.observe(stage);
    window.addEventListener("resize", draw);
    setTimeout(draw, 100);
  }

  /* ---------- Fit fixed-size product mocks to their frame ---------- */
  const fitMocks = () => {
    document.querySelectorAll(".mock-sova, .mock-nex").forEach((m) => {
      const p = m.closest(".proj-screen");
      if (!p) return;
      p.classList.add("has-fit");
      const w = p.clientWidth - 32, h = p.clientHeight - 32;
      const s = Math.min(w / 520, h / 356);
      m.style.transform = `scale(${s})`;
      m.style.left = (16 + Math.max(0, (w - 520 * s) / 2)) + "px";
    });
  };
  fitMocks();
  if ("ResizeObserver" in window) {
    const mro = new ResizeObserver(fitMocks);
    document.querySelectorAll(".mock-sova, .mock-nex").forEach((m) => {
      const p = m.closest(".proj-screen");
      if (p) mro.observe(p);
    });
  }
  window.addEventListener("resize", fitMocks);
  window.addEventListener("load", fitMocks);

  /* ---------- Year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Mobile nav (smooth anchor only) ---------- */
  const burger = document.querySelector(".nav-burger");
  if (burger) {
    burger.addEventListener("click", () => {
      const t = document.querySelector("#contact");
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
    });
  }
})();
