import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

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

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    category: "Audio",
    price: 200.99,
    rating: 4.6,
    reviews: 342,
    image: "images/img.pods.jfif",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    category: "Wearables",
    price: 230.99,
    rating: 4.6,
    reviews: 287,
    image: "images/watch.jfif",
  },
  {
    id: 3,
    title: "Ultra-Thin Laptop",
    category: "Computers",
    price: 1100.99,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 4,
    title: "Mirrorless Camera",
    category: "Photography",
    price: 867.99,
    rating: 4.4,
    reviews: 198,
    image: "images/camera.jfif",
  },
  {
    id: 5,
    title: "Flagship Smartphone",
    category: "Mobile",
    price: 640.99,
    rating: 4.5,
    reviews: 321,
    image: "images/phone.jfif",
  },
  {
    id: 6,
    title: "High-Performance Tablet",
    category: "Tablets",
    price: 350.99,
    rating: 4.7,
    reviews: 256,
    image: "images/tablet.jfif",
  },
  {
    id: 7,
    title: "Next-Gen Gaming Console",
    category: "Gaming",
    price: 234.99,
    rating: 4.5,
    reviews: 412,
    image: "images/gaming.webp",
  },
  {
    id: 8,
    title: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 149.99,
    rating: 4.6,
    reviews: 421,
    image: "images/speaker.jfif",
  },
];

const Category = () => {
  const [active, setActive] = useState("All");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  // Click on button → Add to Cart
  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
  };

  // Click on image → Go to Product Detail Page
  const handleImageClick = (item) => {
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-gray-100">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📈
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Browse by Category
        </span>
      </h2>

      {/* Category Buttons */}
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image — Click to go to Product Detail Page */}
            <div className="relative">
              <img
                onClick={() => handleImageClick(item)}
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                In Stock
              </span>
            </div>

            {/* Content */}
            <div className="p-4">

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="text-yellow-400">★★★★★</span>
                <span>
                  {item.rating} ({item.reviews})
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>

              {/* Category */}
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                {item.category}
              </span>

              {/* Price + Add to Cart Button */}
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-xl font-bold text-purple-600">
                  ${item.price}
                </h3>

                {/* Click button → Add to Cart */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Add to Cart
                </button>
              </div>

              {/* View Cart Button */}
              <button
                onClick={() => navigate("/cart")}
                className="w-full mt-3 border-2 border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
              >
                View Cart 🛒
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Category;