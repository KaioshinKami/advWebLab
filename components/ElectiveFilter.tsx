"use client";

import { useState } from "react";
import useSWR from "swr";
import type { Course } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

async function fetcher(url: string): Promise<Course[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function ElectiveFilter() {
  const [onlyElective, setOnlyElective] = useState(false);
  const query = onlyElective ? "?is_elective=true" : "";
  const { data, error, isLoading } = useSWR(
    `${API}/courses${query}`,
    fetcher,
  );

  return (
    <div>
      <label className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={onlyElective}
          onChange={(e) => setOnlyElective(e.target.checked)}
        />
        Electives only
      </label>
      {error && <p>Failed to load courses</p>}
      {isLoading && <p>Loading…</p>}
      {data && (
        <ul className="list-disc pl-6">
          {data.map((course) => (
            <li key={course.id}>
              {course.title} — {course.credits} cr.
              {course.isElective && " · elective"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
