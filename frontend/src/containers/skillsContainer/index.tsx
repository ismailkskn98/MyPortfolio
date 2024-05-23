import type { SkillsType } from "@/app/(admin)/admin/yetenekler/page";
import Skills from "@/components/admin/skills";
import React from "react";

const SkillsContainer = ({ data }: { data: SkillsType[] }) => {
  return (
    <>
      <Skills data={data} />
    </>
  );
};

export default SkillsContainer;
