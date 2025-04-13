import React, { useContext } from "react";
import foodsContext from "../../contexts/FoodContext";
import "./Toast.css";
import { IoIosClose } from "react-icons/io";

function Toast() {
  const contextData = useContext(foodsContext);
  const closeBtnHandler = () => {
    contextData.setIsShowToast(false);
  };
  return (
    <div>
      <div className=" toast-container">
        <div className={`${contextData.isShowToast ? "active" : ""} toast`}>
          {/*add show class to show component */}
          <div className="toast_section">
            <button
              type="button"
              className="btn_close"
              onClick={closeBtnHandler}
            >
              <IoIosClose className="btn_close_icon" />
            </button>
            <div dir="rtl" className="toast_body">
              محصول با موفقیت به سبد اضافه شد
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
