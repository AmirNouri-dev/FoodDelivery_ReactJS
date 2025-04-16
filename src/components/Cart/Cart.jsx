import React, { useContext } from "react";
import "./Cart.css";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import foodsContext from "../../contexts/FoodContext";

export default function Cart() {
  const contextData = useContext(foodsContext);
  const closeCartHandler = () => {
    contextData.setIsShowBag(false);
  };
  const minusItemCount = (item) => {
    contextData.userCart.some((food) => {
      if (food.title === item.title && item.count > 1) {
        item.count -= 1;
        contextData.setOrdersPrice((prev) => prev - item.price);
        contextData.setUserOrdersCount((prev) => prev - 1);
        return;
      }
    });
  };
  const addItemCount = (item) => {
    contextData.userCart.some((food) => {
      if (food.title === item.title) {
        item.count += 1;
        contextData.setOrdersPrice((prev) => prev + item.price);
        return;
      }
    });
    contextData.setUserOrdersCount((prev) => prev + 1);
  };

  const removeFoodHandler = (item) => {
    console.log(item);
    let userCart = [...contextData.userCart];
    userCart = userCart.filter((food) => {
      return food.title !== item.title;
    });
    contextData.setUserCart(userCart);
    contextData.setOrdersPrice((prev) => prev - item.price * item.count);
    contextData.setUserOrdersCount((prev) => prev - item.count);
  };

  const changeCountHandler = (item) => {
    console.log(item.count);
  };
  return (
    <div>
      <aside
        className={`${contextData.isShowBag ? "active" : ""}  shopping_list `}
      >
        <div className="cart">
          <div className="total_item_shopping_list">
            <div>
              total items :{" "}
              <span className="total__items">
                {contextData.userOrdersCount}
              </span>
            </div>

            <a href="#" onClick={closeCartHandler}>
              <IoIosClose className="close_shop_list" />
            </a>
          </div>
          <div className="line"></div>
          <div className="view_items_shopping_list">
            {contextData.userCart.map((item) => (
              <div class="view_item_shopping_list">
                <div class="View_item_image">
                  <img src={item.img} alt="item image" />
                </div>
                <div class="View_item_description">
                  <div class="View_item_description_title">{item.title}</div>
                  <div class="View_item_description_Desc">{item.desc}</div>
                  <div class="View_item_description_price">
                    {(item.price * item.count).toFixed(2)} <span>$</span>
                  </div>
                </div>
                <div className="View_item_count">
                  <FaMinus
                    className=" count_btn "
                    onClick={() => minusItemCount(item)}
                  />
                  <div
                    className="item_count"
                    onChange={() => changeCountHandler(item)}
                  >
                    {item.count}
                  </div>
                  <FaPlus
                    className=" count_btn"
                    onClick={() => addItemCount(item)}
                  />
                </div>
                <div
                  class="View_item_remove"
                  onClick={() => removeFoodHandler(item)}
                >
                  <FaRegTrashAlt />
                </div>
              </div>
            ))}
          </div>
          <div className="line"></div>
          <div className="total_price_shopping_list">
            <div>
              total price :{" "}
              <span className="total__price">
                {contextData.ordersPrice.toFixed(2)}
              </span>
              $
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
