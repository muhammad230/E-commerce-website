import React, { useState } from "react";

const categories = [
  "All",
  "Audio",
  "Wearables",
  "Computers",
  "Photography",
  "Mobile",
  "Tablets",
  "Gaming",
];

const Category = () => {
  const [active, setActive] = useState("All");
  return (
    <section className="px-22 py-12 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📈
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Browse by Category
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
              ${
                active === item
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Category;
