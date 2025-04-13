import "./FoodContainer.css";
import { GiShoppingCart } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import foodsContext from "../../../../contexts/FoodContext";
import { useContext } from "react";

const FoodContainer = () => {
  const contextData = useContext(foodsContext);
  // let {badge,image,title,desc,price} = props
  const orderHandler = (food) => {
    console.log("order");
    let newFoodObj = {
      id: contextData.userCart.length + 1,
      title: food.title,
      desc: food.desc,
      price: food.price,
      img: food.img,
      badge: food.badge || "",
    };
    console.log(newFoodObj);
    contextData.setUserCart((prev) => [...prev, newFoodObj]);
  };
  return (
    <>
      {contextData.allFoods.map((food) => {
        return (
          <div key={food.id} className="menu_food_container">
            <div className="discount_badge">
              <img src={food.badge || ""} alt="" />
            </div>
            <div className="menu_food_img">
              <img
                src={food.img || "../src/assets/images/Badge Discount.png"}
                alt="burger"
              />
              <div className="menu_food_img_bg"></div>
            </div>
            <div className="menu_food_infos">
              <h5>{food.title || "some food"}</h5>
              <p>{food.desc || "delicious"}</p>
              <div className="menu_food_infos_score">
                <FaStar className="menu_food_infos_score-icon" />
                <FaStar className="menu_food_infos_score-icon" />
                <FaStar className="menu_food_infos_score-icon" />
                <FaStar className="menu_food_infos_score-icon" />
                <FaStar className="menu_food_infos_score-icon" />

                <span>(5)</span>
              </div>
            </div>
            <div className="menu_food_price">
              <div className="menu_food_price_cost">{food.price || 0}$</div>
              <button
                className="menu_food_order-btn"
                onClick={() => orderHandler(food)}
              >
                <GiShoppingCart className="menu_food_order-btn-icon" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
FoodContainer.defaultprops = {};

export default FoodContainer;
