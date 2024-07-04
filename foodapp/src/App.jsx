import { useState } from "react";
import FoodList from "./Components/FoodList";

import viteLogo from "/vite.svg";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import Container from "./Components/Container";

import "./App.css";
import InnerContainer from "./Components/InnerCon";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658920");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          {foodData.map((food) => (
            <FoodList key={food.id} food={food} setFoodId={setFoodId} />
          ))}
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
