import SectionHeader from "./SectionHeader";
import styles from "./Security.module.css";

export default function Security() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Enterprise-ready"
        index={6}
        total={7}
        title="Centrally governed AI, deployed in your environment"
        subtitle={
          "Built for organizations where “where does the data go?” is the first question and the last one."
        }
      />

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>{"We don’t use your data"}</h3>
          <p className={styles.body}>
            {
              "Your code never leaves your boundary. VPC or on-prem deployment. Network isolation. Zero data retention — your context stays yours."
            }
          </p>
        </div>

        <div className={styles.card}>
          <h3>Compliance</h3>
          <div className={styles.chips}>
            <span className={styles.chip}>SOC 2 Type II</span>
            <span className={styles.chip}>ISO 27001</span>
            <span className={styles.chip}>ISO 42001</span>
            <span className={styles.chip}>GDPR</span>
          </div>
          <p className={styles.note}>
            Audited, certified, and deployed inside regulated industries.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Enterprise ready</h3>
          <p className={styles.body}>
            {
              "RBAC, SSO, and immutable audit logs — traceable to a person, not a vendor. Open source core: self-hostable, inspectable, no lock-in, no black box."
            }
          </p>
        </div>
      </div>

      <div className={styles.ctaRow}>
        <a className="btn btn-primary" href="#">
          Book a demo
        </a>
        <a className="btn btn-secondary" href="#">
          Trust center
        </a>
      </div>
    </section>
  );
}
