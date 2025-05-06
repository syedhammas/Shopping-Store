import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import '../styles/Cart.css';
   
   const Cart = () => {
       const dispatch = useDispatch();
       const cartItems = useSelector(state => state.cart.cartItems);
   
       const handleRemoveItem = (productId) => {
           dispatch(removeFromCart(productId));
       };
   
       const handleUpdateQuantity = (productId, newQuantity) => {
           if (newQuantity >= 1) {
               dispatch(updateQuantity(productId, newQuantity));
           }
       };
   
       const calculateTotal = () => {
           return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
       };
   
       return (
           <div className="cart-container">
               <h2>Shopping Cart</h2>
               {cartItems.length === 0 ? (
                   <p>Your cart is empty</p>
               ) : (
                   <>
                       <div className="cart-items">
                           {cartItems.map(item => (
                               <div key={item.id} className="cart-item">
                                   <img src={item.image} alt={item.title} />
                                   <div className="item-details">
                                       <h3>{item.title}</h3>
                                       <p>${item.price}</p>
                                       <div className="quantity-controls">
                                           <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                           <span>{item.quantity}</span>
                                           <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                       </div>
                                       <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                   </div>
                               </div>
                           ))}
                       </div>
                      <div className="cart-summary">
                      <h3>Total: ${calculateTotal()}</h3>
                          <button className="checkout-btn">Proceed to Checkout</button>
                     </div>
               </>
               )}

</div>
);
 };
   export default Cart;