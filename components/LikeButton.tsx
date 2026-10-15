"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

type LikeButtonProps = {
  courseId: string;
  initialLikes: number;
};

export default function LikeButton({ courseId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [failed, setFailed] = useState(false);

  async function handleClick() {
    setFailed(false);
    try {
      const res = await fetch(`${API}/courses/${courseId}/like`, {
        method: "POST",
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const course: Course = await res.json();
      setLikes(course.likes);
    } catch {
      setFailed(true);
    }
  }

  return (
    <div>
      <Button
        className="min-h-12 cursor-pointer rounded-full px-[18px] font-bold"
        variant="course"
        size="lg"
        type="button"
        onClick={handleClick}
        aria-label={`Like this course. ${likes} likes`}
      >
        <span aria-hidden="true">♥</span>
        <span>{likes}</span>
      </Button>
      {failed && (
        <p className="mt-2 text-sm text-red-600">Failed to like the course</p>
      )}
    </div>
  );
}
