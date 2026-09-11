import Link from "next/link";

export default function Home() {
  return (
    <section className="grid min-h-[560px] grid-cols-[minmax(0,1.6fr)_minmax(260px,0.7fr)] items-end gap-[clamp(52px,9vw,120px)] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:items-start">
      <div>
        <p className="mb-5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#b94328]">
          Advanced Web Technologies
        </p>
        <h1 className="max-w-[850px] text-[clamp(2.8rem,7vw,6.4rem)] font-[650] leading-[0.98] tracking-[-0.065em]">
          Find the course that moves your skills forward.
        </h1>
        <p className="mt-[30px] max-w-[640px] text-[clamp(1.06rem,2vw,1.28rem)] leading-[1.7] text-[#627078]">
          Welcome to Course Compass, a focused catalog of the subjects that
          shape modern web applications.
        </p>

        <Link
          className="group mt-[34px] inline-flex items-center gap-3 font-[750] text-[#b94328] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328]"
          href="/courses"
        >
          Explore the catalog
          <span
            className="transition-transform group-hover:translate-x-[5px] group-focus-visible:translate-x-[5px] motion-reduce:transition-none"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      <aside
        className="border-t-2 border-[#172126] pt-[22px] max-[760px]:max-w-[280px]"
        aria-label="Catalog summary"
      >
        <span className="block font-mono text-[clamp(3.5rem,8vw,6.5rem)] font-[650] leading-none text-[#b94328]">
          06
        </span>
        <p className="mt-4 max-w-[250px] leading-[1.55] text-[#627078]">
          courses across frontend, backend, data, security, and AI.
        </p>
      </aside>
    </section>
  );
}
