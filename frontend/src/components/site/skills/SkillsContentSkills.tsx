import React from "react";
import Image from "next/image";
// types
import type { SkillType } from "@/types";

// http://localhost:8080
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const SkillsContentSkills = ({ skills }: { skills: SkillType[] }) => {
  return (
    // flex items-center gap-32
    <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-16 sm:gap-x-24 lg:gap-x-32 gap-y-8 lg:gap-y-16">
      {skills.map((item: SkillType, i) => (
        <div key={i} className="flex flex-col items-center gap-6">
          <span className={`skills flex items-center justify-center w-36 h-36 rounded-full relative bg-React`}>
            <Image src={`${BASE_URL}/${item.image}`} alt={item.name} width={100} height={100} className="w-20 h-20" />
          </span>
          <p className={`h2-m uppercase text-white`}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsContentSkills;
