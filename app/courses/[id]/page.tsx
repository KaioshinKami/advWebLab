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
    <article className="course-detail">
      <p className="eyebrow">
        {course.isElective ? "Elective course" : "Core course"}
      </p>
      <h1>{course.title}</h1>
      <p className="course-description">{course.description}</p>

      <div className="course-meta">
        <div className="course-meta-item">
          <span className="detail-label">Credits</span>
          <strong>{course.credits}</strong>
        </div>
        <LikeButton initialLikes={course.likes} />
      </div>
    </article>
  );
}
