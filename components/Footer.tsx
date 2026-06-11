import { BrandMark } from "@/components/icons/BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer wrap">
      <div className="footer-in">
        <a href="#top" className="brand">
          <span className="mark" aria-hidden="true">
            <BrandMark gradientId="bm2" />
          </span>
          Parisa Ghasemi
        </a>
        <span className="muted">
          Designed &amp; built with code, care &amp; AI — © {year}
        </span>
        <a href="#top" className="up">
          Back to top
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
