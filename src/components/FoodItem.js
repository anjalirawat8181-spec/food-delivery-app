import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function FoodItem({ food }) {
  const dispatch = useDispatch();

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-img" />

      <h3>{food.name}</h3>
      <p>₹{food.price}</p>

      <button onClick={() => dispatch(addToCart(food))}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;