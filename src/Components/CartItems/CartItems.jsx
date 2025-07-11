import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
function CartItems() {
    const {all_products, cart, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
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
      {all_products.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div>
              <div className='cartItems-format'>
                <img src={product.image} className='carticon-product-icon' alt='Product' />
                <p className='cartItems-title'>{product.name}</p>
                <p className='cartItems-price'>₹{product.new_price}</p>
                <button className='cartItems-quantity'>{cart[product.id]}</button>
                <p className='cartItems-total'>₹{product.new_price * cart[product.id]}</p>
                <img src={remove_icon} className='cartItems-remove-icon' alt='Remove' onClick={() => removeFromCart(product.id)} />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="CartItems-down">
        <div className='cartItems-total-items'>
          <h1 className='CartItems-title'>Cart Totals</h1>
          <div className='cartItems-total'>
            <div className='cartItems-total-price-value'>
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr/>
            <div className='cartItems-total-price-value'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className='cartItems-total-price-value'>
              <p>Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <button className='cartItems-checkout'>Checkout</button>
          </div>
        </div>
      <div className='cartItems-promoCode'>
        <p>If you have a Promo Code, Enter it here</p>
        <input type='text' placeholder='Enter Promo Code' className='cartItems-promoCode-input' />
        <button className='cartItems-promoCode-button'>Apply</button>
      </div>
    </div>
  </div>
  )
}

export default CartItems
