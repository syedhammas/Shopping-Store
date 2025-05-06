const Navbar = () => {
  const { cartItems } = useCart(); // Assuming you're using a cart context

  return (
    // ...existing navbar code...
    <div className="cart-icon-container">
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        {cartItems.length > 0 && (
          <span className="cart-notification">{cartItems.length}</span>
        )}
      </Link>
    </div>
    // ...existing navbar code...
  );
};