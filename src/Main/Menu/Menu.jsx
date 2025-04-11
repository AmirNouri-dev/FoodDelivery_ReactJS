import "./Menu.css";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItemSelector from "./MenuItemSelector/MenuItemSelector";
import MenuFoodsContainer from "./MenuFoodsContainer/MenuFoodsContainer";
import FoodContainer from "./MenuFoodsContainer/FoodContainer/FoodContainer";
import MenuSeeAll from "./MenuSeeAll/MenuSeeAll";
import { foods } from "../../datas";
import { useState } from "react";

const allCategoris = ["all", ...new Set(foods.map((food) => food.category))];

function Menu() {
  const [allFoods, setAllFoods] = useState(foods);
  const [categories, setCategories] = useState(allCategoris);
  return (
    <section className="menu" id="menux">
      <div className="container">
        <MenuTitle></MenuTitle>
        <MenuItemSelector categories={categories} />
        <MenuFoodsContainer>
          <FoodContainer allFoods={allFoods} />
        </MenuFoodsContainer>
      </div>
    </section>
  );
}
export default Menu;
