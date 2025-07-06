import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import { data } from 'react-router-dom'
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
      <h2>Popular in Women</h2>
      <hr/>
        <div className='popular-items'>
            {data_product.map((item,i) =>{
                return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular
