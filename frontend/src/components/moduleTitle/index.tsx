import Image from "next/image";
import React from "react";
import { LuMouse } from "react-icons/lu";
import lineArrow from "@/../public/images/Line.png";
import LineTitle from "@/../public/images/Line-title.png";

type Props = {
  description: string;
  title: string;
  isHome: boolean;
};

const ModuleTitle: React.FC<Props> = ({ description, title, isHome }) => {
  return (
    <article className={`flex flex-col items-center text-White ${isHome ? "gap-16" : "gap-0"}`}>
      <div className={`flex-col items-center gap-4 max-h-[140px] ${isHome ? "flex" : "hidden"}`}>
        <LuMouse className="text-Brand1 w-8 h-11" />
        <Image src={lineArrow} alt="moduleTitle arrow" className="max-h-[80px]" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-Brand1 h1-u">{title}</h1>
          <Image src={LineTitle} alt="moduleTitle arrow" className="max-h-[80px]" />
        </div>
        <p className="code-m md:para-m text-center">{description}</p>
      </div>
    </article>
  );
};

export default ModuleTitle;
