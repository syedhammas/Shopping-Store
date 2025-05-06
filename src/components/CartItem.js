import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../my-shopping-store/src/redux/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{item.title}</h2>
        <p className="cart-item-price">${item.price}</p>
        <button className="remove-btn" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;