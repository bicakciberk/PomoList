import React from "react";

function Stats({ total }) {
  return (
    <div className="flex justify-between w-[653px] 750px:w-[368px] 460px:w-[218px]">
      <div className="left flex items-center">
        <p className="text-[#4ea8de] font-medium">Total</p>
        <div className="ml-[8px] text-white flex items-center justify-center px-[5px] rounded-full bg-[#262626]">
          <p>{total}</p>
        </div>
      </div>
      <div className="right flex items-center">
        <p className="text-[#8284fa] font-medium">Completed</p>
        <div className="ml-[8px] text-white flex items-center justify-center px-[5px] rounded-full bg-[#262626]">
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
export default Stats;
