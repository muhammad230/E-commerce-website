import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
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

      {/* links  */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer hover:underline">Products</li>
          <li className="hover:text-purple-600 cursor-pointer hover:underline">Categories</li>
          <li className="hover:text-purple-600 cursor-pointer hover:underline">Deals</li>
          <li className="hover:text-purple-600 cursor-pointer hover:underline">About</li>
        </ul>

        {/* icons */}
        <div className="flex items-center gap-4 text-2xl">
          <FiSearch className="text-gray-600 cursor-pointer hover:text-purple-600" />
          <FiShoppingCart className="text-gray-600 cursor-pointer hover:text-purple-600" />
        </div>
    </nav>
  );
};

export default Navbar;
