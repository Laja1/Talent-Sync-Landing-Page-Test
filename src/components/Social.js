import React from "react";
import social from "../assets/social.svg";
function Social() {
  return (
    <div className="flex-row flex justify-between">
      <div>
        <p className="text-[#667085]">© 2023 ClearLink. All rights reserved.</p>
      </div>
      <div>
        <img src={social} alt="" />
      </div>
    </div>
  );
}

export default Social;
