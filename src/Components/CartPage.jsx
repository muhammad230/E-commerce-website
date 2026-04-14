import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  // Initialize quantities
  const getQuantity = (itemId) => quantities[itemId] || 1;

  const updateQuantity = (itemId, amount) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + amount)
    }));
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * getQuantity(item.id), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-pink-50 px-6 md:px-20 py-10">

      {/* Header */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 text-sm font-medium"
      >
        ← Continue Shopping
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-purple-600">
        ✨ Shopping Cart
      </h1>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex items-center justify-center min-h-[500px]">
          <div className="bg-white border bg-gray-200 rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
              <FiShoppingCart className="text-5xl text-gray-400 animate-bounce" />
            </div>
            <p className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
                Your cart is{" "}
              </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                empty!
              </span>
            </p>
            <p className="text-gray-500 mb-7 text-center">Add some products to get started</p>
            {/* Continue Shopping Button */}
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg hover:opacity-90 font-medium transition duration-300 w-full"
            >
              Continue Shopping 🛍️
            </button>
          </div>
        </div>

      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            
            {/* Cart Items Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Cart Items <span className="text-purple-600">({cart.length})</span>
              </h2>
              <button onClick={clearCart} className="text-red-500 hover:text-red-700 font-medium">
                Clear Cart
              </button>
            </div>

            {/* Cart Items List */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-4 rounded-xl mb-4 flex items-center justify-between hover:bg-gray-100 transition"
              >
                {/* Product Image & Info */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-purple-600 font-bold text-lg">${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mr-4">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-purple-600 hover:text-purple-700 text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {getQuantity(item.id)}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-purple-600 hover:text-purple-700 text-xl font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Price & Remove */}
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    ${(item.price * getQuantity(item.id)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-gray-600 text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 shadow-lg h-fit text-white">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

            {/* Summary Items */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="border-white opacity-30" />
              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button onClick={() => navigate("/checkout")} className="w-full bg-white text-purple-600 py-3 rounded-xl hover:bg-gray-100 font-bold text-lg mb-3 transition">
              Proceed to Checkout
            </button>

            {/* Continue Shopping Button */}
            <button
              onClick={() => navigate("/")}
              className="w-full border-2 border-white text-white py-3 rounded-xl hover:bg-white hover:text-purple-600 hover:border-purple-600 font-bold text-lg transition duration-300"
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}
    </div>
  );
}