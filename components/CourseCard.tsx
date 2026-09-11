import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link className="course-card" href={`/courses/${id}`}>
      <div className="course-card-top">
        <span className="course-index">Course</span>
        <span className="course-credits">{credits} credits</span>
      </div>

      <h2>{title}</h2>
      <p className="course-card-description">{description}</p>

      <div className="course-card-footer">
        <span>View course</span>
        <span aria-label={`${likes} likes`}>♥ {likes}</span>
      </div>
    </Link>
  );
}
