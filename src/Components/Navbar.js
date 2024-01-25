import DarkModeIcon from "@mui/icons-material/DarkMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import suggestions from "../Data/Suggestions";
import React from "react";
import Typeahead from "./TypeAhead";

function Navbar() {
  
  return (
    <div>
      <div className="bg-blue-500 flex justify-around py-[0.6rem]">
        <div className="flex justify-between w-1/3">
          <div className=" text-white p-2 text-3xl font-extrabold  font-sans ">
            BingCart
          </div>
          <Typeahead suggestions={suggestions}></Typeahead>
        </div>
        <div className="flex w-1/4  justify-end">
          <DarkModeIcon fontSize="medium" className="mt-4 mx-5 text-white " />
          <div className="mt-4 flex text-white">
            <ShoppingCartIcon />
            <p className="mx-1">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
