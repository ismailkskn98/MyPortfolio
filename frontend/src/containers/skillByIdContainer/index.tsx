import { Skill } from "@/app/(admin)/admin/yetenekler/[id]/page";
import SkillById from "@/components/admin/skillById";
import React from "react";

const SkillByIdContainer = ({ data }: { data: Skill }) => {
  return (
    <>
      <SkillById data={data} />
    </>
  );
};

export default SkillByIdContainer;
