import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="home-layout">
         <Sidebar />
        <div className="main-content">
    <div className="home-container">
      <div className="hero-section">
        <h1 className="animated-heading">Welcome to Hammas Store</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <i className="shipping fast icon"></i>
          <h3>Fast Delivery</h3>
          <p>Quick delivery to your doorstep</p>
        </div>
        <div className="feature-card">
          <i className="shield alternate icon"></i>
          <h3>Secure Shopping</h3>
          <p>Safe and secure transactions</p>
        </div>
        <div className="feature-card">
          <i className="tags icon"></i>
          <h3>Best Prices</h3>
          <p>Competitive prices guaranteed</p>
        </div>
      </div>

      {/* New Collection Banner */}
      <div className="banner-section"  style={{ marginTop: "2rem" }}>
        <div className="banner-large">
          <img 
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
            alt="New Collection" 
            className="banner-image"
          />
          <div className="banner-content-overlay">
            <div className="banner-text">
              <span className="banner-label">New Arrivals</span>
              <h2 className="collection-title">New Collection 2025</h2>
              <div className="collection-content">
                <h3>Discover our latest fashion trends</h3>
                <p>Explore our new collection and find your perfect style.</p>
                <div className="button-container">
                  <Link to="/products" className="collection-btn">
                    Shop Collection
                    <span className="btn-icon">
                      <i className="arrow right icon"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};


export default Home;