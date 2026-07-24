import SectionHeader from "./SectionHeader";
import styles from "./Testimonials.module.css";

const quotes = [
  {
    text: "“Our context was scattered across tools. Potpie brought everything together, sped up debugging and development, and helped our team ship faster.”",
    company: "Flobiz",
    role: "CEO",
    featured: true,
  },
  {
    text: "“Potpie feels like adding two senior engineers to every team. Our workflows improved overnight, and reviews are way more consistent.”",
    company: "Astronomer",
    role: "Senior Software Engineer",
    featured: false,
  },
  {
    text: "“Potpie is clearly focused on solving one of the hardest problems in adopting agentic code generation: making it usable in real organizational settings. The platform simplifies experimentation while acknowledging the realities of large, context-heavy codebases.”",
    company: "Moniepoint",
    role: "VP of Engineering",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Customers"
        index={3}
        total={8}
        title="Trusted inside Fortune 500 engineering teams"
      />
      {/* Real names + headshots requested from client — upgrade attributions when available */}
      <div className={styles.grid}>
        {quotes.map((quote) => (
          <figure
            key={quote.company}
            className={
              quote.featured ? `${styles.card} ${styles.featured}` : styles.card
            }
          >
            <blockquote className={styles.quote}>{quote.text}</blockquote>
            <figcaption className={styles.attribution}>
              <span className="mono-tag">{quote.company}</span>
              <span className={styles.role}>{quote.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
