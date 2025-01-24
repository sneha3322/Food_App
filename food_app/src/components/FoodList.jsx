import FoodItem from "./FoodItem";

export default function FoodList({ setfoodId, foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setfoodId={setfoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
