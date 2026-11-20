import type { Metadata } from "next";
import { gql } from "@/lib/graphql";

export const metadata: Metadata = {
  title: "My courses",
};

type MyCourses = {
  student: {
    name: string;
    enrollments: {
      course: {
        id: string;
        title: string;
        credits: number;
        level: string;
      };
    }[];
  } | null;
};

const MY_COURSES_QUERY = `
  {
    student(id: 2) {
      name
      enrollments {
        course { id title credits level }
      }
    }
  }
`;

export default async function MyCoursesPage() {
  const { student } = await gql<MyCourses>(MY_COURSES_QUERY);
  if (!student) {
    throw new Error("Student 2 was not found");
  }

  return (
    <section className="max-w-[980px]">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/70 px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#b94328] shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-white/5 dark:text-orange-300">
        <span className="size-1.5 rounded-full bg-[#b94328] dark:bg-orange-400" />
        GraphQL view
      </p>
      <h1 className="font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.96] tracking-[-0.065em]">
        {student.name}&apos;s courses
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
        One GraphQL request returns the student and every nested course needed
        for this page.
      </p>

      <ul className="mt-10 grid gap-4">
        {student.enrollments.map(({ course }, index) => (
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
