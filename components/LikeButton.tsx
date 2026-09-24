"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      className="min-h-12 cursor-pointer rounded-full px-[18px] font-bold"
      variant="course"
      size="lg"
      type="button"
      onClick={() => setLikes((currentLikes) => currentLikes + 1)}
      aria-label={`Like this course. ${likes} likes`}
    >
      <span aria-hidden="true">♥</span>
      <span>{likes}</span>
    </Button>
  );
}
