import SectionHeader from "./SectionHeader";
import { IconGraph, IconOrchestration, IconPeople } from "./IsoIcons";
import styles from "./Offer.module.css";

const cards = [
  {
    icon: IconGraph,
    tag: "The intelligence layer",
    title: "Context engineering",
    body: "Your code, tickets, docs, architecture, logs, PRs, and workflows — unified into a living context graph. Not a search index. A relationship-aware graph that agents traverse instead of re-reading everything. It compounds: every fix, decision, and pattern makes the next task faster, cheaper, and more accurate.",
  },
  {
    icon: IconOrchestration,
    tag: "The agentic layer",
    title: "AI agents",
    body: "A model-agnostic harness that runs agents on top of the context graph. Task orchestration, routing, validation, and guardrails — all tuned to your stack and your workflows. Swap the model underneath and nothing above it moves. Use Claude, OpenAI, Llama, Cursor, Qwen — whatever works best per task.",
  },
  {
    icon: IconPeople,
    tag: "The human layer",
    title: "Forward-deployed engineers",
    body: "The platform is the product. Forward-deployed engineers are how it lands. Our team embeds with yours, understands your systems and workflows, and proves the platform on your codebase — then hands the practice over. Their incentive is headcount. Ours is automation.",
  },
];

export default function Offer() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="The platform"
        index={2}
        total={8}
        title={
          <>
            {"Three layers. "}
            <span className="accent">{"One complete system."}</span>
          </>
        }
        subtitle={
          "Most AI tools give you a model and wish you luck. Potpie gives you the infrastructure, the intelligence, and the engineers to make it work inside your organization."
        }
      />
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.tag} className={styles.card}>
            <card.icon className={styles.icon} />
            <div className="mono-tag">{card.tag}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardBody}>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
