import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 z-50 ">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-purple-600 text-xl font-bold">✨</span>
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
            Tech
          </span>
          <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Store
          </span>
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li className="hover:text-purple-600 cursor-pointer hover:underline">Products</li>
        <li className="hover:text-purple-600 cursor-pointer hover:underline">Categories</li>
        <li className="hover:text-purple-600 cursor-pointer hover:underline">Deals</li>
        <li className="hover:text-purple-600 cursor-pointer hover:underline">About</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 text-2xl">
        
        {/* Search Icon */}
        <FiSearch className="text-gray-600 cursor-pointer hover:text-purple-600" />

        {/* Cart Icon with Badge */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <FiShoppingCart className="text-gray-600 hover:text-purple-600" />
          
          {/* Red badge showing number of items */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;