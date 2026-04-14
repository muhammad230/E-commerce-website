import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md">

        {/* Success Icon */}
        <div className="text-6xl mb-4">✅</div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Order Placed!
          </span>
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been placed successfully.
          You will receive a confirmation email shortly.
        </p>

        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-bold hover:opacity-90"
        >
          Continue Shopping 🛍️
        </button>

      </div>
    </div>
  );
};

export default ThankYouPage;