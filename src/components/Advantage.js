import React from "react";
import people from "../assets/people.png";
import zap from "../assets/zap.svg";
import zap2 from "../assets/zap2.svg";
import zap3 from "../assets/zap3.svg";
import zap4 from "../assets/zap4.svg";
import arrow from "../assets/arrow.png";
function Advantage() {
  return (
    <div className=" w-[1728px] h-[868px] items-center  md:p-32 lg:pt-48 lg:pb-48  justify-center">
      <p style={{ fontFamily: "Inter" }} className="text-[#175CD3] text-[18px]">
        The ClearLink Advantage
      </p>
      <p style={{ fontFamily: "Inter" }} className="text-[48px] font-semibold">
        Why choose ClearLink?
      </p>
      <p style={{ fontFamily: "Inter" }} className="text-[24px] text-[#667085]">
        In a world where connection is everything, ClearLink takes the lead. Our
        <br />
        cutting-edge video conferencing app offers:
      </p>
      <div className="mt-[-140px] ml-[55%] absolute">
        <img src={arrow} alt="" />
      </div>
      <div className="grid grid-cols-2 pt-20 ">
        <div className="flex flex-col pt-20 ">
          <div className="flex-row flex gap-10">
            <div className="flex-col flex">
              <div>
                <img src={zap} alt="" />
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#101828] text-[24px]"
                >
                  Crystal-clear HD video
                </p>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#475467] text-[18px]"
                >
                  No more pixelation or blurriness – just <br />
                  stunning, lifelike clarity that brings your
                  <br />
                  team closer in meetings.
                </p>
              </div>
            </div>
            <div className="flex-col flex">
              <div>
                <img src={zap2} alt="" />
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#101828] text-[24px]"
                >
                  Noise-canceling audio
                </p>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#475467] text-[18px]"
                >
                  Say goodbye to distractions with our <br />
                  advanced audio tech for crisp, <br />
                  interruption-free conversations.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-row flex gap-10 pt-5">
            <div className="flex-col flex">
              <div>
                <img src={zap3} alt="" />
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#101828] text-[24px]"
                >
                  Scheduling made easy
                </p>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#475467] text-[18px]"
                >
                  Streamline your agenda with ClearLink's <br />
                  intuitive scheduling. Set up meetings, <br />
                  send invitations, and receive reminders in <br />
                  one place.
                </p>
              </div>
            </div>
            <div className="flex-col flex">
              <div>
                <img src={zap4} alt="" />
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#101828] text-[24px]"
                >
                  Bank-grade security
                </p>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[#475467] text-[18px]"
                >
                  Your privacy is our priority with bank-
                  <br />
                  grade security protocols safeguarding <br />
                  your meetings and data from unwanted <br />
                  intruders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={people} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Advantage;
