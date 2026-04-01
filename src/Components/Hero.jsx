import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[linear-gradient(to_right,#a855f7,#f70968,#3b82f6)] flex flex-col items-center justify-center text-white px-6 text-center">
      <div className="mb-6">
        <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
          ✨ NEW ARRIVALS ✨
        </span>
      </div>

       <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-yellow-200 to-pink-300 bg-clip-text text-transparent">
          TechStore
        </span>
      </h1> 

      <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
        Discover the latest tech products at amazing prices
      </p>

       <div className="w-full max-w-xl bg-white/20 backdrop-blur-md rounded-xl flex items-center px-4 py-3 mb-10">
        <FiSearch className="text-white/70 text-xl mr-3" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-white w-full placeholder-white/60"
        />
      </div>

       <div className="flex flex-wrap justify-center gap-10 text-center">
        
        <div>
          <h2 className="text-3xl font-bold">1000+</h2>
          <p className="text-white/70">Products</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-white/70">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.9★</h2>
          <p className="text-white/70">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
