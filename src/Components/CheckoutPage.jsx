import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = () => {
    if (
      !form.firstName ||
      !form.email ||
      !form.address ||
      !form.cardNumber
    ) {
      alert("Please fill all required fields!");
      return;
    }
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-6 md:px-20 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-6 font-medium"
      >
        ← Back to Cart
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span className="text-purple-500">✦</span>
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Checkout
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Left — Form */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              👤 Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              📦 Shipping Address
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main Street"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Karachi"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Pakistan"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    placeholder="75000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              💳 Payment Information
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Name on Card *
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={form.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Card Number *
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    CVV *
                  </label>
                  <input
                    type="password"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="***"
                    maxLength={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right — Order Summary */}
        <div className="w-full md:w-[350px] h-fit">

          {/* Order Items */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              🛒 Order Items ({cart.length})
            </h2>

            {cart.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-purple-600 font-bold text-sm">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-gradient-to-b from-purple-600 to-pink-500 rounded-2xl shadow-sm p-6 text-white">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span className="text-white/80">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-white/80">Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-white/80">Tax (8%)</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>

            <div className="border-t border-white/30 mb-4"></div>

            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Place Order ✅
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;