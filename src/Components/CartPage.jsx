import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-20 py-10">

      {/* Header */}
      <div className="flex items-center mb-8 gap-4">
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white border p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-purple-600 font-bold">${item.price}</p>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price + Checkout */}
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            
            {/* Total */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Total Price:</h2>
              <h2 className="text-2xl font-bold text-purple-600">
                ${total.toFixed(2)}
              </h2>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 font-medium text-lg">
              Checkout 💳
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => navigate("/")}
              className="w-full mt-3 border-2 border-purple-500 text-purple-600 py-3 rounded-lg hover:bg-purple-50 font-medium"
            >
              Continue Shopping 🛍️
            </button>

          </div>
        </div>
      )}
    </div>
  );
}