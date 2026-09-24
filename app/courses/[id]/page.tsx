import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = await getCourse(id);

  return {
    title: course?.title ?? "Course not found",
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-[900px]">
      <p className="mb-5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#b94328] dark:text-orange-400">
        {course.isElective ? "Elective course" : "Core course"}
      </p>
      <h1 className="mt-[22px] max-w-[850px] text-[clamp(2.7rem,6vw,5.4rem)] font-[650] leading-[0.98] tracking-[-0.065em]">
        {course.title}
      </h1>
      <p className="mt-[30px] max-w-[720px] text-[1.06rem] leading-[1.75] text-[#627078] dark:text-slate-300">
        {course.description}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-start gap-3">
        <div className="inline-flex min-h-12 items-center gap-[9px] rounded-full border border-[#d8d1c5] bg-[#fffdf8] px-[18px] dark:border-slate-700 dark:bg-slate-900">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#627078] dark:text-slate-300">
            Credits
          </span>
          <strong>{course.credits}</strong>
        </div>
        <LikeButton initialLikes={course.likes} />
      </div>
    </article>
  );
}
