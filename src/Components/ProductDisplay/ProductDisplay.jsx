import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export default function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productDisplay-img">
          <img className='productDisplay-img-main' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>

        <div className="productDisplay-right-price">
            <div className="productDisplay-right-price-old">₹{product.old_price}</div>
          <div className="productDisplay-right-price-new">₹{product.new_price}</div>
        </div>

        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-size-options">
            <div className="productDisplay-right-size-option">S</div>
            <div className="productDisplay-right-size-option">M</div>
            <div className="productDisplay-right-size-option">L</div>
            <div className="productDisplay-right-size-option">XL</div>
          </div>
        </div> 

        <button onClick={() => addToCart(product.id)} className='productDisplay-right-add-to-cart'>Add to Cart</button>
      </div>
    </div>
  );
}