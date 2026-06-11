"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const TIMELINE = [
  {
    year: "The beginning",
    title: "UI Designer",
    description:
      "Fell in love with the craft of interfaces — typography, rhythm, and the small details that make products feel alive.",
  },
  {
    year: "Going deeper",
    title: "Front-End Engineer",
    description:
      "Turned designs into living code with React & TypeScript. Learned that great UX is equal parts art and engineering.",
  },
  {
    year: "Full ownership",
    title: "Full-Stack Developer",
    description:
      "Owned products end-to-end — APIs, databases, performance. Building systems that scale to millions of users.",
  },
  {
    year: "Today",
    title: "AI-First Builder",
    description:
      "Pairing with AI to design and ship faster than ever — without compromising on quality or craft.",
  },
];

export function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    const fill = tl.querySelector<HTMLElement>(".spine .fill");
    const items = [...tl.querySelectorAll<HTMLElement>(".tl-item")];

    const update = () => {
      const r = tl.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height;
      const progressed = Math.min(Math.max(vh * 0.6 - r.top, 0), total);
      const pct = total ? (progressed / total) * 100 : 0;
      if (fill) fill.style.height = `${pct}%`;
      items.forEach((it) => {
        const node = it.querySelector(".node");
        if (!node) return;
        const nr = node.getBoundingClientRect();
        if (nr.top < vh * 0.62) it.classList.add("active");
        else it.classList.remove("active");
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="about" className="section-pad wrap">
      <div className="about-grid">
        <div className="about-intro">
          <Reveal>
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              A designer who learned to <em>engineer</em>.
            </h2>
            <p>
              I started in pixels and ended up in production. Over the past five years I&apos;ve moved from
              crafting interfaces to shipping full-stack systems — and now I build at the intersection of
              <strong> design, code, and AI</strong>.
            </p>
            <p>
              My work lives where beautiful experiences meet scalable architecture: thoughtful, fast,
              and made to grow.
            </p>
            <div className="about-sig">— Parisa</div>
          </Reveal>
        </div>

        <div className="timeline" ref={timelineRef}>
          <Reveal>
            <div className="spine">
              <span className="fill" />
            </div>
            {TIMELINE.map((item) => (
              <div key={item.title} className="tl-item">
                <span className="node" />
                <div className="yr">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
