import React from "react";

function Support() {
  return (
    <div className="items-center justify-center px-10 pr-20 ">
      <div className="grid grid-cols-2 w-full h-[720px]">
        <div>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[#175CD3] text-[18px]"
          >
            Support
          </p>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[48px] font-semibold"
          >
            FAQs
          </p>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[24px] text-[#667085]"
          >
            Everything you need to know about the product <br />
            and billing. Can’t find the answer you’re looking <br />
            for? Please
            <span className="underline-offset-1 underline">
              chat to our friendly team.
            </span>
            <br />
          </p>
        </div>
        <div className="shadow-xl  items-center justify-center  flex-col flex w-[653px] h-[720px]">
          <div className="bg-[#ffffff] shadow-xl rounded-[16px] px-2 justify-center w-[653px] flex-row  flex h-[214px]">
            <div className="flex-col flex items-center justify-center">
              <div>
                <div className="flex-row flex justify-between w-[653px] px-2">
                  <p
                    className="text-[#101828] text-[20px] "
                    style={{ fontFamily: "Inter" }}
                  >
                    How many participants can join a ClearLink video conference?
                  </p>
                  <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                    <p className="text-[#98A2B3]">-</p>
                  </div>
                </div>
              </div>
              <div className="w-[653px]">
                <p
                  className="text-[15px] text-[#475467] px-4"
                  style={{ fontFamily: "Inter" }}
                >
                  ClearLink offers flexible meeting options. Depending on your
                  subscription <br />
                  plan, you can host meetings with varying numbers of
                  participants. Our plans <br />
                  are designed to accommodate small team collaborations and
                  large-scale <br />
                  webinars, ensuring you have the right fit for your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="gap-8 flex-col flex">
            <div className="flex-row flex justify-between pt-5 w-[653px] px-2 items-center">
              <p
                className="text-[#101828] text-[15px] "
                style={{ fontFamily: "Inter" }}
              >
                Can I use ClearLink on multiple devices?
              </p>
              <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                <p className="text-[#98A2B3]">+</p>
              </div>
            </div>
            <hr className="text-[#EAECF0]" />
            <div className="flex-row flex justify-between w-[653px] px-2 items-center">
              <p
                className="text-[#101828] text-[15px]"
                style={{ fontFamily: "Inter" }}
              >
                Is ClearLink compatible with other video conferencing platforms?
              </p>
              <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                <p className="text-[#98A2B3]">+</p>
              </div>
            </div>
            <hr className="text-[#EAECF0]" />
            <div className="flex-row flex justify-between w-[653px] px-2 items-center">
              <p className="text-[#101828] text-[15px]">
                How does ClearLink ensure the security of my video conferences?
              </p>
              <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                <p className="text-[#98A2B3]">+</p>
              </div>
            </div>
            <hr className="text-[#EAECF0]" />
            <div className="flex-row flex justify-between w-[653px] px-2 items-center">
              <p
                className="text-[#101828] text-[15px]"
                style={{ fontFamily: "Inter" }}
              >
                Can I use ClearLink on multiple devices?
              </p>
              <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                <p className="text-[#98A2B3]">+</p>
              </div>
            </div>
            <hr className="text-[#EAECF0]" />
            <div className="flex-row flex justify-between w-[653px] px-2 items-center">
              <p
                className="text-[#101828] text-[15px]"
                style={{ fontFamily: "Inter" }}
              >
                What kind of customer support does ClearLink provide?
              </p>
              <div className="border-[#98A2B3] border-2 shadow-xl rounded-full items-center justify-center flex w-[20px] h-[20px]">
                <p className="text-[#98A2B3]" style={{ fontFamily: "Inter" }}>
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
