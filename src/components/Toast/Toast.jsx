import React, { useContext } from "react";
import productsContext from "../../Contexts/ProductsContext";
import "./Toast.css";

function Toast() {
  const contextData = useContext(productsContext);
  const closeBtnHandler = () => {
    contextData.setIsShowToast(false);
  };
  return (
    <div>
      <div className=" toast-container position-fixed bottom-0 me-4 end-0 mb4">
        <div
          //   className={
          //     contextData.isShowToast
          //       ? "toast align-items-center text-white bg-danger show"
          //       : "toast align-items-center text-white bg-danger"
          //   }
          className={`${
            contextData.isShowToast ? "show" : ""
          } toast align-items-center text-white bg-danger `}
        >
          {/*add show class to show component */}
          <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn-close btn-close-white ms-3"
              onClick={closeBtnHandler}
            ></button>
            <div dir="rtl" className="toast-body fs-6">
              محصول با موفقیت به سبد اضافه شد
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
