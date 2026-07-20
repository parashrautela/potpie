import HeroPress from "./HeroPress";
import styles from "./Hero.module.css";

/* Greyscale text stand-ins until real logo SVGs arrive */
const WORDMARKS = ["Flobiz", "Astronomer", "Moniepoint"];

const MARQUEE_SET = Array.from({ length: 4 }, () => WORDMARKS).flat();

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Announcing our $5M fund raise
        </div>
        <h1 className={styles.title}>
          AI-native SDLC automation{" "}
          <span className={styles.titleLine}>
            for{" "}
            <span className={styles.highlight}>large scale engineering</span>
          </span>
        </h1>
        <p className={styles.sub}>
          Give your team a custom AI harness and engineering context layer for
          your organization to automate debugging, testing, implementation
          planning, root cause analysis, and software delivery workflows.
        </p>
        <div className={styles.ctaRow}>
          <a className="btn btn-primary" href="#">
            {"Book a demo →"}
          </a>
          <a className="btn btn-secondary" href="#">
            Read the docs
          </a>
        </div>
        <HeroPress />
        <div className={styles.trust}>
          <div className={styles.trustLabel}>Trusted by and built for</div>
          <div className={styles.marquee}>
            <div className={styles.track}>
              <div className={styles.group}>
                {MARQUEE_SET.map((name, i) => (
                  <span className={styles.wordmark} key={`a-${i}`}>
                    {name}
                  </span>
                ))}
              </div>
              <div className={styles.group} aria-hidden="true">
                {MARQUEE_SET.map((name, i) => (
                  <span className={styles.wordmark} key={`b-${i}`}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
