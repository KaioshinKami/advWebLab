export const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not set: create .env.local");
}

export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json() as Promise<T>;
}
