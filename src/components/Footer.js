import React from "react";
import Logo from "../assets/Group.svg";
import app from "../assets/app.svg";
import google from "../assets/google.svg";
function Footer() {
  return (
    <div>
      <div className="grid grid-cols-3 w-[full] ">
        <div className="flex-col flex w-[400px] h-[84px]">
          <div className="flex-row flex gap-10  items-center">
            <img src={Logo} alt="" />
            <h1 style={{ fontFamily: "Inter" }} className="text-[24px]">
              ClearLink<span className="text-[#528BFF]">.</span>
            </h1>
          </div>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[18px] text-[#475467] pt-10"
          >
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="pl-0 flex-row flex">
          <div className="flex-col gap-8 flex pl-20">
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] text-[#667085]"
            >
              Pricing
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Overview
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Features
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Solutions
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Tutorials
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Pricing
            </p>
          </div>

          <div
            style={{ fontFamily: "Inter" }}
            className="flex-col gap-8 flex pl-20"
          >
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] text-[#667085]"
            >
              Company
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              About
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Careers
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Press
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              News
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Contact
            </p>
          </div>
          <div
            style={{ fontFamily: "Inter" }}
            className="flex-col gap-8 flex pl-20"
          >
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] text-[#667085]"
            >
              Resources
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Blog
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Events
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              HelpCentre
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Tutorials
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Support
            </p>
          </div>
          <div
            style={{ fontFamily: "Inter" }}
            className="flex-col gap-8 flex pl-20"
          >
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[16px] text-[#667085]"
            >
              Legal
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Terms
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Privacy
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Cookies
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Licenses
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[18px] text-[#475467]"
            >
              Contact
            </p>
          </div>
        </div>
        <div className="ml-80">
          <div className=" gap-8 flex-col flex">
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#175CD3] text-[18px]"
            >
              Get the app
            </p>
            <img src={app} className="w-[135px] h-[40px]" alt="" />
            <img src={google} className="w-[135px] h-[40px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
