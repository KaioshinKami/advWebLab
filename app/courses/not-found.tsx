import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="max-w-[680px] pt-[8vh]">
      <p className="mb-5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#b94328]">
        404 · Course unavailable
      </p>
      <h1 className="text-[clamp(2.8rem,7vw,5.6rem)] font-[650] leading-none tracking-[-0.055em]">
        Course not found.
      </h1>
      <p className="mt-6 text-[1.1rem] leading-[1.65] text-[#627078]">
        The course may have moved, or the address may be incorrect. Return to
        the catalog to choose another subject.
      </p>
      <Link
        className="mt-[34px] inline-flex items-center gap-3 font-[750] text-[#b94328] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328]"
        href="/courses"
      >
        ← Back to courses
      </Link>
    </section>
  );
}
