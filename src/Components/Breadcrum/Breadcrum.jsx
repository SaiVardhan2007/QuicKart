import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
function Breadcrum(props) {
    const { Product } = props
    if (!Product) {
    return <div className="breadcrum">Loading...</div>;
  }
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt=""  /> Shop <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {Product.name}
    </div>
  );
}

export default Breadcrum
