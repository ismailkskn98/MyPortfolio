import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoCode } from "react-icons/io5";

type ContentItem = {
  title: string;
  text: string;
  color: string;
  icon: React.ElementType;
};

const contentItems: ContentItem[] = [
  {
    title: "Front-End Developer",
    text: "HTML·CSS·JS·REACT",
    color: "bg-CSS",
    icon: RiComputerLine,
  },
  {
    title: "Backend Developer",
    text: "Express.js·MySQL·Sequelize",
    color: "bg-React",
    icon: IoCode,
  },
];

const SkillsContentServices = () => {
  return (
    <div id="skillsServices" className="flex items-center gap-8 lg:gap-32 flex-col md:flex-row">
      {contentItems.map((item, i) => (
        <div key={i} className="flex items-center gap-0">
          <div className={`${item.color} rounded-l-lg w-2 min-h-[132px]`}></div>
          <div className="flex flex-col items-center gap-2 min-h-[132px] px-6 py-4 rounded-r-lg bg-Brand2">
            <item.icon className="w-8 h-8" />
            <div className="flex flex-col items-center gap-2">
              <p className="menu-m text-BG1 whitespace-nowrap">{item.title}</p>
              <p className="para-m text-Grey whitespace-nowrap">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContentServices;
