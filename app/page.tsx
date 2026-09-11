import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Advanced Web Technologies</p>
        <h1>Find the course that moves your skills forward.</h1>
        <p className="hero-text">
          Welcome to Course Compass, a focused catalog of the subjects that
          shape modern web applications.
        </p>

        <Link className="primary-link" href="/courses">
          Explore the catalog
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <aside className="hero-note" aria-label="Catalog summary">
        <span className="hero-note-number">06</span>
        <p>courses across frontend, backend, data, security, and AI.</p>
      </aside>
    </section>
  );
}
