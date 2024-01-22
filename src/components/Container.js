import React from "react";
import Background from "./Background";
import Landing from "./Landing";
import Companies from "./Companies";
import Navbar from "./Navbar";
import Advantage from "./Advantage";
import Shopify from "./Shopify";
import Support from "./Support";
import Package from "./Package";
import Footer from "./Footer";
import Social from "./Social";
import backImg from "../assets/back.png";

function Container() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center   h-[868px]"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="items-center flex  justify-center">
        <Navbar />
      </div>
      <div>
        <div className="w-full  items-center p-5 md:p-32 lg:p-14  justify-center">
          {/* <Background /> */}
          {/* <Navbar /> */}

          <Landing />
        </div>
        <div className="w-full h-[121px] items-center mt-86 md:p-32 lg:p-14   justify-center">
          <Companies />
        </div>
        <div className="w-full h-[868px]  items-center  justify-center">
          <Advantage />
        </div>
        <div className=" bg-[#F9FAFB] h-[868px]  w-full items-center mt-96 md:p-32   justify-center">
          <Shopify />
        </div>
        <div className="w-full bg-white h-[868px]  items-center p-5 md:p-32 lg:p-14  justify-center">
          <Support />
        </div>
        <div className="w-full bg-white h-[868px]  items-center p-5 md:p-32 lg:p-14  justify-center">
          <Package />
        </div>
        <div className="w-full bg-white h-[388px]  items-center p-5 md:p-32 lg:px-24 mt-[-300px] mb-[150px]  justify-center">
          <Footer />
        </div>
        <div className="w-full bg-[#F9FAFB] h-[100px]  items-center p-10 lg:px-34   justify-center">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Container;
