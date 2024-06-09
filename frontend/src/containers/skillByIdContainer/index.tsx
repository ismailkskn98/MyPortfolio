import SkillById, { SkillType } from "@/components/admin/skillById";
import React from "react";

const SkillByIdContainer = ({ data }: { data: SkillType }) => {
  return (
    <>
      <SkillById data={data} />
    </>
  );
};

export default SkillByIdContainer;
