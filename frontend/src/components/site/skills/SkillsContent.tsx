import React from "react";
import SkillsContentServices from "./SkillsContentServices";
import SkillsContentSkills from "./SkillsContentSkills";

const SkillsContent = () => {
  return (
    <article id="skillsContent" className="flex flex-col items-center gap-[90px]">
      <SkillsContentServices />
      <SkillsContentSkills />
    </article>
  );
};

export default SkillsContent;
