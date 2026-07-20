import SectionHeader from "./SectionHeader";
import styles from "./HowItWorks.module.css";

const layers = [
  {
    name: "Applications",
    items: "RCA · Test generation · Onboarding · Q&A · Documentation · Analytics",
    core: false,
  },
  {
    name: "Harness",
    items: "Task orchestration · Routing · Tool use · Validation · Guardrails",
    core: false,
  },
  {
    name: "Context graph",
    items: "Code graph · Knowledge graph · Ontology · Hybrid retrieval",
    core: true,
  },
  {
    name: "Your data",
    items: "Codebases · Docs · Tickets · APIs · Logs · Architecture",
    core: false,
  },
];

const steps = [
  {
    label: "01 / Embed",
    text: "Our engineers work alongside your team on real delivery — understanding your systems, architecture, and workflows.",
  },
  {
    label: "02 / Unify",
    text: "The context graph fills in. Your code, tickets, docs, and decisions become a unified, traversable graph inside your environment.",
  },
  {
    label: "03 / Prove",
    text: "Agents start doing the work: spec generation, implementation, debugging, testing, impact analysis. All grounded in context from stages 1-2.",
  },
  {
    label: "04 / Replicate",
    text: "Workflows expand across teams. The context graph compounds. Engineers per unit of output goes down.",
  },
  {
    label: "05 / Transform",
    text: "The practice is yours. The context is yours. The intelligence layer is yours. Potpie’s involvement decreases as your autonomy increases.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="How it works"
        index={4}
        total={7}
        title={
          <>
            {"From your data to your advantage — "}
            <span className="accent">{"in stages."}</span>
          </>
        }
        subtitle={
          "Potpie doesn’t drop a tool in your lap and leave. It builds the context layer, proves the agents, and hands over a practice — in your environment, on your codebase."
        }
      />

      <div className={`mono-tag ${styles.partLabel}`}>{"The architecture"}</div>
      <div className={styles.layers}>
        {layers.map((layer) => (
          <div
            key={layer.name}
            className={
              layer.core ? `${styles.layer} ${styles.layerCore}` : styles.layer
            }
          >
            <div className={styles.layerName}>{layer.name}</div>
            <div className={styles.layerItems}>{layer.items}</div>
          </div>
        ))}
      </div>

      <div className={styles.engagement}>
        <div className={`mono-tag ${styles.partLabel}`}>{"The engagement"}</div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.label} className={styles.step}>
              <div className={`mono-tag ${styles.stepLabel}`}>{step.label}</div>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.bars}>
          <div>
            <div className={styles.barLabel}>{"Potpie involvement"}</div>
            <div className={`${styles.bar} ${styles.barInvolvement}`} />
          </div>
          <div>
            <div className={styles.barLabel}>{"Customer autonomy"}</div>
            <div className={`${styles.bar} ${styles.barAutonomy}`} />
          </div>
        </div>

        <p className={styles.callout}>
          {"A traditional vendor bills more as it deploys more people. We bill for platform leverage — the engineers-per-outcome number goes down over time."}
        </p>
      </div>
    </section>
  );
}
