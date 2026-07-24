import SectionHeader from "./SectionHeader";
import styles from "./Blogs.module.css";

/* Placeholder posts — wire to CMS; replace with real titles, dates, links */
const posts = [
  {
    date: "Jun 24, 2026 · 6 min read",
    title: "Context is the new code",
    excerpt:
      "Why the durable asset in AI-era engineering is not the model you use, but the context layer you own.",
  },
  {
    date: "Jun 10, 2026 · 8 min read",
    title: "Why AI agents fail without architecture context",
    excerpt:
      "Agents that pass tests and break production share one root cause: they cannot see the system they are changing.",
  },
  {
    date: "May 28, 2026 · 5 min read",
    title: "Mapping 40M lines of code into one graph",
    excerpt:
      "What we learned building context graphs inside Fortune 500 engineering orgs.",
  },
];

export default function Blogs() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="From the team"
        index={8}
        total={8}
        title="Latest from Potpie"
      />
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.title} className={styles.card}>
            <p className={styles.date}>{post.date}</p>
            <h4 className={styles.title}>{post.title}</h4>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </article>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <a className="btn btn-secondary" href="#">
          {"View all posts →"}
        </a>
      </div>
    </section>
  );
}
