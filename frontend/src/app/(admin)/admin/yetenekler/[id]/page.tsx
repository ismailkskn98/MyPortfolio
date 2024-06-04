import SkillByIdContainer from "@/containers/skillByIdContainer";
import { error, success } from "@/helper/homeAPI";
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
      cache: "no-store", // sayfaya her geldiğimizde istek atsın cache'lemesin default: force-cache
    });
    if (!response.ok) {
      const responseData: error = await response.json();
      throw new Error(responseData.message);
    }
    const responseData: success = await response.json();
    if (responseData.error) {
      throw new Error(
        "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz."
      );
    }
    return responseData.data;
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
