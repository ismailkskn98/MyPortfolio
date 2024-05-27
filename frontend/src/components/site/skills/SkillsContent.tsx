import React from "react";

const SkillsContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <article id="skillsContent" className="flex flex-col items-center gap-[90px]">
      {children}
    </article>
  );
};

export default SkillsContent;
