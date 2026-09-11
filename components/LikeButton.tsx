"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      className="like-button"
      type="button"
      onClick={() => setLikes((currentLikes) => currentLikes + 1)}
      aria-label={`Like this course. ${likes} likes`}
    >
      <span aria-hidden="true">♥</span>
      <span>{likes}</span>
    </button>
  );
}
