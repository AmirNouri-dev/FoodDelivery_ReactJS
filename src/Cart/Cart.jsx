import React, { useContext } from "react";
import "./Cart.css";
import { IoIosClose } from "react-icons/io";
import foodsContext from "../contexts/FoodContext";

export default function Cart() {
  const contextData = useContext(foodsContext);
  const closeCartHandler = () => {
    contextData.setIsShowBag(false);
  };
  return (
    <div>
      <aside
        className={`${contextData.isShowBag ? "active" : ""}  shopping_list `}
      >
        <div className="cart">
          <div className="total_item_shopping_list">
            <div>
              total items : <span className="total__items"></span>
            </div>

            <a href="#" onClick={closeCartHandler}>
              <IoIosClose className="close_shop_list" />
            </a>
          </div>
          <div className="line"></div>
          <div className="view_items_shopping_list">{/*here */}</div>
          <div className="line"></div>
          <div className="total_price_shopping_list">
            <div>
              total price : <span className="total__price"></span>$
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
