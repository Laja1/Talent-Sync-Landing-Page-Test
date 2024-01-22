import React from "react";
import shopify from "../assets/Shopify.svg";
import Stars from "../assets/Stars.png";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import avatar from "../assets/avatar.svg";
import text from "../assets/text.svg";
import Contents from "../assets/Contents.png";
function Shopify() {
  return (
    <div className="pb-32 pt-32  h-[868px] items-center justify-center">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex gap-10 flex-col">
            <img src={shopify} alt="" className="w-[112.79px] h-[32px]" />
            <img src={Stars} alt="" className="w-[116px] h-[20px]" />
          </div>
          <p
            className="text-[34px] font-inter pt-10 pb-20"
            style={{ fontFamily: "Inter" }}
          >
            ClearLink has upgraded our <br />
            remote meetings. High-quality <br />
            video, screen sharing, and <br />
            top-notch security make it <br />
            essential for our team.
          </p>
          <div className="gap-12 flex-row flex">
            <div className="gap-6 flex-row flex ">
              <img src={avatar} alt="" />
              <img src={text} alt="" />
            </div>
            <div className="gap-10 flex-row flex">
              <div className="bg-[#ffffff] w-[56px] h-[56px] rounded-[28px] shadow-xl items-center flex justify-center">
                <img src={left} alt="" />
              </div>
              <div className="bg-[#ffffff] w-[56px] h-[56px] rounded-[28px] shadow-xl items-center flex justify-center">
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Contents} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Shopify;
