import type { components } from "@/lib/schema";
import { API_URL, getJson } from "@/lib/api";

export type Course = components["schemas"]["Course"];
export type Enrollment = components["schemas"]["Enrollment"];

export async function getCourses(): Promise<Course[]> {
  return getJson<Course[]>("/courses");
}

export async function getCourse(id: string): Promise<Course | undefined> {
  const res = await fetch(`${API_URL}/courses/${id}`, { cache: "no-store" });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
