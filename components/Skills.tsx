"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const COLUMNS = [
  {
    key: "fe",
    dotClass: "fe",
    title: "Frontend",
    subtitle: "Interfaces & experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
    skills: [
      { badge: "R", name: "React", level: "Expert · daily" },
      { badge: "N", name: "Next.js", level: "Expert · daily" },
      { badge: "Ts", name: "TypeScript", level: "Expert · daily" },
      { badge: "V", name: "Vue.js", level: "Advanced" },
    ],
    mid: false,
  },
  {
    key: "be",
    dotClass: "be",
    title: "Backend",
    subtitle: "Systems & data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    ),
    skills: [
      { badge: "No", name: "Node.js", level: "Expert · daily" },
      { badge: "Pg", name: "PostgreSQL", level: "Advanced" },
      { badge: "Re", name: "REST APIs", level: "Expert" },
      { badge: "Gq", name: "GraphQL", level: "Advanced" },
    ],
    mid: true,
  },
  {
    key: "ai",
    dotClass: "ai",
    title: "AI Tools",
    subtitle: "Pairing & velocity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    skills: [
      { badge: "Cc", name: "Claude Code", level: "Daily driver" },
      { badge: "Cu", name: "Cursor AI", level: "Daily driver" },
      { badge: "Gp", name: "ChatGPT", level: "Advanced" },
      { badge: "Co", name: "GitHub Copilot", level: "Advanced" },
    ],
    mid: false,
  },
];

export function Skills() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!stage || !svg || !path) return;

    const draw = () => {
      const sr = stage.getBoundingClientRect();
      const pt = (el: Element) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left - sr.left + r.width / 2,
          y: r.top - sr.top + r.height / 2,
        };
      };

      let d = "";
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

      const heads = [...stage.querySelectorAll(".eco-head .dot")];
      for (let i = 0; i < heads.length - 1; i++) {
        const a = pt(heads[i]);
        const b = pt(heads[i + 1]);
        d += `M ${a.x} ${a.y} C ${(a.x + b.x) / 2} ${a.y}, ${(a.x + b.x) / 2} ${b.y}, ${b.x} ${b.y} `;
      }

      svg.setAttribute("viewBox", `0 0 ${sr.width} ${sr.height}`);
      path.setAttribute("d", d);
    };

    const ro = new ResizeObserver(draw);
    ro.observe(stage);
    window.addEventListener("resize", draw);
    setTimeout(draw, 100);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <section id="skills" className="section-pad wrap">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">
            An <em>ecosystem</em> of tools
            <br />
            I build with daily.
          </h2>
        </Reveal>
      </div>

      <div className="skills-stage" ref={stageRef}>
        <Reveal>
          <svg className="skills-svg" ref={svgRef} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7C6CF0" />
                <stop offset="1" stopColor="#6E8BFF" />
              </linearGradient>
            </defs>
            <path ref={pathRef} d="" />
          </svg>

          <div className="eco">
            {COLUMNS.map((col) => (
              <div key={col.key} className={`eco-col${col.mid ? " mid" : ""}`}>
                <div className="eco-head">
                  <span className={`dot ${col.dotClass}`}>{col.icon}</span>
                  <h4>
                    {col.title} <span>{col.subtitle}</span>
                  </h4>
                </div>
                {col.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="badge">{skill.badge}</span>
                    <div>
                      <div className="nm">{skill.name}</div>
                      <div className="lvl">{skill.level}</div>
                    </div>
                    <span className="pulse" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
