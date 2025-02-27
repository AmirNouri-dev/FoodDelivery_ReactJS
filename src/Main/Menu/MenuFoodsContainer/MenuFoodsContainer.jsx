import './MenuFoodsContainer.css'
import MenuFoodContainer from './MenuFoodContainer/MenuFoodContainer'

export default function MenuFoodsContainer() {
    return (
            <div className="menu_foods_container">
              <MenuFoodContainer title='‌Lipton' desc="Tea with Ice,Lime and Mint" image ='../src/assets/images/best seller/Lipton.png' badge='' price={0.89} />
              <MenuFoodContainer title='Cheese Beef Hamburger' desc="fried chicken balls, french fries" image ='../src/assets/images/best seller/Cheese Beef Hamburger.png' badge='../src/assets/images/Badge Discount.png' price={5.39} />
              <MenuFoodContainer title='Combo funny' desc="fried chicken balls, french fries" image ='../src/assets/images/best seller/Combo funny.png' badge='../src/assets/images/Badge Discount.png' price={10.39} />
              <MenuFoodContainer title='‌Chicken with Spicy Sauce' desc="chili garlic sauce, black pepper sauce" image ='../src/assets/images/best seller/‌Chicken with Spicy Sauce.png' badge='../src/assets/images/Badge Discount.png' price={7.29} />
              <MenuFoodContainer title='Salad mixed vinegar' desc="Salad, vinegar, tomato" image ='../src/assets/images/best seller/Salad mixed vinegar.png' badge='' price={3.39} />
              <MenuFoodContainer title='‌Chicken burger' desc="fried chicken" image ='../src/assets/images/best seller/Chicken burger.png' badge='' price={5.89} />
            </div>
    )
}