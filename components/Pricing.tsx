import { Fragment } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Pricing.module.css";

type Cell = boolean | string;

const ROWS: { label: string; hosted: Cell; enterprise: Cell }[] = [
  { label: "Context engine", hosted: true, enterprise: true },
  { label: "Custom agents & workflows", hosted: true, enterprise: true },
  {
    label: "VPC / on-prem deployment",
    hosted: "Your infrastructure",
    enterprise: "Managed with you",
  },
  { label: "SSO, RBAC, audit trails", hosted: false, enterprise: true },
  {
    label: "Forward-deployed engineering team",
    hosted: false,
    enterprise: true,
  },
  {
    label: "Support",
    hosted: "Community",
    enterprise: "Dedicated team + named escalation path",
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className={`${styles.mark} ${styles.markYes}`} aria-hidden="true">
        {"✓"}
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={`${styles.mark} ${styles.markNo}`} aria-hidden="true">
        {"—"}
      </span>
    );
  }
  return <span className={styles.cellText}>{value}</span>;
}

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        index={7}
        total={8}
        title="Two ways to run Potpie."
        subtitle={
          "A platform fee, not token roulette. Priced on engineers supported, not queries fired — and it falls as automation rises."
        }
      />

      <div className={styles.table}>
        <div className={styles.headCell} />
        <div className={styles.headCell}>
          <div className={styles.planName}>Self-hosted</div>
          <div className={styles.planPrice}>Free, forever</div>
        </div>
        <div className={`${styles.headCell} ${styles.headEnterprise}`}>
          <div className={styles.planName}>Potpie for enterprise</div>
          <div className={styles.planPrice}>
            Platform fee + dedicated team
          </div>
        </div>

        {ROWS.map((row) => (
          <Fragment key={row.label}>
            <div className={styles.rowLabel}>{row.label}</div>
            <div className={styles.cell}>
              <span className={styles.mobileTag}>Self-hosted</span>
              <CellValue value={row.hosted} />
            </div>
            <div className={`${styles.cell} ${styles.cellEnterprise}`}>
              <span className={styles.mobileTag}>Enterprise</span>
              <CellValue value={row.enterprise} />
            </div>
          </Fragment>
        ))}

        <div className={styles.rowLabel} />
        <div className={styles.cell}>
          <a className="btn btn-secondary" href="#">
            {"Get the source →"}
          </a>
        </div>
        <div className={`${styles.cell} ${styles.cellEnterprise}`}>
          <a className="btn btn-primary" href="#">
            {"Talk to sales →"}
          </a>
        </div>
      </div>

      <p className={styles.footnote}>
        {
          "The open-source core isn’t a trial. It’s the proof that you’re not locked in. Run it forever if it does what you need."
        }
      </p>
    </section>
  );
}
