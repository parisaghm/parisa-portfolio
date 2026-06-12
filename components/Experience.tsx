import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad wrap">
      <div className="section-head">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve made
            <br />
            an <em>impact</em>.
          </h2>
        </Reveal>
      </div>

      <div className="xp-timeline">
        <span className="spine" />

        <Reveal as="article" className="xp-item">
          <span className="node" />
          <div className="xp-card glass">
            <div className="xp-top">
              <div>
                <div className="role">Full-Stack Developer</div>
                <div className="co">SabaIdea — Aparat & Filimo</div>
              </div>
              <span className="when">Product Scale</span>
            </div>
            <p>
              Built and optimized features across two of Iran&apos;s largest media platforms, serving tens of millions of users with a focus on performance, reliability, and quality.
            </p>
            <div className="xp-metrics">
              <div className="xp-metric"><div className="n">56M+</div><div className="l">Users on Aparat</div></div>
              <div className="xp-metric"><div className="n">3.5M+</div><div className="l">Users on Filimo</div></div>
              <div className="xp-metric"><div className="n">+24%</div><div className="l">Performance improvement</div></div>
              <div className="xp-metric"><div className="n">+30%</div><div className="l">Test coverage increase</div></div>
            </div>
          </div>
        </Reveal>

        <Reveal as="article" className="xp-item">
          <span className="node" />
          <div className="xp-card glass">
            <div className="xp-top">
              <div>
                <div className="role">Freelance Full-Stack Developer</div>
                <div className="co">Independent · Remote</div>
              </div>
              <span className="when">AI-Assisted</span>
            </div>
            <p>
              Partnering with founders and teams to ship full-stack applications quickly — combining scalable architecture with an AI-assisted workflow that compresses delivery time without compromising craft.
            </p>
            <div className="xp-metrics xp-metrics--three">
              <div className="xp-metric"><div className="n">Full-stack</div><div className="l">End-to-end applications</div></div>
              <div className="xp-metric"><div className="n">AI-first</div><div className="l">Assisted development</div></div>
              <div className="xp-metric"><div className="n">Scalable</div><div className="l">Architecture by design</div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
