import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category = "mens" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category = "womens" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner}  category = "kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App
