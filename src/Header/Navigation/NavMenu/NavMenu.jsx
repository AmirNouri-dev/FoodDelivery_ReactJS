import './NavMenu.css'

function NavMenu() {
    return(
        <div class="nav_menu">
              <ul class="nav_menu_items">
                <li class="nav_menu_item">
                  <a href="#" class="nav_menu_link">Homepage</a>
                </li>
                <li class="nav_menu_item">
                  <a href="#menux" class="nav_menu_link">Menu</a>
                </li>
                <li class="nav_menu_item">
                  <a href="#saleoffx" class="nav_menu_link">Sale off</a>
                </li>
                <li class="nav_menu_item">
                  <a href="./cart.html" class="nav_menu_link">Cart</a>
                </li>
                <li class="nav_menu_item">
                  <a href="#" class="nav_menu_link">Contact</a>
                </li>
              </ul>
        </div>
    )
}
export default NavMenu