import React from "react";
import Image from "next/image";
// types
import type { SkillType } from "@/types";
import Link from "next/link";

// http://localhost:8080
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const SkillsContentSkills = ({ skills }: { skills: SkillType[] }) => {
  return (
    // flex items-center gap-32
    <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-16 sm:gap-x-24 lg:gap-x-32 gap-y-8 lg:gap-y-16">
      {skills.map((item: SkillType, i) => (
        <Link
          href={item.link ? item.link : "#"}
          key={i}
          className="flex flex-col items-center gap-6 cursor-pointer group transition-transform duration-300 ease-out hover:scale-105 hover:text-Brand1"
        >
          <span
            className={`skills flex items-center justify-center w-36 h-36 rounded-full relative bg-React transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-Brand1`}
          >
            <Image src={`${BASE_URL}/${item.image}`} alt={item.name} width={100} height={100} className="w-20 h-20" />
          </span>
          <p className={`h2-m uppercase text-white group-hover:text-Brand1 transition-colors duration-300`}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default SkillsContentSkills;
