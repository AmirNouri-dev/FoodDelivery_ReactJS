import './Menu.css'
import MenuTitle from './MenuTitle/MenuTitle'
import MenuItemSelector from './MenuItemSelector/MenuItemSelector'
import MenuFoodsContainer from './MenuFoodsContainer/MenuFoodsContainer'

function Menu() {
    return (
        <section className="menu" id="menux">
          <div className="container">
            <MenuTitle></MenuTitle>
            <MenuItemSelector></MenuItemSelector>
            <MenuFoodsContainer></MenuFoodsContainer>

          </div>
        </section>
    )
}
export default Menu