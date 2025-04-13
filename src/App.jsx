import "./App.css";
import Navigation from "./Header/Navigation/Navigation";
import Modal from "./Modal/Modal";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Cart from "./Cart/Cart";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Cart />
      {router}
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
