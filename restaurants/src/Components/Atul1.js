// import React, { useState } from 'react'
// import"./style.css"
// import Menu from "./MenuApi"
// function Rest() {

//     const [MenuData, setMenuData] = React.useState(Menu);
//   console.log(MenuData)
  
//     return (
//     // <div>Rest</div>
//     <>
//     <div className="card-container">
//     <div className='card'>
//          <div className='card-body'>
//             <span className='card-number card-circle subtle'>1</span>
//     <span className='card-author subtle'>Breakfast</span>
//          </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Rest

import React, { useState } from "react";
import "./Style.css";
import Menu from "./Api.js";
import MenuCard from "./Cards";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map(( ele) => {
      return  ele.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter(( ele) => {
      return  ele.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
