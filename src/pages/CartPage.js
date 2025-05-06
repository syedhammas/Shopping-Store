import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart?.cartItems || []);
    const navigate = useNavigate();
    
    console.log('Cart State:', useSelector((state) => state.cart)); // Debug line
    console.log('Cart Items:', cartItems); // Debug line

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity >= 1) {
            dispatch(updateQuantity(productId, newQuantity));
        }
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleBackButtonClick = () => {
        navigate(-1); 
      }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your Cart is Empty</h2>
                    <Link to="/products" className="continue-shopping">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-container">
                    <div className="cart-items">
                    <button className="go-back-btn" onClick={() => navigate(-1)}>
                               <i className="arrow-icon">←</i> Back to Products
                               </button>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p className="item-price">${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button 
                                        className="remove-button"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-details">
                            <p>Total Items: {cartItems.length}</p>
                            <p>Total Amount: ${calculateTotal()}</p>
                        </div>
                        <button className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;