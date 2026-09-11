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
    <Link
      className="flex min-h-[260px] flex-col rounded-[18px] border border-[#d8d1c5] bg-[#fffdf8] p-[clamp(24px,4vw,36px)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#c3725e] hover:shadow-xl focus-visible:-translate-y-1 focus-visible:border-[#c3725e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] motion-reduce:transition-none max-[760px]:min-h-[235px]"
      href={`/courses/${id}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#627078]">
          Course
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#627078]">
          {credits} credits
        </span>
      </div>

      <h2 className="mt-8 text-[clamp(1.35rem,3vw,1.8rem)] font-bold leading-[1.2] tracking-[-0.035em]">
        {title}
      </h2>
      <p className="mt-3.5 leading-[1.6] text-[#627078]">{description}</p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-[26px] text-[0.9rem] font-bold">
        <span>View course</span>
        <span className="text-[#b94328]" aria-label={`${likes} likes`}>
          ♥ {likes}
        </span>
      </div>
    </Link>
  );
}
