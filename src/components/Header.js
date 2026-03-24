function Header({ cartCount }) {
  return (
    <div className="header">
      <h2>🍔 Food Delivery</h2>
      <p>Cart: {cartCount}</p>
    </div>
  );
}

export default Header;