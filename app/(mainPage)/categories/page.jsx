"use client";
import { useRouter } from "next/navigation";
import categories from "./categoryData";

export default function CategoryPage() {
  const router = useRouter();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-[var(--color-main)]">Shop by Category</h1>

      <div className="flex space-x-6 overflow-x-auto pb-4 px-4 justify-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/products/${cat.id}`)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 group-hover:border-[var(--color-main)] transition"
            />
            <p className="text-sm font-medium mt-2 text-gray-700">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
