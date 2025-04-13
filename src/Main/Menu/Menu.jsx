import "./Menu.css";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItemSelector from "./MenuItemSelector/MenuItemSelector";
import MenuFoodsContainer from "./MenuFoodsContainer/MenuFoodsContainer";
import FoodContainer from "./MenuFoodsContainer/FoodContainer/FoodContainer";
import { foods } from "../../datas";
import { useContext, useState } from "react";
import foodsContext from "../../contexts/FoodContext";

const allCategoris = ["all", ...new Set(foods.map((food) => food.category))];

function Menu() {
  const [categories, setCategories] = useState(allCategoris);
  const contextData = useContext(foodsContext);

  const selectedCategory = (category) => {
    if (category === "all") {
      contextData.setAllFoods(foods);
      return;
    }
    const filteredFoods = foods.filter((food) => {
      return food.category === category;
    });
    contextData.setAllFoods(filteredFoods);
  };
  return (
    <section className="menu" id="menux">
      <div className="container">
        <MenuTitle />
        <MenuItemSelector
          categories={categories}
          selectedCategory={selectedCategory}
        />
        <MenuFoodsContainer>
          <FoodContainer />
        </MenuFoodsContainer>
      </div>
    </section>
  );
}
export default Menu;
