import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); // parent component ko search term bhejna
    }
    navigate("/products"); // search karne ke baad products page pe le jana
  };

  return (
    <div
      className="ui segment"
      style={{
        borderRadius: 0,
        margin: 0,
        backgroundColor: "white",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div className="ui secondary menu" style={{ padding: "0.5rem 1rem" }}>
        {/* Logo */}
        <Link to="/" className="item">
          <h2 className="ui header" style={{ color: "#111", fontWeight: "700" }}>
            <i className="shopping bag icon"></i>
            <div className="content">Hammas Store</div>
          </h2>
        </Link>

        {/* Search */}
        <div
          className="ui item"
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <form onSubmit={handleSearch} style={{ width: "100%", maxWidth: "500px" }}>
            <div
              className="ui icon input"
              style={{
                width: "100%",
                borderRadius: "50px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              <input
                className="prompt"
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ border: "none", padding: "12px 20px" }}
              />
              <button
                type="submit"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 15px",
                }}
              >
                <i className="search link icon" style={{ color: "#666" }}></i>
              </button>
            </div>
          </form>
        </div>

        {/* Cart */}
        <div className="right menu">
          <Link to="/cart" className="cart-icon-container" style={{ marginRight: "1rem" }}>
            <i className="shopping cart icon" style={{ color: "#333", fontSize: "1.5rem" }}></i>
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
