import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
      <div className='offer-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers</p>
        <button>Shop Now</button>
      </div>
      <div className='offer-right'>
        <img src={exclusive_image} alt="Exclusive Offers" className="exclusive-image" />
      </div>
    </div>
  )
}

export default Offers
