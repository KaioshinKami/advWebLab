import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">About the project</p>
          <h1>A catalog built to learn by doing.</h1>
        </div>
      </div>

      <div className="about-copy">
        <p>
          Course Compass is a semester project that presents a small catalog of
          web technology courses through a clear, route-based interface.
        </p>
        <p>
          It was created for the Advanced Web Technologies course to practice
          the Next.js App Router, Server and Client Components, dynamic routes,
          and TypeScript.
        </p>
      </div>
    </section>
  );
}
