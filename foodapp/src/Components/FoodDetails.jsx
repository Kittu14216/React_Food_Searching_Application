import { useEffect, useState } from "react";
import Styles from "./FoodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  const URL = `
    https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "05217690408547e7aab28a8fb17fadaa";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={Styles.recipeCard}>
      <div>
        <h1 className={Styles.recipeName}>{food.title}</h1>
        <img
          className={Styles.recipeImage}
          src={food.image}
          alt=" image loading ..."
        />
      </div>
      <div className={Styles.recipeDetails}>
        <span>{food.readyInMinutes} Minutes</span>
        <span>{food.vegetarian ? "🍅 Vegetarian" : "🍗 Non Vegetarian"}</span>
      </div>

      <h2>Ingredients</h2>
      <div>
        {Isloading
          ? "Loading Items ..."
          : food.extendedIngredients.map((item) => (
              <div className={Styles.Ingredients}>
                <img
                  className={Styles.IngredientImage}
                  src={` https://img.spoonacular.com/ingredients_100x100/${item.image}`}
                />
                <h3 className={Styles.IngredientTitle}>{item.name}</h3>
              </div>
            ))}
      </div>

      <h2>Instructions</h2>
      <div className={Styles.recipeInsructions}>
        {Isloading ? (
          <p>Loading .... </p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
