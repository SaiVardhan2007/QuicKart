import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="" />
    </div>
  )
}

export default ShopCategory
  