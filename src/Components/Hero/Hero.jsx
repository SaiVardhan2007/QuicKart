import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Hero Products</h1>
        <div>
            <div className='hand-icon'>
              <p>New</p>
            </div>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        <div className="hero-btns">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
        </div>

      </div>
      <div className="hero-right">
         <img src ={hero_img}   alt="Hero" className='hero-img' />
      </div>
    </div>
  )
}
