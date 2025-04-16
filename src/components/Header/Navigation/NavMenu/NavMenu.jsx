import './NavMenu.css'

function NavMenu() {
    return(
        <div className="nav_menu">
              <ul className="nav_menu_items">
                <li className="nav_menu_item">
                  <a href="#" className="nav_menu_link">Homepage</a>
                </li>
                <li className="nav_menu_item">
                  <a href="#menux" className="nav_menu_link">Menu</a>
                </li>
                <li className="nav_menu_item">
                  <a href="#saleoffx" className="nav_menu_link">Sale off</a>
                </li>
                <li className="nav_menu_item">
                  <a href="./cart.html" className="nav_menu_link">Cart</a>
                </li>
                <li className="nav_menu_item">
                  <a href="#" className="nav_menu_link">Contact</a>
                </li>
              </ul>
        </div>
    )
}
export default NavMenu