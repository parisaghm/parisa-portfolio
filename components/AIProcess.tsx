import { Reveal, RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Idea",
    description: "Frame the problem and the people it's for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 00-4 10.5c.6.6 1 1.3 1 2.5h6c0-1.2.4-1.9 1-2.5A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    description: "Shape the experience — flows, type, motion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
        <path d="M2 2l7.6 7.6" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Collaboration",
    description: "Pair with AI to explore and accelerate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M5.6 5.6l2 2M16.4 16.4l2 2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Development",
    description: "Build it for real — typed, tested, scalable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Testing",
    description: "Verify, refine, and harden every edge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Launch",
    description: "Ship to the world — then iterate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5L3 21l4.5-1.5M14 4s4 0 6 2-2 6-2 6m-2-8C9 5 6 9 6 9l3 3 6 6 3-3s4-3 2-6c0 0-2-2-6-2z" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function AIProcess() {
  return (
    <section id="process" className="section-pad wrap ai-section">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow">Ways of working</span>
          <h2 className="section-title">
            How I work <em>with AI</em>.
          </h2>
          <p className="section-lead">
            AI doesn&apos;t replace the craft — it amplifies it. Here&apos;s how a product moves from a spark of an idea to a live experience.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="ai-flow">
        {STEPS.map((step, index) => (
          <RevealStaggerItem key={step.num} className="ai-step">
            <div className="ic">{step.icon}</div>
            <div className="st-n">{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            {index < STEPS.length - 1 && (
              <span className="arrow">
                <ArrowIcon />
              </span>
            )}
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </section>
  );
}
