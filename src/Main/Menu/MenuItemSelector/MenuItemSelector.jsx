import "./MenuItemSelector.css";
import { foods } from "../../../datas";
import { useEffect, useRef, useState } from "react";
import FoodContainer from "../MenuFoodsContainer/FoodContainer/FoodContainer";
import MenuFoodsContainer from "../MenuFoodsContainer/MenuFoodsContainer";

// const categoris = Array.from(new Set(foods.map((food) => food.category)));
// categoris.unshift("all");
// below code replce with upper codes
// const categoris = ["all", ...new Set(foods.map((food) => food.category))];

const MenuItemSelector = ({ categories }) => {
  const [currentCate, setCurrentCate] = useState("all");

  return (
    <div className="menu_item_selector">
      {categories.map((category, index) => (
        <button
          key={index}
          className={
            category === currentCate
              ? "menu_item_selector_btn active"
              : "menu_item_selector_btn"
          }
          onClick={() => setCurrentCate(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default MenuItemSelector;
// let x = [
//  <div className="menu_item_selector">
//   <button className="menu_item_selector_btn" data-index="bestSeller">
//     <div className="menu_item_selector_svg" data-index="bestSeller">
//       <svg
//         data-index="bestSeller"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           data-index="bestSeller"
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M13.2193 2.60795C12.607 1.80052 11.3932 1.80052 10.781 2.60795L9.40692 4.42007C9.18858 4.70802 8.83187 4.85577 8.47387 4.80655L6.22093 4.49678C5.21707 4.35876 4.35876 5.21707 4.49678 6.22092L4.80655 8.47387C4.85577 8.83187 4.70802 9.18858 4.42007 9.40692L2.60795 10.781C1.80052 11.3932 1.80052 12.607 2.60795 13.2193L4.42007 14.5933C4.70802 14.8116 4.85577 15.1683 4.80655 15.5263L4.49678 17.7793C4.35876 18.7831 5.21707 19.6415 6.22092 19.5034L8.47387 19.1937C8.83187 19.1444 9.18858 19.2922 9.40691 19.5801L10.781 21.3923C11.3932 22.1997 12.607 22.1997 13.2193 21.3923L14.5933 19.5801C14.8116 19.2922 15.1683 19.1444 15.5263 19.1937L17.7793 19.5034C18.7831 19.6415 19.6415 18.7831 19.5034 17.7793L19.1937 15.5263C19.1444 15.1683 19.2922 14.8116 19.5801 14.5933L21.3923 13.2193C22.1997 12.607 22.1997 11.3932 21.3923 10.781L19.5801 9.40692C19.2922 9.18858 19.1444 8.83187 19.1937 8.47387L19.5034 6.22092C19.6415 5.21707 18.7831 4.35876 17.7793 4.49678L15.5263 4.80655C15.1683 4.85577 14.8116 4.70802 14.5933 4.42007L13.2193 2.60795ZM14.7071 9.2929C14.3166 8.90237 13.6834 8.90237 13.2929 9.2929L9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L14.7071 10.7071C15.0976 10.3166 15.0976 9.68342 14.7071 9.2929ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11ZM14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15Z"
//           fill="#504F4F"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="bestSeller">
//       Best Seller
//     </div>
//   </button>
//   <button className="menu_item_selector_btn" data-index="pizza">
//     <div className="menu_item_selector_svg" data-index="pizza">
//       <svg
//         data-index="pizza"
//         xmlns="http://www.w3.org/2000/svg"
//         height="24px"
//         viewBox="0 -960 960 960"
//         width="24px"
//         fill="#504F4F"
//       >
//         <path
//           data-index="pizza"
//           d="M480-80 80-680q85-72 186.5-116T480-840q112 0 213.5 43.5T880-680L480-80Zm0-144 292-438q-65-45-139-71.5T480-760q-79 0-152.5 26.5T188-662l292 438ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Zm0 136Z"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="pizza">
//       Pizza
//     </div>
//   </button>
//   <button className="menu_item_selector_btn" data-index="humburger">
//     <div className="menu_item_selector_svg" data-index="humburger">
//       <svg
//         data-index="humburger"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           data-index="humburger"
//           d="M2 14C2 13.4477 2.44772 13 3 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14Z"
//           fill="#504F4F"
//         />
//         <path
//           data-index="humburger"
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M3 10C3 6.68629 5.68629 4 9 4H15C18.3137 4 21 6.68629 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10ZM9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9ZM17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
//           fill="#504F4F"
//         />
//         <path
//           data-index="humburger"
//           d="M21 18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18Z"
//           fill="#504F4F"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="humburger">
//       Humburger
//     </div>
//   </button>
//   <button className="menu_item_selector_btn" data-index="chicken">
//     <div className="menu_item_selector_svg" data-index="chicken">
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         data-index="chicken"
//       >
//         <path
//           d="M3 17.8C3 17.3582 3.35817 17 3.8 17H20.2C20.6418 17 21 17.3582 21 17.8C21 19.5673 19.5673 21 17.8 21H6.2C4.43269 21 3 19.5673 3 17.8Z"
//           fill="#504F4F"
//           data-index="chicken"
//         />
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M3.8 17C3.35817 17 3 17.3582 3 17.8C3 19.5673 4.43269 21 6.2 21H17.8C19.5673 21 21 19.5673 21 17.8C21 17.3582 20.6418 17 20.2 17H3.8Z"
//           fill="#504F4F"
//           data-index="chicken"
//         />
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M14.6785 7.35254C14.8842 6.94614 15 6.4866 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 6.4866 9.11585 6.94614 9.32147 7.35254C6.23647 8.32706 4 11.2119 4 14.619C4 14.8294 4.17056 15 4.38095 15H19.619C19.8294 15 20 14.8294 20 14.619C20 11.2119 17.7635 8.32706 14.6785 7.35254ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
//           fill="#504F4F"
//           data-index="chicken"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="chicken">
//       Fried Chicken
//     </div>
//   </button>
//   <button className="menu_item_selector_btn" data-index="dessert">
//     <div className="menu_item_selector_svg" data-index="dessert">
//       <svg
//         data-index="dessert"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//       >
//         <path
//           data-index="dessert"
//           d="M7.50668 15.3511C7.26153 14.6974 7.74481 14 8.44301 14H15.557C16.2552 14 16.7385 14.6974 16.4933 15.3511L14.7023 20.1273C14.2799 21.2538 13.203 22 12 22C10.797 22 9.72017 21.2538 9.29777 20.1273L7.50668 15.3511Z"
//           fill="#504F4F"
//         />
//         <path
//           data-index="dessert"
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M16.9754 6.5007C17.0026 6.7755 17.2239 7 17.5 7C18.8807 7 20 8.11929 20 9.5C20 10.8807 18.8807 12 17.5 12H12H6.5C5.11929 12 4 10.8807 4 9.5C4 8.11929 5.11929 7 6.5 7C6.77614 7 6.99737 6.7755 7.02462 6.5007C7.27516 3.9737 9.40709 2 12 2C14.5929 2 16.7248 3.9737 16.9754 6.5007Z"
//           fill="#504F4F"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="dessert">
//       Dessert
//     </div>
//   </button>
//   <button className="menu_item_selector_btn" data-index="drink">
//     <div className="menu_item_selector_svg" data-index="drink">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         data-index="drink"
//       >
//         <path
//           d="M2 19C2 18.4477 2.44772 18 3 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19Z"
//           fill="#504F4F"
//           data-index="drink"
//         />
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M4 4C2.89543 4 2 4.89543 2 6V8C2 12.4183 5.58172 16 10 16C12.5264 16 14.7793 14.8289 16.2454 13H18.5C20.433 13 22 11.433 22 9.5C22 7.567 20.433 6 18.5 6H18C18 4.89543 17.1046 4 16 4H4ZM18 8C18 9.0609 17.7935 10.0736 17.4185 11H18.5C19.3284 11 20 10.3284 20 9.5C20 8.67157 19.3284 8 18.5 8H18Z"
//           fill="#504F4F"
//           data-index="drink"
//         />
//       </svg>
//     </div>
//     <div className="menu_item_selector_title" data-index="drink">
//       Drink
//     </div>
//   </button>
// </div>]
// const [currentCate, setCurrentCate] = useState("drink");
//   const btnRef = useRef([]);

//   useEffect(() => {
//     btnRef.current[1].classList.add("active");
//   }, []);

//   const categorySelectorHandler = (index) => {
//     btnRef.current.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     btnRef.current[index].classList.add("active");
//     setCurrentCate(categoris[index]);
//   };
// <MenuFoodsContainer>
//         {foods
//           .filter((food) => {
//             if (food.category === currentCate) {
//               return food;
//             } else if (currentCate === "all") {
//               return food;
//             }
//           })
//           .map((food) => (
//             <FoodContainer {...food} key={food.id} />
//           ))}
//       </MenuFoodsContainer>
//     </>
