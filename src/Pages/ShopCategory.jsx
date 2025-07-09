import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img src={props.banner} alt="" className="" />
        <div className="shop-category-index">
          <p><span>showing 1-12</span> out of 32 products</p>
          <div className="shop-category-sort">
            Sort by <img src={dropdown_icon} alt="" className="" />
          </div>
        </div>
        <div className="shopCategory-products">
          {all_products.map((item, i) => {
            if(item.category+"s" === props.category) {
              return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>
      </div>
      
    </>
  )
}

export default ShopCategory
  