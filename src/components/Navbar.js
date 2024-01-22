import React from "react";
import Logo from "../assets/Group.svg";
function Navbar() {
  return (
    <div className="flex-row flex justify-between px-10     items-center w-[1240px] rounded-[100px] h-[64px] bg-[#D0D5DD] mt-10">
      <div className="flex-row flex gap-10  items-center">
        <img src={Logo} alt="" />
        <h1 className="text-[24px]">
          ClearLink<span className="text-[#528BFF] text-[24px]">.</span>
        </h1>
      </div>
      <div className="flex-row flex gap-10">
        <select
          id="dropdown"
          className="bg-transparent border-transparent text-[#667085]"
        >
          <option value="" className=" bg-[#D0D5DD]">
            Products
          </option>
        </select>
        <select
          id="dropdown"
          className="bg-transparent border-transparent text-[#667085]"
        >
          <option value="" className=" bg-[#D0D5DD]">
            Solutions
          </option>
        </select>
        <select
          id="dropdown"
          className="bg-transparent border-transparent text-[#667085]"
        >
          <option value="" className=" bg-[#D0D5DD]">
            Resources
          </option>
        </select>

        <option className=" bg-[#D0D5DD]  text-[#667085]">Pricing</option>
      </div>
      <div className="gap-5 flex-row flex">
        <div className="bg-[#ffffff] rounded-[100px] items-center justify-center flex w-[140px] h-[42px]">
          <p className="text-[16px]">Talk to sales</p>
        </div>
        <div className="bg-[#175CD3] rounded-[100px] items-center justify-center flex text-white w-[140px] h-[42px]">
          <p>Sign up for free</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
