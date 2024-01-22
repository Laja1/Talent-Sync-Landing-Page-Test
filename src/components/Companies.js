import React from "react";
import companies from "../assets/companies.png";
function Companies() {
  return (
    <div className="items-center flex flex-col gap-20 ">
      <p className="text-[20px] text-[#475467]" style={{ fontFamily: "Inter" }}>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <img alt="" src={companies} />
    </div>
  );
}

export default Companies;
