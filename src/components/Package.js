import React from "react";
import tick from "../assets/tick.svg";
import last from "../assets/last.png";

function Package() {
  return (
    <div className="items-center justify-center w-[full]">
      <div className="grid grid-cols-2">
        <div>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[48px] font-semibold"
          >
            Ready to clear the path to perfect communication?
          </p>
          <div className="flex-col flex gap-10 p-6">
            <div className="flex-row flex gap-7">
              <img src={tick} alt="" />
              <p
                className="text-[24px] text-[#475467]"
                style={{ fontFamily: "Inter" }}
              >
                30 days free trial
              </p>
            </div>
            <div className="flex-row flex gap-7">
              <img src={tick} alt="" />
              <p
                className="text-[24px] text-[#475467]"
                style={{ fontFamily: "Inter" }}
              >
                Cancel at any time
              </p>
            </div>
            <div className="flex-row flex gap-7">
              <img src={tick} alt="" />
              <p
                className="text-[24px] text-[#475467]"
                style={{ fontFamily: "Inter" }}
              >
                Access to all features
              </p>
            </div>
            <div className="flex-row flex gap-7">
              <img src={tick} alt="" />
              <p className="text-[24px] text-[#475467]">
                Personalized onboarding
              </p>
            </div>
          </div>
          <div className="gap-8 flex-row flex">
            <div className="bg-[#ffffff] shadow-xl rounded-[100px] items-center justify-center flex w-[144px] h-[52px]">
              <p className="text-[16px]" style={{ fontFamily: "Inter" }}>
                Talk to sales
              </p>
            </div>
            <div className="bg-[#175CD3] rounded-[100px] items-center justify-center flex text-white w-[195px] h-[52px]">
              <p style={{ fontFamily: "Inter" }}>Start your free trial</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={last} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
