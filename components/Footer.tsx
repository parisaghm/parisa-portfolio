import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <strong>{site.name}</strong>
          <p>{site.title}</p>
          <p>{site.location}</p>
        </div>

        <div className="footer-right">
          <a className="footer-top" href="#top">
            Back to top
          </a>
          <p className="footer-copy">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
