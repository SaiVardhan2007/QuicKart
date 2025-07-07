import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
function Product() {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_products.find(item => item.id === parseInt(productId))
  return (
    <div className="product-page">
      <Breadcrum Product={product} />
    </div>
  )
}

export default Product
