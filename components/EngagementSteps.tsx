"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./EngagementSteps.module.css";

const steps = [
  {
    num: "01",
    name: "Embed",
    text: "Our engineers work alongside your team on real delivery — understanding your systems, architecture, and workflows.",
    involvement: 90,
  },
  {
    num: "02",
    name: "Unify",
    text: "The context graph fills in. Your code, tickets, docs, and decisions become a unified, traversable graph inside your environment.",
    involvement: 75,
  },
  {
    num: "03",
    name: "Prove",
    text: "Agents start doing the work: spec generation, implementation, debugging, testing, impact analysis. All grounded in context from stages 1-2.",
    involvement: 55,
  },
  {
    num: "04",
    name: "Replicate",
    text: "Workflows expand across teams. The context graph compounds. Engineers per unit of output goes down.",
    involvement: 35,
  },
  {
    num: "05",
    name: "Transform",
    text: "The practice is yours. The context is yours. The intelligence layer is yours. Potpie’s involvement decreases as your autonomy increases.",
    involvement: 15,
  },
];

export default function EngagementSteps() {
  const listRef = useRef<HTMLDivElement>(null);
  /* armed = JS is alive and observers are registered. Until then the section
     renders fully visible (fail-open) so a hydration/JS failure never blanks it. */
  const [armed, setArmed] = useState(false);
  const [visited, setVisited] = useState<boolean[]>(() =>
    Array(steps.length).fill(false),
  );
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;
    const rows = Array.from(list.children);
    setArmed(true);

    /* Reveal + fill bars the first time a row scrolls into view */
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = rows.indexOf(entry.target);
            setVisited((v) => v.map((x, k) => (k === i ? true : x)));
            reveal.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );

    /* Spotlight the row crossing the middle band of the viewport */
    const spotlight = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const i = rows.indexOf(entry.target);
          if (entry.isIntersecting) {
            setActive(i);
          } else {
            setActive((a) => (a === i ? -1 : a));
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    rows.forEach((row) => {
      reveal.observe(row);
      spotlight.observe(row);
    });

    return () => {
      reveal.disconnect();
      spotlight.disconnect();
    };
  }, []);

  return (
    <div ref={listRef} className={styles.stepRows} data-armed={armed}>
      {steps.map((step, i) => (
        <div
          key={step.num}
          className={[
            styles.stepRow,
            armed && !visited[i] ? styles.pending : "",
            active === i ? styles.active : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={styles.stepNum} aria-hidden="true">
            {step.num}
          </div>
          <div className={styles.stepMain}>
            <div className={styles.stepName}>{step.name}</div>
            <p className={styles.stepText}>{step.text}</p>
          </div>
          <div className={styles.meter}>
            <div className={styles.meterRow}>
              <div className={styles.meterLabel}>Potpie involvement</div>
              <div className={styles.meterTrack}>
                <div
                  className={styles.meterFillDark}
                  style={{
                    width:
                      !armed || visited[i] ? `${step.involvement}%` : 0,
                  }}
                />
              </div>
            </div>
            <div className={styles.meterRow}>
              <div className={styles.meterLabel}>Customer autonomy</div>
              <div className={styles.meterTrack}>
                <div
                  className={styles.meterFillLime}
                  style={{
                    width:
                      !armed || visited[i] ? `${100 - step.involvement}%` : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
