import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default CartSummary;