import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";

const CardInfo = () => {
  return (
    <div id="cardInfo" className="w-full flex flex-col items-start gap-4 code-m">
      <div className="text-White flex flex-col gap-4">
        <span className="flex items-center gap-4">
          <IoMailOutline className="w-[18px] h-[18px] text-Brand1" />
          <p>hamdismailkskn@gmail.com</p>
        </span>
        <span className="flex items-center gap-4">
          <IoLocationOutline className="w-[18px] h-[18px] text-Brand1" />
          <p>Türkiye</p>
        </span>
        <span className="flex items-center gap-4">
          <MdOutlineHomeWork className="w-[18px] h-[18px] text-Brand1" />
          <p>Full Time / Freelancer</p>
        </span>
        <span className="flex items-center gap-4">
          <LuLink className="w-[18px] h-[18px] text-Brand1" />
          <p>www.ismailkeskin.net</p>
        </span>
      </div>
      <div className="flex items-center gap-4 text-BG1 code-m">
        <span className="rounded-lg bg-Brand1 px-2">HTML</span>
        <span className="rounded-lg bg-Brand1 px-2">CSS</span>
        <span className="rounded-lg bg-Brand1 px-2">JS</span>
        <span className="rounded-lg bg-Brand1 px-2">REACT</span>
      </div>
    </div>
  );
};

export default CardInfo;
