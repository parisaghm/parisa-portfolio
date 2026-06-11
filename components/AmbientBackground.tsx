"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COLORS = ["#7c6cf0", "#6e8bff", "#b587ff", "#f0a6d0"];

export function AmbientBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = particlesRef.current;
    if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const n = window.innerWidth < 700 ? 8 : 12;
    const particles: HTMLSpanElement[] = [];

    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = 3 + Math.random() * 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${(Math.random() * 100).toFixed(2)}%`;
      p.style.top = `${(Math.random() * 72).toFixed(2)}%`;
      p.style.setProperty(
        "--particle-color",
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
      );
      p.style.setProperty("--p-opacity", `${0.55 + Math.random() * 0.2}`);
      p.style.setProperty("--drift-y", `${2 + Math.random() * 6}px`);
      p.style.setProperty("--drift-x", `${((Math.random() - 0.5) * 2).toFixed(2)}px`);
      p.style.setProperty("--p-duration", `${8 + Math.random() * 12}s`);
      p.style.setProperty("--p-delay", `${(-Math.random() * 18).toFixed(2)}s`);
      if (Math.random() > 0.75) {
        p.style.filter = `blur(${0.8 + Math.random() * 0.8}px)`;
      }
      layer.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="blob b4" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="fx" aria-hidden="true">
        <div className="fx-deco">
          <svg className="curve" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7C6CF0" />
                <stop offset="1" stopColor="#F0A6D0" />
              </linearGradient>
            </defs>
            <path d="M-50 220 C 300 120, 600 320, 980 200 S 1500 120, 1500 200" />
            <path d="M-50 640 C 360 560, 720 760, 1100 620 S 1520 560, 1520 640" />
          </svg>
          <span className="decorative-ring k1" />
          <span className="decorative-ring k2" />
          <span className="decorative-ring k3" />
          <span className="decorative-ring k4" />
        </div>
        <div className="fx-particles" ref={particlesRef} />
      </div>
    </>
  );
}
