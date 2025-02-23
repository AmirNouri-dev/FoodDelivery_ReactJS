import './Menu.css'
import MenuTitle from './MenuTitle/MenuTitle'
import MenuItemSelector from './MenuItemSelector/MenuItemSelector'

function Menu() {
    return (
        <section className="menu" id="menux">
          <div className="container">
            <MenuTitle></MenuTitle>
            <MenuItemSelector></MenuItemSelector>

          </div>
        </section>
    )
}
export default Menu