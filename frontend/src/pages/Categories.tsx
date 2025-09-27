import { useEffect, useState } from "react";

interface Category {
  id: string;
  name: string;
  images: string[];
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentIndex, setCurrentIndex] = useState<{ [key: string]: number }>({});

  // Fetch categories.json
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);

        // Initialize rotation indexes
        const initialIndexes: { [key: string]: number } = {};
        data.forEach((cat: Category) => {
          initialIndexes[cat.id] = 0;
        });
        setCurrentIndex(initialIndexes);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // Rotate images automatically every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndexes: { [key: string]: number } = {};
        categories.forEach((cat) => {
          newIndexes[cat.id] =
            prev[cat.id] !== undefined
              ? (prev[cat.id] + 1) % cat.images.length
              : 0;
        });
        return newIndexes;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition"
        >
          {/* Rotating Image */}
          <img
            src={cat.images[currentIndex[cat.id] || 0]}
            alt={cat.name}
            className="w-full h-48 object-cover transition-all duration-700"
          />

          {/* Name */}
          <div className="p-4 text-center">
            <h2 className="text-lg font-bold">{cat.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
