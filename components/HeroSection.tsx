import Image from "next/image";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/icons/Icons";
import { existsSync } from "fs";
import path from "path";

function portraitExists() {
  return existsSync(
    path.join(process.cwd(), "public", "uploads", "portrait.jpg"),
  );
}

export function HeroSection() {
  const hasPortrait = portraitExists();

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Hello, I&apos;m Parisa.
          </p>

          <h1 id="hero-heading" className="hero-title">
            Frontend-focused
            <br />
            Full-Stack Engineer
            <br />
            building <span className="accent">reliable</span>
            <br />
            and user-friendly
            <br />
            digital products.
          </h1>

          <p className="hero-lead">
            I have 5+ years of experience building and maintaining web and SaaS
            applications with React, Next.js and TypeScript. I focus on reusable
            architecture, responsive design, accessibility, performance and
            production-quality delivery.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View my work
              <ArrowUpRightIcon />
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-offset" aria-hidden="true" />
          <div className="hero-portrait-frame">
            {hasPortrait ? (
              <Image
                src={site.portraitPath}
                alt={`Portrait of ${site.name}`}
                width={840}
                height={1050}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            ) : (
              <div
                className="hero-portrait-placeholder"
                role="img"
                aria-label={`Portrait placeholder for ${site.name}. Add public/uploads/portrait.jpg to replace.`}
              >
                Portrait
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
