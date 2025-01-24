import styles from "./FoodItem.module.css";

export default function FoodItem({ setfoodId, food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
          className={styles.itemButton}
        >
          view recipie
        </button>
      </div>
    </div>
  );
}
