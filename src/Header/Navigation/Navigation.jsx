import './Navigation.css'
import NavBasket from './NavBasket/NavBasket'
import NavMenu from './NavMenu/NavMenu'

function Navigation() {
    return ( 
        <section className='main_navigation'>
        <NavBasket></NavBasket>
        <NavMenu></NavMenu>
        </section>
        
    )
}
export default Navigation