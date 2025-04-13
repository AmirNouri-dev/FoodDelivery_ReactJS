import "./App.css";
import Navigation from "./Header/Navigation/Navigation";
import Modal from "./Modal/Modal";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Cart from "./Cart/Cart";
import foodsContext from "./contexts/FoodContext";
import { useState } from "react";
import { foods } from "./datas";

function App() {
  const router = useRoutes(routes);
  const [allFoods, setAllFoods] = useState(foods);
  const [isShowBag, setIsShowBag] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [userOrdersCount, setUserOrdersCount] = useState(0);
  const [ordersPrice, setOrdersPrice] = useState(0);

  return (
    <>
      <foodsContext.Provider
        value={{
          allFoods,
          setAllFoods,
          isShowBag,
          setIsShowBag,
          userCart,
          setUserCart,
          userOrdersCount,
          setUserOrdersCount,
          ordersPrice,
          setOrdersPrice,
        }}
      >
        <Cart />
        {router}
      </foodsContext.Provider>
    </>
  );
}

export default App;
{
  /* <Modal>
         
            <div className="modal_Btns">
              <a href="#" className="modal_btn_yes modal_btn">Yes</a>
              <a href="#" className="modal_btn_no modal_btn">No</a>
            </div>
      </Modal>
      <Modal message="Do you want to exit?">
      
            <div className="modal_Btns">
              <a href="#" className="modal_btn_yes modal_btn">Yes</a>
              <a href="#" className="modal_btn_no modal_btn">No</a>
            </div>
      </Modal> */
}
