import Link from "next/link";

export default function Home() {
  return (
    <section className="grid min-h-[560px] grid-cols-[minmax(0,1.6fr)_minmax(260px,0.7fr)] items-end gap-[clamp(52px,9vw,120px)] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:items-start">
      <div>
        <h1 className="max-w-[850px] text-[clamp(2.8rem,7vw,6.4rem)] font-[650] leading-[0.98] tracking-[-0.065em]">
          Find the course that moves your skills forward.
        </h1>
        <p className="mt-[30px] max-w-[640px] text-[clamp(1.06rem,2vw,1.28rem)] leading-[1.7] text-[#627078] dark:text-slate-300">
          Welcome to Course Compass, a focused catalog of the subjects that
          shape modern web applications.
        </p>

        <Link
          className="group mt-[34px] inline-flex items-center gap-3 font-[750] text-[#b94328] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] dark:text-orange-400"
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
    </section>
  );
}
