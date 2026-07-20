import styles from "./PreFooterCta.module.css";

export default function PreFooterCta() {
  return (
    <section className={`section ${styles.cta}`}>
      <h2 className={styles.title}>
        {"Your context is your advantage. "}
        <span className="accent">{"Start owning it."}</span>
      </h2>
      <p className={styles.sub}>
        {"Book a demo and we’ll map your engineering estate on a real codebase — yours."}
      </p>
      <div className={styles.actions}>
        <a className="btn btn-primary" href="#">
          {"Book a demo →"}
        </a>
        <a className="btn btn-secondary" href="#">
          {"Read the docs"}
        </a>
      </div>
    </section>
  );
}
