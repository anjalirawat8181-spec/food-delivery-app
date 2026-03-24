function FoodItem({ food, addToCart }) {
  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;