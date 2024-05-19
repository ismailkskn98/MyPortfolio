import React from "react";
import ImageName from "./ImageName";
import CardInfo from "./CardInfo";
import CvButton from "./CvButton";

const Left = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="left"
      className="min-w-[320px] h-[520px] px-6 py-6 flex flex-col items-start gap-8 border-4 border-solid border-White rounded-tl-[160px] rounded-br-[160px] shadow-[-5px_-5px_5px_0px_#12F7D6]"
    >
      {children}
    </div>
  );
};

export default Left;
