import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · Course unavailable</p>
      <h1>Course not found.</h1>
      <p>
        The course may have moved, or the address may be incorrect. Return to
        the catalog to choose another subject.
      </p>
      <Link className="back-link" href="/courses">
        ← Back to courses
      </Link>
    </section>
  );
}
