import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <Cart items={cartItems} />
      <CartSummary items={cartItems} />
    </div>
  );
};

export default CartPage;