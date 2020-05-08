import React,{ useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const ShopTheProduct = ({
  onSizeChange,
  onFrameChange,
  onAddToCart,
  sizes,
  frames,
  selectedSize,
  selectedFrame,
  onQuantityChange,
  quantityValue,
  variant
}) => {
  const cartButton = document.getElementsByClassName('c-add-to-cart')[0];
  cartButton !== undefined && selectedSize !== '' && selectedFrame !== '' && cartButton.classList.remove('disabled');
  cartButton !== undefined && selectedSize === '' && selectedFrame === '' && cartButton.classList.add('disabled');
  const RenderQuantityPicker = () => (
    <div className="c-shop-the-product__container">
    
      <span className="c-shop-prices-container">
        { variant !== undefined && 
          <div className="c-shop-prices-container">
            <div><p className="c-shop-prices-value before" >{variant.compareAtPrice*quantityValue} CAD</p></div>
            <div><p className="c-shop-prices-value" >{variant.price*quantityValue} CAD</p></div>
          </div>
        }
      </span>

      <div className="c-shop-the-product__buy-container">
        <div className="c-options-selection__container">
          <Dropdown options={sizes.values} onChange={onSizeChange}  placeholder={sizes.name} value={selectedSize} />
          <Dropdown options={frames.values} onChange={onFrameChange} placeholder={frames.name} value={selectedFrame}/>
        </div>
      
        <div className="c-options-selection__container">
          <div className="quantity-input c-quantity-picker__container">
            <button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => onQuantityChange(--quantityValue)}>
              &mdash;
            </button>
            <input className="quantity-input__screen" type="text" value={quantityValue} readonly />
            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => onQuantityChange(++quantityValue)}>
              &#xff0b;
            </button>  
          </div>
          <div id={'add-to-cart'} className="c-add-to-cart disabled" onClick={ () => onAddToCart() }> Add To Cart </div>
        </div>
      </div>
    </div>
  )
  return (
    <div>
      {RenderQuantityPicker()}
    </div>
  )
} 
export default ShopTheProduct;
