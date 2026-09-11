"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      className="inline-flex min-h-12 cursor-pointer items-center gap-[9px] rounded-full bg-[#b94328] px-[18px] font-[750] text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#8f2f1a] focus-visible:-translate-y-0.5 focus-visible:bg-[#8f2f1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b94328] motion-reduce:transition-none"
      type="button"
      onClick={() => setLikes((currentLikes) => currentLikes + 1)}
      aria-label={`Like this course. ${likes} likes`}
    >
      <span aria-hidden="true">♥</span>
      <span>{likes}</span>
    </button>
  );
}
