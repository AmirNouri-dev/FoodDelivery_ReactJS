import "./Header.css";
import Navigation from "./Navigation/Navigation";
import Banner from "./Banner/Banner";

function Header() {
  return (
    <div className="container">
      <Navigation />
      <Banner />
    </div>
  );
}
export default Header;
