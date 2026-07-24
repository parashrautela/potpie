import { Fragment } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Comparison.module.css";

type Entry = {
  lead: string;
  detail: string;
};

type Row = {
  before: Entry;
  after: Entry;
};

const rows: Row[] = [
  {
    before: {
      lead: "Context is fragmented.",
      detail:
        "Code in GitHub, decisions in Slack, architecture in Confluence, tickets in Jira. No unified view.",
    },
    after: {
      lead: "One living graph.",
      detail:
        "Everything connected, traversable, and owned by you. Agents reason over the full picture.",
    },
  },
  {
    before: {
      lead: "Knowledge lives in people.",
      detail:
        "When an engineer leaves, three months of context leave with them. Every onboarding is a reset.",
    },
    after: {
      lead: "Context outlives the engineer.",
      detail:
        "Knowledge is in the graph, not in someone’s head. New engineers inherit it on day one.",
    },
  },
  {
    before: {
      lead: "AI agents fly blind.",
      detail:
        "Agents without architecture context ship code that passes tests and breaks production.",
    },
    after: {
      lead: "Agents reason over your architecture.",
      detail:
        "Ownership, dependencies, risk context — all available before a single line is written.",
    },
  },
  {
    before: {
      lead: "You rent the intelligence layer.",
      detail:
        "Your architecture decisions and tribal knowledge end up in your vendor’s systems.",
    },
    after: {
      lead: "You own the intelligence layer.",
      detail:
        "Deployed in your VPC. Your data, your harness, your compounding advantage.",
    },
  },
  {
    before: {
      lead: "Every model release is a migration.",
      detail: "Build on one model and every API change breaks your system.",
    },
    after: {
      lead: "Models change. Your system doesn’t.",
      detail:
        "The harness absorbs the churn. Swap models without rebuilding anything.",
    },
  },
];

export default function Comparison() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="The shift"
        index={5}
        total={8}
        title={
          <>
            {"Context is "}
            <span className="accent">{"the new code."}</span>
            {" If you don’t own it, someone else will."}
          </>
        }
        subtitle={
          "Every enterprise has already bought AI coding tools. Nothing compounded. Here’s why — and what changes when you own the context layer instead of renting it."
        }
      />

      <div className={styles.table}>
        <div className={`${styles.headCell} ${styles.headBefore}`}>
          {"Before — status quo"}
        </div>
        <div className={`${styles.headCell} ${styles.headAfter}`}>
          {"After — with Potpie"}
        </div>

        {rows.map((row) => (
          <Fragment key={row.before.lead}>
            <div className={`${styles.cell} ${styles.before}`}>
              <span className={styles.mark} aria-hidden="true">
                {"✕"}
              </span>
              <p className={styles.lead}>{row.before.lead}</p>
              <p className={styles.detail}>{row.before.detail}</p>
            </div>
            <div className={`${styles.cell} ${styles.after}`}>
              <span className={styles.mark} aria-hidden="true">
                {"✓"}
              </span>
              <p className={styles.lead}>{row.after.lead}</p>
              <p className={styles.detail}>{row.after.detail}</p>
            </div>
          </Fragment>
        ))}
      </div>

      <p className={styles.closing}>
        {"Don’t let your advantage become their moat."}
      </p>
    </section>
  );
}
