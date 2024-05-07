import React from "react";

type SkillItem = {
  name: string;
};

const skillItems: SkillItem[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "REACT" },
];

const CardSkills = () => {
  return (
    <div className="flex items-center gap-4 text-BG1 code-m">
      {skillItems.map((item, i) => (
        <span key={i} className="rounded-lg bg-Brand1 px-2">
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default CardSkills;
