"use client";
import { useRouter } from "next/navigation";
import categories from "./categoryData";

export default function CategoryPage() {
  const router = useRouter();

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--color-main)]">
        Shop by Category
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/products/${cat.id}`)}
            className="flex flex-col items-center cursor-pointer group w-1/3 sm:w-24 md:w-28"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-200 group-hover:border-[var(--color-main)] transition-all duration-200"
            />
            <p className="text-xs sm:text-sm font-medium mt-2 text-gray-700 text-center truncate w-full">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
