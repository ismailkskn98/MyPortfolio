import React from "react";
import { LuDownload } from "react-icons/lu";

const CvButton = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <button className="max-w-56 flex items-center justify-center gap-4 px-8 py-4 bg-White button-u border-none outline-none rounded-[32px]">
        Download CV <LuDownload />
      </button>
    </div>
  );
};

export default CvButton;
