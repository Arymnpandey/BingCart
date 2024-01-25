import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NestedDropdownMenu from "./NestedDropdownMenu";

function DropdownMenu(props) {
  const [hover, setHover] = useState(false);
  const [name, setName] = useState("");
 
  return (
    <div className="w-[200px] bg-white border-2 z-50 absolute mt-6 -ml-32 flex-col text-black rounded-md py-4">
      {props.subCategory?.map((item) => {
        return (
          <div
            className={`flex  justify-between align-bottom items-baseline ${
              hover && name === item.subCategoryName ? "bg-slate-100" : ""
            }`}
          >
            <div
              className="p-2 flex justify-between w-full"
              onMouseOver={() => {
                setHover(true);
                setName(item.subCategoryName);
              }}
              onMouseLeave={() => setHover(false)}
            >
              {item.subCategoryName}
              {hover && name === item.subCategoryName ? (
                <div>
                  <ArrowDropDownIcon className="rotate-[270deg]" />
                  <NestedDropdownMenu list={item.nestedItems} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DropdownMenu;
