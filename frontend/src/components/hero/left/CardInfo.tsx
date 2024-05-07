import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import CardSkills from "./CardSkills";

type CardInfoItem = {
  name: string;
  icon: React.ElementType;
};

const CardInfoItems: CardInfoItem[] = [
  { name: "hamdismailkskn@gmail.com", icon: IoMailOutline },
  { name: "Türkiye", icon: IoLocationOutline },
  { name: "Full Time / Freelancer", icon: MdOutlineHomeWork },
  { name: "www.ismailkeskin.net", icon: LuLink },
];

const CardInfo = () => {
  return (
    <div id="cardInfo" className="w-full flex flex-col items-start gap-4 code-m">
      <div className="text-White flex flex-col gap-4">
        {CardInfoItems.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <item.icon className="w-[18px] h-[18px] text-Brand1" />
            <p>{item.name}</p>
          </span>
        ))}
      </div>
      <CardSkills />
    </div>
  );
};

export default CardInfo;
