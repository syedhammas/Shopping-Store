import React from "react";
import Sidebar from "./Sidebar";

const About = () => {
  return (
    <div className="home-layout">
      <Sidebar />
      <div className="main-content">
        <div className="ui container" style={{ padding: "2rem" }}>
          <h1>About Hammas Store</h1>
          <p>Welcome to Hammas Store, your one-stop destination for all your shopping needs.
  Hammas Store is dedicated to providing you with the best online shopping experience.
  We offer a wide range of products, from electronics to fashion, ensuring that you find exactly what you're looking for.<br/>
  
            <p>Our mission is to make shopping easy and enjoyable for everyone. We believe in quality, affordability, and customer satisfaction. Our team works tirelessly to curate the best products and provide exceptional service.</p>
            <p>Whether you're looking for the latest gadgets, trendy clothing, or home essentials, Hammas Store has got you covered. We are committed to bringing you the best deals and a seamless shopping experience.</p>
            <p>Thank you for choosing Hammas Store. Happy shopping!</p> <br/>
<p>Hammas Store is not just a store; it's a community. We value your feedback and suggestions, so feel free to reach out to us anytime.</p>

          <p>At Hammas Store, we are committed to providing you with the best online shopping experience. Our team works tirelessly to curate a wide range of products that meet your needs and preferences.</p>
          <p>We believe in quality, affordability, and customer satisfaction. Our mission is to make shopping easy and enjoyable for everyone.</p>
          <p>Thank you for choosing Hammas Store. Happy shopping!</p> <br/>
<p>Hammas Store is not just a store; it's a community. We value your feedback and suggestions, so feel free to reach out to us anytime.</p>
<p>We are constantly updating our product range to ensure you have access to the latest trends and innovations. Our user-friendly website makes it easy to browse, compare, and purchase products from the comfort of your home.</p>
  </p>
          
          <div className="features-section">
            <div className="feature-card animate-slide-up">
              <i className="huge truck icon"></i>
              <h3>Free Shipping</h3>
              <p>On orders over $50</p>
            </div>
            <div className="feature-card animate-slide-up">
              <i className="huge shield alternate icon"></i>
              <h3>Secure Payments</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="feature-card animate-slide-up">
              <i className="huge undo icon"></i>
              <h3>Easy Returns</h3>
              <p>30 day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;