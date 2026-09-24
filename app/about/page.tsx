import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      <div className="mb-14 grid grid-cols-[1fr_minmax(240px,0.55fr)] items-end gap-9 max-[760px]:mb-10 max-[760px]:grid-cols-1">
        <div>
          <p className="mb-5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#b94328] dark:text-orange-400">
            About the project
          </p>
          <h1 className="max-w-[850px] text-[clamp(2.7rem,6vw,5.4rem)] font-[650] leading-[0.98] tracking-[-0.065em]">
            A catalog built to learn by doing.
          </h1>
        </div>
      </div>

      <div className="max-w-[760px] text-[1.06rem] leading-[1.75] text-[#627078] dark:text-slate-300">
        <p>
          Course Compass is a semester project that presents a small catalog of
          web technology courses through a clear, route-based interface.
        </p>
        <p className="mt-[22px]">
          It was created for the Advanced Web Technologies course to practice
          the Next.js App Router, Server and Client Components, dynamic routes,
          and TypeScript.
        </p>
      </div>
    </section>
  );
}
