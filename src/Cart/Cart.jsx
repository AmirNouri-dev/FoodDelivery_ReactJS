import React from "react";
import "./Cart.css";
import { IoIosClose } from "react-icons/io";

export default function Cart() {
  return (
    <div>
      <aside className="shopping_list">
        <div className="cart">
          <div className="total_item_shopping_list">
            <div>
              total items : <span className="total__items"></span>
            </div>

            <div>
              <IoIosClose className="close_shop_list" />
            </div>
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
