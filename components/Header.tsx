"use client";

import { useEffect, useId, useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { DownloadIcon } from "@/components/icons/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <a href="#top" className="logo" aria-label={`${site.name} home`}>
          {site.shortName}
          <span className="logo-dot">.</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-dark header-cv"
            href={site.cvPath}
            download
          >
            Download CV
            <DownloadIcon />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id={menuId} className="mobile-nav" hidden={!open}>
        <div className="wrap">
          <nav aria-label="Mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-dark"
              href={site.cvPath}
              download
              onClick={closeMenu}
            >
              Download CV
              <DownloadIcon />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
