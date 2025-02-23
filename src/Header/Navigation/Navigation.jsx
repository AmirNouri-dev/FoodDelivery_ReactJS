import './Navigation.css'
import NavBasket from './NavBasket/NavBasket'
import NavMenu from './NavMenu/NavMenu'
import NavBtn from './NavBtn/NavBtn';
import NavIcons from './NavIcons/NavIcons';

function Navigation() {
    return ( 
        <section className='main_navigation'>
        <NavBasket></NavBasket>
        <NavMenu></NavMenu>
        <NavBtn></NavBtn>
        <NavIcons></NavIcons>
        </section>
        
    )
}
export default Navigation