import SectionHeader from "./SectionHeader";
import EngagementSteps from "./EngagementSteps";
import styles from "./HowItWorks.module.css";

const interfaces = [
  "IDEs / VS Code",
  "GitHub Copilot",
  "Claude Code",
  "Internal tools & dashboards",
];

const agents = [
  "Debugging agent",
  "Impact analysis agent",
  "Code generation agent",
  "QA / testing agent",
];

const harness = [
  "Orchestration & task routing",
  "Context selection & compression",
  "Tool execution & sandboxing",
  "Memory & state management",
  "Feedback loops & validation",
  "Observability & guardrails",
];

const sources = [
  {
    name: "Codebase",
    items: "Services · APIs · Dependencies · Architecture · Commits",
  },
  {
    name: "Knowledge base",
    items: "Docs · Wikis · Standards · SOPs · Design docs",
  },
  {
    name: "Jira / tickets",
    items: "Bugs · Features · Tasks · Requirements · History",
  },
];

const graphs = [
  {
    name: "Code graph",
    items: "AST · Call graph · Data flow · Dependencies",
  },
  {
    name: "Knowledge graph",
    items: "Entities · Relations · Semantics",
  },
  {
    name: "Ontology layer",
    items: "Domain concepts · Mappings · Relationships",
  },
];

const models = ["Claude", "OpenAI / GPT", "Other LLMs", "Future models"];

export default function HowItWorks() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="How it works"
        index={4}
        total={8}
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
      <div className={styles.diagram}>
        {/* Band 1 — user interfaces */}
        <div className={styles.band}>
          <div className={styles.rail}>
            <div className={styles.railLabel}>User interfaces</div>
          </div>
          <div className={styles.bandBody}>
            <div className={styles.chipRow}>
              {interfaces.map((name) => (
                <div className={styles.chip} key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.flow} aria-hidden="true" />

        {/* Band 2 — agent layer */}
        <div className={styles.band}>
          <div className={styles.rail}>
            <div className={styles.railLabel}>Agent layer</div>
            <div className={styles.railDesc}>
              Specialized agents execute tasks
            </div>
          </div>
          <div className={styles.bandBody}>
            <div className={styles.orchestrator}>
              <div className={styles.orchestratorName}>Orchestrator agent</div>
              <div className={styles.orchestratorDesc}>
                Plans, delegates, and monitors execution
              </div>
            </div>
            <div className={styles.treeStem} aria-hidden="true" />
            <div className={styles.treeBar} aria-hidden="true" />
            <div className={styles.agentRow}>
              {agents.map((name) => (
                <div className={styles.agentCell} key={name}>
                  <div className={styles.chip}>{name}</div>
                </div>
              ))}
              <div className={styles.agentCell}>
                <div className={`${styles.chip} ${styles.chipGhost}`}>
                  {"More agents…"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flow} aria-hidden="true" />

        {/* Band 3 — harness layer (Potpie-owned, lime) */}
        <div className={`${styles.band} ${styles.bandOwned}`}>
          <div className={styles.rail}>
            <div className={styles.railLabel}>Harness layer</div>
            <div className={styles.railDesc}>
              The control plane that makes agents reliable
            </div>
          </div>
          <div className={styles.bandBody}>
            <div className={styles.harnessGrid}>
              {harness.map((name) => (
                <div className={styles.chip} key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.flow} aria-hidden="true" />

        {/* Band 4 — context layer (Potpie-owned, lime) */}
        <div className={`${styles.band} ${styles.bandOwned}`}>
          <div className={styles.rail}>
            <div className={styles.railLabel}>Context layer</div>
            <div className={styles.railDesc}>
              Enterprise context that powers intelligence
            </div>
          </div>
          <div className={styles.bandBody}>
            <div className={styles.cardRow}>
              {sources.map((card) => (
                <div className={styles.card} key={card.name}>
                  <div className={styles.cardName}>{card.name}</div>
                  <div className={styles.cardItems}>{card.items}</div>
                </div>
              ))}
            </div>
            <div className={styles.innerFlow} aria-hidden="true" />
            <div className={styles.cardRow}>
              {graphs.map((card) => (
                <div
                  className={`${styles.card} ${styles.cardGraph}`}
                  key={card.name}
                >
                  <div className={styles.cardName}>{card.name}</div>
                  <div className={styles.cardItems}>{card.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.flow} aria-hidden="true" />

        {/* Band 5 — model layer */}
        <div className={styles.band}>
          <div className={styles.rail}>
            <div className={styles.railLabel}>Model layer</div>
            <div className={styles.railDesc}>Interchangeable intelligence</div>
          </div>
          <div className={styles.bandBody}>
            <div className={styles.chipRow}>
              {models.map((name) => (
                <div className={styles.chip} key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.engagement}>
        <div className={`mono-tag ${styles.partLabel}`}>{"The engagement"}</div>
        <EngagementSteps />

        <p className={styles.callout}>
          {"A traditional vendor bills more as it deploys more people. We bill for platform leverage — the engineers-per-outcome number goes down over time."}
        </p>
      </div>
    </section>
  );
}
