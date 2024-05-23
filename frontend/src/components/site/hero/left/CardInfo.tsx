import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import CardSkills from "./CardSkills";
import { Hero } from "@/app/(admin)/admin/hero/page";

type CardInfoItem = {
  name: string | number;
  icon: React.ElementType;
};

const CardInfo = ({ hero }: { hero: Hero }) => {
  const CardInfoItems: CardInfoItem[] = [
    { name: hero.email, icon: IoMailOutline },
    { name: `Türkiye / ${hero.city}`, icon: IoLocationOutline },
    { name: hero.freelancer, icon: MdOutlineHomeWork },
    { name: hero.website, icon: LuLink },
  ];
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
