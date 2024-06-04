"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const ProductDetails = ({el}) => {
    const pathname = usePathname()
  return (
    <div className="product-details">
        <p>{pathname}</p>
      <div className="product-images">
        <div className="thumbnail-images">
          {/* {product.images && product.images.map((image, index) => (
            <Image fill key={index} src='' alt={el.name} className="thumbnail" />
          ))}
        </div> */}
        <Image fill src="" alt='test' className="main-image" />
      </div>
      <div className="product-info">
        <h1 className="product-title">testjjj</h1>
        <div className="reviews">
          <span className="rating">⭐⭐⭐⭐⭐</span>
          <span className="review-count">(150 Reviews)</span>
          <span className="stock-status">2</span>
        </div>
        <p className="product-price">$200</p>
        <p className="product-description">description</p>
        <div className="product-options">
          <div className="colors">
            <span>Colours:</span>
            
          
          </div>
          <div className="sizes">
            <span>Size: 29</span>
        
            {/* {product.sizes && product.sizes.map((size, index) => (
              <button key={index} className="size-option">{size}</button>
            ))} */}
          </div>
        </div>
        <div className="product-actions">
          <div className="quantity-selector">
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </div>
          <button className="buy-now-button">Buy Now</button>
          <button className="wishlist-button">❤</button>
        </div>
        <div className="delivery-info">
          <div className="free-delivery">
            <span>🚚 Free Delivery</span>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div className="return-delivery">
            <span>🔄 Return Delivery</span>
            <p>Free 30 Days Delivery Returns. <a href="#">Details</a></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails