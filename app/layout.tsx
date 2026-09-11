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
      <body className="min-h-full bg-[#f6f1e8] text-[#172126] [font-family:Arial,Helvetica,sans-serif]">
        <header className="border-b border-[#d8d1c5] bg-[#f8f4ec]">
          <nav
            className="mx-auto flex min-h-[76px] w-[min(1120px,calc(100%-40px))] items-center justify-between gap-6 max-[760px]:min-h-[68px]"
            aria-label="Main navigation"
          >
            <Link
              className="inline-flex items-center gap-3 font-[750] tracking-[-0.02em] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328]"
              href="/"
            >
              <span
                className="grid size-[38px] place-items-center rounded-full bg-[#234e52] font-mono text-xs font-bold tracking-[0.08em] text-white"
                aria-hidden="true"
              >
                CC
              </span>
              <span className="max-[760px]:hidden">Course Compass</span>
            </Link>

            <div className="flex items-center gap-[clamp(16px,4vw,34px)] text-[0.92rem] font-[650] text-[#627078]">
              <Link
                className="py-2.5 transition-colors hover:text-[#b94328] focus-visible:rounded-sm focus-visible:text-[#b94328] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] motion-reduce:transition-none"
                href="/"
              >
                Home
              </Link>
              <Link
                className="py-2.5 transition-colors hover:text-[#b94328] focus-visible:rounded-sm focus-visible:text-[#b94328] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] motion-reduce:transition-none"
                href="/courses"
              >
                Courses
              </Link>
              <Link
                className="py-2.5 transition-colors hover:text-[#b94328] focus-visible:rounded-sm focus-visible:text-[#b94328] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] motion-reduce:transition-none"
                href="/about"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto min-h-[calc(100vh-154px)] w-[min(1120px,calc(100%-40px))] py-[clamp(52px,8vw,96px)]">
          {children}
        </main>

        <footer className="mx-auto flex min-h-[78px] w-[min(1120px,calc(100%-40px))] items-center border-t border-[#d8d1c5] text-[0.82rem] text-[#627078]">
          <p>Advanced Web Technologies · Semester course catalog</p>
        </footer>
      </body>
    </html>
  );
}
