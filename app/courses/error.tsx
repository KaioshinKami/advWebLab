"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-6">
      <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
      <p className="mb-4">
        Could not load the data. The backend may not be running.
      </p>
      <button
        onClick={() => retry()}
        className="rounded-md border border-slate-300 px-3 py-1"
      >
        Try again
      </button>
    </main>
  );
}
