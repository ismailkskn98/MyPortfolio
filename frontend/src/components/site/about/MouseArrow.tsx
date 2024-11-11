import Image from "next/image";
import React from "react";
import { LuMouse } from "react-icons/lu";
import lineArrow from "@/../public/images/Line.png";

const MouseArrow = () => {
  return (
    <article className={`hidden md:flex flex-col items-center text-White`}>
      <div className={`flex flex-col items-center gap-4 max-h-[140px]`}>
        <LuMouse className="text-Brand1 w-8 h-11" />
        <Image src={lineArrow} alt="moduleTitle arrow" className="max-h-[80px]" width={10} height={80} />
      </div>
    </article>
  );
};

export default MouseArrow;
