import styles from "./Footer.module.css";

const LINK_COLUMNS = [
  {
    head: "Product",
    links: [
      { label: "Platform", href: "#" },
      { label: "How we work", href: "#" },
      { label: "Security", href: "#" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    head: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    head: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = ["GitHub", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.tagline}>
            The engineering context layer for large-scale organizations.
          </p>

          {LINK_COLUMNS.map((column) => (
            <div key={column.head}>
              <div className={styles.columnHead}>{column.head}</div>
              <ul className={styles.linkList}>
                {column.links.map(({ label, href }) => (
                  <li key={label}>
                    <a className={styles.link} href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.wordmark}>
              <span className={styles.glyph} aria-hidden="true" />
              potpie
            </span>
            <span className={styles.copyright}>
              {"© 2026 Potpie. All rights reserved."}
            </span>
          </div>

          <div className={styles.social}>
            {SOCIAL_LINKS.map((label) => (
              <a key={label} className={styles.socialLink} href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
