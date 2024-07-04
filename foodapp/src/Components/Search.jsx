import { useEffect, useState } from "react";
import Styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "05217690408547e7aab28a8fb17fadaa";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=05217690408547e7aab28a8fb17fadaa`
        // `${URL}?query=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }

    fetchFood();
  }, [query]);

  return (
    <div className={Styles.searchcontainer}>
      <input
        className={Styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
