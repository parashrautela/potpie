import styles from "./Footer.module.css";

const LINK_COLUMNS = [
  {
    head: "Product",
    links: ["Platform", "How we work", "Security", "Pricing"],
  },
  {
    head: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    head: "Resources",
    links: ["Docs", "Blog", "Changelog", "GitHub"],
  },
  {
    head: "Legal",
    links: ["Privacy policy", "Terms of service"],
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
                {column.links.map((label) => (
                  <li key={label}>
                    <a className={styles.link} href="#">
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
