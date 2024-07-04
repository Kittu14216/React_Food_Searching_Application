import Styles from "./FoodList.module.css";
export default function FoodList({ food, setFoodId }) {
  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={food.image} />
      <div className={Styles.titlecontent}>
        <h1 className={Styles.title}>{food.title}</h1>
      </div>

      <div className={Styles.buttoncontainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={Styles.button}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
