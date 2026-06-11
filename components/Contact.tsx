import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { ContactEmailLink } from "@/components/ContactEmailLink";

const MAILTO = "mailto:parisa.ghasemie@gmail.com";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <span className="cbg" aria-hidden="true" />
      <span className="cblob c1" aria-hidden="true" />
      <span className="cblob c2" aria-hidden="true" />

      <div className="wrap contact-inner">
        <Reveal>
          <div className="contact-head">
            <span className="eyebrow">Let&apos;s create</span>
            <h2 className="section-title">
              Have an idea worth <em>building</em>?
            </h2>
            <p className="section-lead contact-lead">
              I&apos;m open to full-time roles, freelance projects, and meaningful collaborations. Let&apos;s make something beautiful together.
            </p>
          </div>

          <div className="contact-actions">
            <Magnetic className="btn btn-primary" href={MAILTO} strength={0.3}>
              <MailIcon />
              Say hello
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="/uploads/Parisa_Ghasemi.pdf" download strength={0.3}>
              <DownloadIcon />
              Download Resume
            </Magnetic>
          </div>

          <div className="contact-socials">
            <Magnetic className="csocial" href="https://www.linkedin.com/in/parisa--ghasemi/" target="_blank" rel="noopener noreferrer" strength={0.25}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6 2.5 2.5 0 004.98 3.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21h-4z" />
              </svg>
              LinkedIn
            </Magnetic>
            <Magnetic className="csocial" href="https://github.com/parisaghm" target="_blank" rel="noopener noreferrer" strength={0.25}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              GitHub
            </Magnetic>
            <ContactEmailLink />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
