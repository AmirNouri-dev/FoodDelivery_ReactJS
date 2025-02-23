import './Navigation.css'
import NavBasket from './NavBasket/NavBasket'
import NavMenu from './NavMenu/NavMenu'
import NavBtn from './NavBtn/NavBtn';

function Navigation() {
    return ( 
        <section className='main_navigation'>
        <NavBasket></NavBasket>
        <NavMenu></NavMenu>
        <NavBtn></NavBtn>
        </section>
        
    )
}
export default Navigation