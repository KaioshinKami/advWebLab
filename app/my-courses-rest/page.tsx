import type { Metadata } from "next";
import { getJson } from "@/lib/api";

export const metadata: Metadata = {
  title: "My courses (REST)",
};

type Student = {
  id: number;
  name: string;
  email: string;
};

type Enrollment = {
  id: number;
  courseId: string;
};

type Course = {
  id: string;
  title: string;
  credits: number;
  level: string;
};

export default async function MyCoursesRestPage() {
  const [student, enrollments] = await Promise.all([
    getJson<Student>("/students/2"),
    getJson<Enrollment[]>("/students/2/enrollments"),
  ]);
  const courses = await Promise.all(
    enrollments.map((enrollment) =>
      getJson<Course>(`/courses/${enrollment.courseId}`),
    ),
  );

  return (
    <section className="max-w-[980px]">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/20 dark:bg-white/5 dark:text-blue-300">
        <span className="size-1.5 rounded-full bg-blue-700 dark:bg-blue-400" />
        REST view
      </p>
      <h1 className="font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.96] tracking-[-0.065em]">
        {student.name}&apos;s courses
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
        REST loads the student and enrollments first, then requests each course
        in a second round.
      </p>

      <ul className="mt-10 grid gap-4">
        {courses.map((course, index) => (
          <li
            className="flex items-center gap-5 rounded-[1.5rem] border border-white/80 bg-white/70 p-5 shadow-[0_16px_45px_rgb(15_23_42/0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
            key={course.id}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-slate-950 font-mono text-sm font-bold text-white dark:bg-white dark:text-slate-950">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-xl font-bold tracking-[-0.025em]">
                {course.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {course.level} · {course.credits} credits
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
