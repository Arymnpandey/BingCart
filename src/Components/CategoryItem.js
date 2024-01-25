import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";

function CategoryItem(props) {
  
  const [hover, setHover] = useState(false);

  return (
    <div className="flex-col self-center mt-3 cursor-pointer">
      <img src={props.item.image} alt={props.item.title}></img>
      <div
        className="flex hover:text-blue-500"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="font-semibold ">{props.item.title}</p>
        {props.item.subCategory ? <Dropdown></Dropdown> : ""}
        {hover && props.item.subCategory ? (
          <DropdownMenu subCategory={props.item.subCategory} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CategoryItem;
