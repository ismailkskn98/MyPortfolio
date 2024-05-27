import { ErrorMessage } from "@/app/(site)/page";
import SkillByIdContainer from "@/containers/skillByIdContainer";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

export type Skill = {
  id: string | number;
  name: string;
  image: string;
};

const getSkillById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/skills/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      const data: ErrorMessage = await response.json();
      throw new Error(data.message);
    }
    const data: Skill = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const YetenekGuncelle = async ({ params }: { params: { id: string } }) => {
  const data: Skill | string = await getSkillById(params.id);
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <SkillByIdContainer data={data} />;
};

export default YetenekGuncelle;
