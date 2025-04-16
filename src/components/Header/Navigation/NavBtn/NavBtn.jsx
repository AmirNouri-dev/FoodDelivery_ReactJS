import "./NavBtn.css";
import { Link } from "react-router-dom";
function NavBtn() {
  return (
    <div className="nav_buttons">
      <Link to={"/signin"} className="nav_btn">
        <p>sign in</p>
      </Link>
      <Link to={"/login"} className="nav_btn">
        <p>log in</p>
      </Link>
    </div>
  );
}
export default NavBtn;
