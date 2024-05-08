import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

type SkillItem = {
  text: string;
  bgColor: string;
  textColor: string;
  icon: React.ElementType;
};

const skillItems: SkillItem[] = [
  { text: "HTML", bgColor: "bg-Html", textColor: "text-Html", icon: AiOutlineHtml5 },
  { text: "CSS", bgColor: "bg-CSS", textColor: "text-CSS", icon: FaCss3Alt },
  { text: "JS", bgColor: "bg-JS", textColor: "text-JS", icon: FaNodeJs },
  { text: "REACT", bgColor: "bg-React", textColor: "text-React", icon: FaReact },
  { text: "EXPRESS", bgColor: "bg-Express", textColor: "text-Express", icon: SiExpress },
  { text: "MYSQL", bgColor: "bg-Mysql", textColor: "text-Mysql", icon: GrMysql },
];

const SkillsContentSkills = () => {
  return (
    // flex items-center gap-32
    <div className="grid grid-cols-2 grid-rows-6 lg:grid-cols-4 lg:grid-rows-2 gap-x-16 sm:gap-x-24 lg:gap-x-32 gap-y-8 lg:gap-y-16">
      {skillItems.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-6">
          <span
            className={`flex items-center justify-center w-36 h-36 p-10 rounded-full ${item.bgColor}`}
          >
            <item.icon className="w-16 h-16 text-White" />
          </span>
          <p className={`h2-m ${item.text == "EXPRESS" ? "text-White" : item.textColor}`}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsContentSkills;
