"use client";

import { useEffect, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

// Each particle drifts gently with its own pattern: mx & my both set = diagonal,
// mx: 0 = mostly vertical, my: 0 = mostly horizontal. Peak offsets in px are
// clamped at render to ±6 / ±12. dur is clamped to 10-20s, delay in seconds.
const HERO_PARTICLES: Array<{
  top: string;
  left: string;
  size: number;
  opacity: number;
  dur: number;
  delay: number;
  mx: number;
  my: number;
  color: string;
  blur?: number;
}> = [
  { top: "5%", left: "4%", size: 4, opacity: 0.68, dur: 16, delay: 0, mx: 0, my: -10, color: "#7c6cf0" },
  { top: "8%", left: "18%", size: 3, opacity: 0.62, dur: 20, delay: 1.5, mx: 8, my: 0, color: "#b587ff" },
  { top: "12%", left: "32%", size: 4, opacity: 0.7, dur: 22, delay: 3, mx: -7, my: -9, color: "#6e8bff" },
  { top: "10%", left: "48%", size: 3, opacity: 0.58, dur: 14, delay: 0.8, mx: 0, my: 12, color: "#f0a6d0" },
  { top: "7%", left: "62%", size: 5, opacity: 0.72, dur: 24, delay: 2.2, mx: 10, my: 0, color: "#7c6cf0" },
  { top: "14%", left: "76%", size: 3, opacity: 0.64, dur: 12, delay: 4, mx: 6, my: 8, color: "#6e8bff" },
  { top: "18%", left: "90%", size: 4, opacity: 0.66, dur: 18, delay: 1, mx: 0, my: -11, color: "#b587ff" },
  { top: "24%", left: "8%", size: 3, opacity: 0.6, dur: 21, delay: 3.5, mx: -9, my: 0, color: "#f0a6d0", blur: 1 },
  { top: "28%", left: "42%", size: 4, opacity: 0.7, dur: 23, delay: 2, mx: 7, my: -7, color: "#7c6cf0" },
  { top: "32%", left: "58%", size: 3, opacity: 0.55, dur: 10, delay: 0.5, mx: 0, my: 9, color: "#6e8bff" },
  { top: "36%", left: "84%", size: 5, opacity: 0.74, dur: 25, delay: 5, mx: -8, my: 0, color: "#b587ff" },
  { top: "44%", left: "22%", size: 3, opacity: 0.63, dur: 17, delay: 1.2, mx: 6, my: 10, color: "#7c6cf0" },
  { top: "48%", left: "6%", size: 4, opacity: 0.67, dur: 13, delay: 4.5, mx: 0, my: -12, color: "#6e8bff" },
  { top: "52%", left: "38%", size: 3, opacity: 0.59, dur: 19, delay: 2.8, mx: 11, my: 0, color: "#f0a6d0" },
  { top: "56%", left: "68%", size: 4, opacity: 0.71, dur: 15, delay: 0.3, mx: -7, my: 9, color: "#7c6cf0", blur: 1.2 },
  { top: "60%", left: "52%", size: 3, opacity: 0.61, dur: 22, delay: 6, mx: 0, my: 11, color: "#b587ff" },
  { top: "64%", left: "80%", size: 4, opacity: 0.65, dur: 14, delay: 1.8, mx: 8, my: 0, color: "#6e8bff" },
  { top: "38%", left: "94%", size: 3, opacity: 0.57, dur: 20, delay: 3.2, mx: -6, my: -8, color: "#f0a6d0", blur: 0.8 },
  { top: "20%", left: "54%", size: 4, opacity: 0.69, dur: 11, delay: 0.6, mx: 0, my: -9, color: "#7c6cf0" },
  { top: "50%", left: "72%", size: 3, opacity: 0.6, dur: 24, delay: 4.2, mx: 9, my: 7, color: "#6e8bff" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  // TEMP: diagnostic — confirms in the browser console whether the OS
  // "reduce motion" setting is disabling the hero animation. Remove later.
  useEffect(() => {
    console.log("[Hero] prefers-reduced-motion:", reduceMotion ? "REDUCE (animations OFF)" : "no-preference (animations ON)");
  }, [reduceMotion]);

  return (
    <header className="hero wrap">
      <div className="hero-particles" aria-hidden="true">
        {HERO_PARTICLES.map((pt, i) => {
          const mx = Math.max(-6, Math.min(6, pt.mx));
          const my = Math.max(-12, Math.min(12, pt.my));
          return (
          <motion.span
            key={i}
            className="particle"
            style={
              {
                top: pt.top,
                left: pt.left,
                width: `${pt.size}px`,
                height: `${pt.size}px`,
                "--particle-color": pt.color,
                "--p-opacity": String(pt.opacity),
                filter: pt.blur ? `blur(${pt.blur}px)` : undefined,
              } as CSSProperties
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, mx, -mx * 0.7, 0],
                    y: [0, my, -my * 0.6, 0],
                    opacity: [0.5, 0.85, 0.5],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: Math.max(10, Math.min(20, pt.dur)),
                    delay: pt.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
          );
        })}
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="hero-greet">
              <span className="wave">👋</span> Hello, I&apos;m Parisa
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              From <em>pixels</em> to <em className="grad-text">production</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hero-journey">
              <span>UI Designer</span>
              <i>→</i>
              <span>Front-End</span>
              <i>→</i>
              <span>Full-Stack</span>
              <i>→</i>
              <span className="now">AI-First Builder</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="hero-desc">
              I started in pixels and grew into production — designing the experience,
              then engineering the product behind it. Today I build full-stack and
              AI-first, with an eye for craft on both sides of the screen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hero-actions">
              <Magnetic className="btn btn-primary" href="#work" strength={0.3}>
                View My Work
                <ArrowIcon />
              </Magnetic>
              <Magnetic className="btn btn-ghost" href="/uploads/Parisa_Ghasemi.pdf" download strength={0.3}>
                <DownloadIcon />
                Download Resume
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="scroll-cue">
              <span className="line" /> Scroll to explore
            </div>
          </Reveal>
        </div>

        <div className="hero-art" aria-hidden="true">
          <motion.span
            className="art-ring-deco"
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="art-shape s1"
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={reduceMotion ? undefined : { duration: 11, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="art-shape s2"
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={reduceMotion ? undefined : { duration: 13, delay: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg className="art-flow" viewBox="0 0 560 560" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="560" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7C6CF0" />
                <stop offset="1" stopColor="#6E8BFF" />
              </linearGradient>
            </defs>
            <path d="M88 100 C 90 200 150 200 150 285 M150 290 C 200 410 270 455 330 495 M340 495 C 425 465 452 420 452 360 M452 350 C 470 220 430 150 430 90" />
          </svg>

          <motion.div
            className="float art-wire card-glass"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 9, delay: 0, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="float-tag"><span className="d" />Design</div>
            <div className="wf">
              <div className="b t" />
              <div className="r">
                <span className="sq" />
                <div className="cl">
                  <span className="b" />
                  <span className="b" style={{ width: "70%" }} />
                </div>
              </div>
              <div className="b" style={{ width: "90%" }} />
              <div className="b" style={{ width: "60%" }} />
            </div>
          </motion.div>

          <motion.div
            className="float art-browser card-glass"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 10, delay: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bb">
              <i /><i /><i />
              <span className="u">parisa.studio</span>
            </div>
            <div className="bw">
              <div className="ph"><span /></div>
              <div className="pr"><div /><div /><div /></div>
            </div>
          </motion.div>

          <motion.div
            className="float art-react card-glass"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 8, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="top">
              <span className="atom">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="12" cy="12" r="2" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.3" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
                </svg>
              </span>
              <span className="nm">&lt;Hero /&gt;</span>
            </div>
            <pre>
              <span className="k">export</span> <span className="k">const</span> <span className="f">Hero</span> = () =&gt; (
              {"\n"}  &lt;<span className="tg">Section</span> <span className="f">glow</span>&gt;
              {"\n"}    &lt;<span className="tg">Headline</span> /&gt;
              {"\n"}  &lt;/<span className="tg">Section</span>&gt;
              {"\n"});
            </pre>
          </motion.div>

          <motion.div
            className="float art-api card-glass"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 9.5, delay: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="float-tag"><span className="d" />API Flow</div>
            <div className="arow"><span className="m get">GET</span><span className="ep">/products</span></div>
            <div className="lk" />
            <div className="arow">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span className="lbl">Server</span>
            </div>
            <div className="lk" />
            <div className="arow"><span className="m db">DB</span><span className="ep">Postgres</span></div>
          </motion.div>

          <motion.div
            className="float art-ai"
            animate={reduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
            transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="decorative-ring" style={{ animation: "spin 14s linear infinite" }} />
            <span className="decorative-ring r2" style={{ animation: "spinr 20s linear infinite" }} />
            <div className="ai-core">
              <div className="sym">✦</div>
              <div className="lbl">AI</div>
            </div>
          </motion.div>

          <motion.div
            className="float art-snippet card-glass"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 8.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <pre>
              <span className="c">{"// ship it ✨"}</span>
              {"\n"}
              <span className="k">await</span> <span className="f">deploy</span>(<span className="s">&apos;edge&apos;</span>);
            </pre>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
