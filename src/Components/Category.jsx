import React,{useState} from "react";

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
    <section className="px-6 py-10 bg-gray-100">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
        📈 Browse by Category
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
