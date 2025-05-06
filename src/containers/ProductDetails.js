import React, { useEffect, useState } from "react";
// Add useNavigate to imports
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import "../styles/ProductDetails.css"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  // Add navigate
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.selectedProduct);
  const [quantity, setQuantity] = useState(1);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("Error: ", err);
    }
  };


  const handleBackButtonClick = () => {
    navigate(-1); 
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product, quantity));
    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 2000,
      theme: "colored"
    });
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading amazing product...</p>
      </div>
    );
  }

  const { image, title, price, category, description } = product;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-image-container">
          <button 
            className="back-btn" 
            onClick={handleBackButtonClick}
          > <i className="arrow-icon">←</i>
            Back
          </button>
          <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-info">
          <span className="product-category">{category}</span>
          <h1 className="product-title">{title}</h1>
          <div className="product-price">${price}</div>
          <div className="rating">
            <span className="stars">★★★★☆</span>
            <span className="reviews">128 reviews</span>
          </div>
          <p className="product-description">{description}</p>
          <div className="product-actions">
            <div className="quantity-selector">
              <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <i className="cart-icon">🛒</i>
              Add to Cart
            </button>
          </div>
          <div className="product-meta">
            <div className="delivery-info">
              <i className="delivery-icon">🚚</i>
              Free delivery
            </div>
            <div className="return-info">
              <i className="return-icon">↩️</i>
              30-day returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;