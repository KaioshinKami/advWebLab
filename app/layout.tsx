import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lab1",
    template: "%s | Course Compass",
  },
  description:
    "Explore the courses in the Advanced Web Technologies semester project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <nav
            className="mx-auto flex w-full max-w-6xl gap-4 px-6 py-4"
            aria-label="Main navigation"
          >
            <Link
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-300"
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-300"
              href="/about"
            >
              About
            </Link>
          </nav>
        </header>

        <main className="mx-auto min-h-[calc(100vh-146px)] w-full max-w-6xl px-6 py-[clamp(48px,8vw,88px)]">
          {children}
        </main>

        <footer className="mx-auto flex min-h-[74px] w-full max-w-6xl items-center border-t border-slate-200 px-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>Advanced Web Technologies · Semester course catalog</p>
        </footer>
      </body>
    </html>
  );
}
