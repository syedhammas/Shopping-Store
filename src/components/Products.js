import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      {product.discount && (
        <span className="discount-badge">-{product.discount}%</span>
      )}
      <button className="wishlist-btn">
        <i className="heart outline icon"></i>
      </button>
      
      <div className="card-image">
        <img src={product.image} alt={product.title} />
        <div className="card-overlay">
          <button 
            className="buy-button"
            onClick={() => dispatch(addToCart(product))}
          >
            BUY +
          </button>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="product-title">{product.title}</h3>
        
        <div className="price-container">
          <div>
            <span className="price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
          <div className="rating">
            <i className="star icon"></i>
            <span className="rating-score">{product.rating}</span>
          </div>
        </div>
        
        <div className="size-options">
          <span className="size-option">S</span>
          <span className="size-option">M</span>
          <span className="size-option">L</span>
        </div>
      </div>
    </div>
  );
};

// Using the ProductCard component in your product list
const Products = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;