import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section>
      <div className="mb-14 grid grid-cols-[1fr_minmax(240px,0.55fr)] items-end gap-9 max-[760px]:mb-10 max-[760px]:grid-cols-1">
        <div>
          <p className="mb-5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#b94328] dark:text-orange-400">
            Course catalog
          </p>
          <h1 className="max-w-[850px] text-[clamp(2.7rem,6vw,5.4rem)] font-[650] leading-[0.98] tracking-[-0.065em]">
            Build a complete web toolkit.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
