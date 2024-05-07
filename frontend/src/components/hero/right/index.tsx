import React from "react";
import RightTitle from "./RightTitle";
import RightDescription from "./RightDescription";
import Highlights from "./Highlights";

const right = () => {
  return (
    <div id="right" className="w-full flex items-center gap-16 flex-col lg:flex-row lg:gap-0">
      <div id="rightInfo" className="w-full flex flex-col gap-8 items-center lg:items-start">
        <RightTitle />
        <RightDescription />
      </div>
      <Highlights />
    </div>
  );
};

export default right;
