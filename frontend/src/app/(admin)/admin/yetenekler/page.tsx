import type { ErrorMessage } from "@/app/(site)/page";
import SkillsContainer from "@/containers/skillsContainer";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

export type SkillsType = {
  id: number | string;
  name: string;
  image: string;
};

const getSkills = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/skills`, { method: "GET" });

    if (!response.ok) {
      const errorMessage: ErrorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data: SkillsType[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const Yetenekler = async () => {
  const data: SkillsType[] | string = await getSkills();

  if (typeof data === "string") {
    throw new Error(data);
  }

  return <SkillsContainer data={data} />;
};

export default Yetenekler;
