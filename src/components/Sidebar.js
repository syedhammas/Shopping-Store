import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="category-menu">
        <li>
          <Link to="/"><i className="home icon"></i> Home</Link>
        </li>
        <li>
          <Link to="/products"><i className="grid layout icon"></i> Products</Link>
        </li>
        <li>
          <Link to="/about"><i className="info circle icon"></i> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;