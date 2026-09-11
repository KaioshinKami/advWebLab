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
      <div className="page-heading">
        <div>
          <p className="eyebrow">Course catalog</p>
          <h1>Build a complete web toolkit.</h1>
        </div>
        <p>
          Browse six focused courses that move from interface fundamentals to
          secure backends, data, and applied AI.
        </p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </section>
  );
}
