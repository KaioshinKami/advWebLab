import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Course Compass",
    template: "%s | Course Compass",
  },
  description:
    "Explore the courses in the Advanced Web Technologies semester project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <header className="site-header">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">
                CC
              </span>
              <span>Course Compass</span>
            </Link>

            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>

        <main className="page-shell">{children}</main>

        <footer className="site-footer">
          <p>Advanced Web Technologies · Semester course catalog</p>
        </footer>
      </body>
    </html>
  );
}
