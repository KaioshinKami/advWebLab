import { ElectiveFilter } from "@/components/ElectiveFilter";

export default function FilterPage() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Course filter</h1>
      <ElectiveFilter />
    </main>
  );
}
