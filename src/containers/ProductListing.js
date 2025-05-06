import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/ProductListing.css";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="product-listing">
      <Sidebar />
      <div className="products-container" >
        <h2 className="featured-title">Our Products</h2>
        <div className="product-grid">
          {products.length === 0 ? (
            <div className="loading">Loading...</div>
          ) : (
            products.map((product) => {
              const { id, title, image, price, rating } = product;
              return (
                <div className="product-card" key={id}>
                  <Link to={`/product/${id}`}>
                    <span className="discount-badge">-25%</span>
                    <button className="wishlist-btn">
                      <i className="heart outline icon"></i>
                    </button>
                    <div className="card-image">
                      <img src={image} alt={title} />
                      <div className="card-overlay">
                        <button className="buy-button">BUY +</button>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="product-title">{title}</h3>
                      <div className="price-container">
                        <div>
                          <span className="price">${price}</span>
                          <span className="original-price">
                            ${(price * 1.25).toFixed(2)}
                          </span>
                        </div>
                        <div className="rating">
                          <i className="star icon"></i>
                          <span className="rating-score">{rating?.rate || "4.5"}</span>
                        </div>
                      </div>
                      <div className="size-options">
                        <span className="size-option">S</span>
                        <span className="size-option">M</span>
                        <span className="size-option">L</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
