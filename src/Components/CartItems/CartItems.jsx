import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
function CartItems() {
    const {all_products, addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart-items'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>   
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      <div>
        <div className='cartItems-format'>
            
        </div>
      </div>
    </div>
  )
}

export default CartItems
