import Skills from "@/components/admin/skills";
import React from "react";
// types
import type { SkillType } from "@/types";

const SkillsContainer = ({ data }: { data: SkillType[] }) => {
  return (
    <>
      <Skills data={data} />
    </>
  );
};

export default SkillsContainer;
