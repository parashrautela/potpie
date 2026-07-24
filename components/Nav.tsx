"use client";

import { useState } from "react";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Platform", href: "#" },
  { label: "How we work", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="/">
          <span className={styles.glyph} aria-hidden="true" />
          potpie
        </a>

        <nav className={styles.links} aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} className={styles.link} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <a className="btn btn-primary" href="#">
            {"Book a demo →"}
          </a>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </div>

      {open && (
        <div className={styles.panel}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              className={styles.panelLink}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="#"
            onClick={() => setOpen(false)}
          >
            {"Book a demo →"}
          </a>
        </div>
      )}
    </header>
  );
}
