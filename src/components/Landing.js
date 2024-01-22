import React from "react";
import moji1 from "../assets/moji1.png";
import moji2 from "../assets/moji2.png";
import moji3 from "../assets/moji3.png";
import moji4 from "../assets/moji4.png";
import moji5 from "../assets/moji5.png";
import moji6 from "../assets/moji6.png";
import call from "../assets/call.svg";
import user from "../assets/user.svg";
import Navbar from "../components/Navbar";
import robot from "../assets/robot.svg";
function Landing() {
  return (
    <div>
      <div className="grid grid-cols-2 px-10">
        <div className="pt-10">
          <h1
            className="font-medium text-[54px]"
            style={{ fontFamily: "Inter" }}
          >
            Uniting the world,
            <br />
            one video call at a time
          </h1>
          <p className="text-[20px] text-[#667085] pb-5">
            Experience the future of communication with ClearLink – <br />
            where crystal-clear video conferencing meets <br />
            unparalleled simplicity.
          </p>
          <div className="flex-row flex gap-10 items-center">
            <div className="bg-[#175CD3] rounded-[100px] items-center justify-center flex text-white w-[167px] h-[52px]">
              <p>Start your free trial</p>
            </div>
            <div className="flex-row flex gap-5 items-center">
              <img src={robot} className="w-[20px] h-[20px]" alt="" />
              <p>Discover AI assistant</p>
            </div>
          </div>
          <img src={user} className="pt-5" alt="" />
        </div>
        <div className="items-center justify-center flex-col flex bg-[#EFF8FF] w-[584px] h-[488px] shadow-2xl rounded-[16px]">
          <div className="flex-col gap-5 flex">
            <div className="flex-row flex  gap-8">
              <img src={moji1} alt="" />
              <img src={moji2} alt="" />
              <img src={moji3} alt="" />
            </div>
            <div className="flex-row flex  gap-8">
              <img src={moji4} alt="" />
              <img src={moji5} alt="" />
              <img src={moji6} alt="" />
            </div>
          </div>
          <div className="pt-10">
            <img src={call} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
