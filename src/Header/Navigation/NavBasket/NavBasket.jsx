import "./NavBasket.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import foodsContext from "../../../contexts/FoodContext";
import { useContext } from "react";

function NavBasket() {
  const contextData = useContext(foodsContext);
  const showBagHandler = () => {
    contextData.setIsShowBag(true);
  };
  return (
    <div className="nav_logo_and_basket">
      <div className="nav_logo">
        <img src="../public/images/lgo.png" alt="lgo" />
      </div>
      <a href="#" className="nav_basket" onClick={showBagHandler}>
        <div className="basket_count active">1</div>
        <AiOutlineShoppingCart className="nav_basket_icon" />
      </a>
    </div>
  );
}
export default NavBasket;
