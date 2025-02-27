import './MenuFoodsContainer.css'
import MenuFoodContainer from './MenuFoodContainer/MenuFoodContainer'

export default function MenuFoodsContainer() {

  const allFoods = [
    {id:1 ,title:'Cheese Beef Hamburger', desc:"fried chicken balls, french fries" ,image :'../src/assets/images/best seller/Cheese Beef Hamburger.png', badge:'../src/assets/images/Badge Discount.png', price:5.49},
    {id:2,title:'Combo funny' ,desc:"fried chicken balls, french fries", image :'../src/assets/images/best seller/Combo funny.png', badge:'../src/assets/images/Badge Discount.png', price:10.39},
    {id:3,title:'‌Chicken with Spicy Sauce' ,desc:"chili garlic sauce, black pepper sauce" ,image :'../src/assets/images/best seller/‌Chicken with Spicy Sauce.png' ,badge:'../src/assets/images/Badge Discount.png', price:7.29},
    {id:4,title:'Salad mixed vinegar' ,desc:"Salad, vinegar, tomato" ,image :'../src/assets/images/best seller/Salad mixed vinegar.png' ,badge:'' ,price:3.39},
    {id:5,title:'‌Chicken burger' ,desc:"fried chicken" ,image :'../src/assets/images/best seller/Chicken burger.png' ,badge:'' ,price:5.89},
  ]
    return (
            <div className="menu_foods_container">
              <MenuFoodContainer {...allFoods[0]} />
              <MenuFoodContainer {...allFoods[1]} />
              <MenuFoodContainer {...allFoods[2]}/>
              <MenuFoodContainer {...allFoods[3]} />
              <MenuFoodContainer {...allFoods[4]} />
              <MenuFoodContainer title='‌Lipton' desc="Tea with Ice,Lime and Mint" image ='../src/assets/images/best seller/Lipton.png' badge='' price={0.89} />
              <MenuFoodContainer title={allFoods[0].title} desc={allFoods[0].desc} image ={allFoods[0].image} badge={allFoods[0].badge} price={allFoods[0].price} />
            </div>
    )
}