
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import { CartProvider } from './CartContext'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import CartPage from "./Components/CartPage";
import ProductDetail from "./Components/ProductDetail"; // ← ADD THIS
import CheckoutPage from "./Components/CheckoutPage";
import ThankYouPage from "./Components/ThankYouPage";

function App() {
  return (
    <CartProvider>

      <div>
        <Navbar />
        <Hero/>
        <Category/>
      </div>
    </CartProvider>
  )
}

export default App

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />{" "}
          {/* ← ADD THIS */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;