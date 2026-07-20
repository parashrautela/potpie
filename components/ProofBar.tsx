import SectionHeader from "./SectionHeader";
import styles from "./ProofBar.module.css";

const PILLS = [
  "Fortune 500 engineering orgs",
  "40M+ lines of code in production",
  "Regulated industries",
  "Open source core — 5.1k+ stars",
];

/* Greyscale text stand-ins until real logo SVGs arrive */
const WORDMARKS = ["Flobiz", "Astronomer", "Moniepoint"];

const MARQUEE_SET = Array.from({ length: 4 }, () => WORDMARKS).flat();

export default function ProofBar() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Deployed in production"
        index={1}
        total={7}
        title="Proven in production"
      />

      <div className={styles.pills}>
        {PILLS.map((text) => (
          <div className={styles.pill} key={text}>
            <span className={styles.dot} aria-hidden="true" />
            {text}
          </div>
        ))}
      </div>

      {/* Results metric cards pending confirmed data (onboarding time, PR cycles, token spend, KT hours, agent completion) */}

      <div className={styles.marqueeBlock}>
        <div className="mono-tag">Trusted by and built for</div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div className={styles.group}>
              {MARQUEE_SET.map((name, i) => (
                <span className={styles.wordmark} key={`a-${i}`}>
                  {name}
                </span>
              ))}
            </div>
            <div className={styles.group} aria-hidden="true">
              {MARQUEE_SET.map((name, i) => (
                <span className={styles.wordmark} key={`b-${i}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
