import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="header">
      <h2>🍔 Food Delivery</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart" style={{ marginLeft: "10px" }}>
          Cart ({cartItems.length})
        </Link>
      </div>
    </div>
  );
}

export default Header;