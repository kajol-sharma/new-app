"use client";
import categories from "../../categories/categoryData";

export default function ProductPage({ params }) {
    const categoryId = parseInt(params.id);
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
        return <h2 className="text-center mt-10 text-red-500">Category not found</h2>;
    }

    return (
        <main className="p-8">
            <button
                onClick={() => window.history.back()}
                className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
                ← Back
            </button>

            <h1 className="text-2xl font-bold text-center mb-8 text-[var(--color-main)]">{category.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.products.map((p) => (
                    <div
                        key={p.id}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-green-600 font-medium mt-1">₹{p.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
