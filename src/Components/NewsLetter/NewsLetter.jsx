import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclussive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='text' placeholder='Enter your email' ></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
