import SkillById from "@/components/admin/skillById";
import React from "react";
// types
import type { SkillType } from "@/types";

const SkillByIdContainer = ({ data }: { data: SkillType }) => {
  return (
    <>
      <SkillById data={data} />
    </>
  );
};

export default SkillByIdContainer;
