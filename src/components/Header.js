import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="ui segment" style={{ borderRadius: 0, margin: 0, backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
      <div className="ui secondary menu">
        <Link to="/" className="item">
          <h2 className="ui header" style={{ color: '#333' }}>
            <i className="shopping bag icon"></i>
            <div className="content">Hammas Store</div>
          </h2>
        </Link>
        
        <div className="ui category search item" style={{ flex: 1, justifyContent: 'center' }}>
          <div className="ui icon input" style={{ width: '100%', maxWidth: '500px' }}>
            <input className="prompt" type="text" placeholder="Search products..." />
            <i className="search link icon"></i>
          </div>
        </div>

        <div className="right menu">
          <Link to="/cart" className="cart-icon-container">
            <i className="shopping cart icon" style={{ color: '#333' }}></i>
            {cartItems && cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
