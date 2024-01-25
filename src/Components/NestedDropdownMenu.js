import React, { useState } from "react";


export default function NestedDropdownMenu(props) {
  const [hover, setHover] = useState(false);
  const [name, setName] = useState("");
  console.log(props);
  return (
    <div>
      <div className="w-[200px] bg-white border-2 absolute ml-6 -translate-y-6 flex-col text-black rounded-md py-4">
        {props.list.map((item) => {
          return (
            <div
              className={`flex  justify-between align-bottom items-baseline ${
                hover && name === item ? "bg-slate-100" : ""
              }`}
            >
              <div
                className="p-2 flex justify-between w-full"
                onMouseOver={() => {
                  setHover(true);
                  setName(item);
                }}
                onMouseLeave={() => setHover(false)}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
