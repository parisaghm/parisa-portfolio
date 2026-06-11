"use client";

import { useFitMocks } from "@/hooks/useFitMocks";
import { NexMock } from "@/components/projects/NexMock";
import { SovaMock } from "@/components/projects/SovaMock";
import { Reveal } from "@/components/ui/Reveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Projects() {
  useFitMocks();

  return (
    <section id="work" className="section-pad wrap">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">
            Products built with
            <br />
            <em>care</em> &amp; intention.
          </h2>
        </Reveal>
      </div>

      <div className="projects">
        <Reveal as="article" className="project">
          <div className="proj-visual">
            <span className="proj-glow" />
            <div className="proj-frame">
              <div className="topbar">
                <i /><i /><i />
                <span className="url">sovabudget.app</span>
              </div>
              <div className="proj-screen" style={{ padding: 16 }}>
                <SovaMock />
              </div>
            </div>
          </div>
          <div className="proj-body">
            <span className="proj-num">Project 01</span>
            <span className="ptag">AI · Fintech</span>
            <h3>AI Budget Tracker</h3>
            <p>
              A financial dashboard that turns raw transactions into clear, AI-driven insights — helping users understand and shape their spending in real time.
            </p>
            <ul className="proj-feats">
              <li><CheckIcon />Financial dashboard</li>
              <li><CheckIcon />Smart analytics</li>
              <li><CheckIcon />Secure authentication</li>
              <li><CheckIcon />Responsive UI</li>
            </ul>
            <div className="proj-badges">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>React</span>
              <span>Chart.js</span>
            </div>
            <a href="https://budget-tracker-ivory-ten.vercel.app/dashboard" className="proj-link" target="_blank" rel="noopener noreferrer">
              View case study
              <ArrowIcon />
            </a>
          </div>
        </Reveal>

        <Reveal as="article" className="project flip">
          <div className="proj-visual">
            <span className="proj-glow" style={{ background: "linear-gradient(125deg,#A8C0FF,#B7AAF8)", opacity: 0.45 }} />
            <div className="proj-frame">
              <div className="topbar">
                <i /><i /><i />
                <span className="url">nexpath.fi</span>
              </div>
              <div className="proj-screen" style={{ padding: 16 }}>
                <NexMock />
              </div>
            </div>
          </div>
          <div className="proj-body">
            <span className="proj-num">Project 02</span>
            <span className="ptag">SaaS Platform · EdTech · Career Guidance</span>
            <h3>NexPath Career Guidance Platform</h3>
            <p>
              NexPath is a modern career guidance platform that helps schools, career agencies, and education providers manage assessments, generate personalized career plans, and guide students through their professional journey.
            </p>
            <ul className="proj-feats">
              <li><CheckIcon />Assessment platform</li>
              <li><CheckIcon />Career planning workflows</li>
              <li><CheckIcon />Multilingual support</li>
              <li><CheckIcon />Scalable SaaS architecture</li>
            </ul>
            <div className="proj-badges">
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
            </div>
            <a href="https://nexpath.app/en/" className="proj-link" target="_blank" rel="noopener noreferrer">
              View case study
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
