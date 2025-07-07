import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow.png'
function Breadcrum(props) {
    const { Product } = props
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" className="" /> Shop <img src={arrow_icon} alt="" className="" /> {Product.category} <img src={arrow_icon} alt="" className="" /> {Product.name}
    </div>
  )
}

export default Breadcrum
