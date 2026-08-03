import { site } from "@/data/site";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="wrap">
        <div className="contact-card">
          <div className="contact-blob" aria-hidden="true" />
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-label">04 — Contact</span>
              <h2 id="contact-heading">
                Let&apos;s build
                <br />
                something useful.
              </h2>
              <p>
                I&apos;m open to frontend and full-stack engineering
                opportunities where I can contribute to meaningful products,
                strong user experiences and reliable engineering practices.
              </p>
              <div className="contact-meta">
                <div>
                  <span>Email</span>
                  <a href={site.mailto}>{site.email}</a>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{site.location}</strong>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a className="btn btn-primary btn-contact" href={site.mailto}>
                Email me
                <MailIcon />
              </a>
              <a
                className="btn btn-outline-light btn-contact"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <LinkedInIcon />
              </a>
              <a
                className="btn btn-outline-light btn-contact"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
