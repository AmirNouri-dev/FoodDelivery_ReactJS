import "./Menu.css";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItemSelector from "./MenuItemSelector/MenuItemSelector";
import MenuFoodsContainer from "./MenuFoodsContainer/MenuFoodsContainer";
import FoodContainer from "./MenuFoodsContainer/FoodContainer/FoodContainer";
import { foods } from "../../datas";
import { useState } from "react";

const allCategoris = ["all", ...new Set(foods.map((food) => food.category))];

function Menu() {
  const [allFoods, setAllFoods] = useState(foods);
  const [categories, setCategories] = useState(allCategoris);

  const selectedCategory = (category) => {
    if (category === "all") {
      setAllFoods(foods);
      return;
    }
    const filteredFoods = foods.filter((food) => {
      return food.category === category;
    });
    setAllFoods(filteredFoods);
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
          <FoodContainer allFoods={allFoods} />
        </MenuFoodsContainer>
      </div>
    </section>
  );
}
export default Menu;
