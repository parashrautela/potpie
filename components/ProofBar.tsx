import SectionHeader from "./SectionHeader";
import styles from "./ProofBar.module.css";

const PILLS = [
  "Fortune 500 engineering orgs",
  "40M+ lines of code in production",
  "Regulated industries",
  "Open source core — 5.1k+ stars",
];

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
    </section>
  );
}
