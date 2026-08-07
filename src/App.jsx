import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import { CartProvider } from './CartContext'

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
