import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const ProductDetail = () => {
  const { state: item } = useLocation(); // get product data
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 text-sm font-medium"
      >
        ← Back
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-10">

        {/* Left — Image */}
        <div className="md:w-1/2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Right — Details */}
        <div className="md:w-1/2 flex flex-col justify-center">

          {/* Category Badge */}
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit mb-4">
            {item.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {item.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-semibold">{item.rating}</span>
            <span className="text-gray-500 text-sm">({item.reviews} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Experience superior quality with our {item.title}. 
            Featuring the latest technology and premium build quality 
            for the best user experience.
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Premium Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 1 Year Warranty
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Free Shipping
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Easy Returns
              </li>
            </ul>
          </div>

          {/* Price */}
          <h2 className="text-3xl font-bold text-purple-600 mb-6">
            ${item.price}
          </h2>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 font-medium"
            >
              Add to Cart 🛒
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 font-medium"
            >
              View Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;