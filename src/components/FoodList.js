import FoodItem from "./FoodItem";

function FoodList({ foods }) {
  return (
    <div className="container">
      <h2>Menu</h2>

      <div className="menu">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;