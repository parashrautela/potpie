import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          All your engineering. <span className="accent">One brain.</span>
        </h1>
        <p className={styles.sub}>
          Potpie unifies your engineering context into a living graph your
          agents reason over. It understands relationships, ownership,
          dependencies — and the decisions behind them.
        </p>
        <div className={styles.ctaRow}>
          <a className="btn btn-primary" href="#">
            {"Book a demo →"}
          </a>
          <a className="btn btn-secondary" href="#">
            Read the docs
          </a>
        </div>
        <div className={styles.askBox} aria-hidden="true">
          <span className={styles.askText}>Ask your codebase...</span>
          <span className={styles.askButton}>{"→"}</span>
        </div>
        <div className={styles.chipRow}>
          <span className={styles.chip}>Who owns each dependency?</span>
          <span className={styles.chip}>What compliance controls apply?</span>
          <span className={styles.chip}>
            Why was the timeout decreased from 30s to 5s?
          </span>
        </div>
      </div>
    </section>
  );
}
