import SkillsContainer from "@/containers/skillsContainer";
import { error, success } from "@/helper/homeAPI";
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
    const response = await fetch(`${BASE_URL_API}/admin/skills`, {
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

const Yetenekler = async () => {
  const data: SkillsType[] | string = await getSkills();
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <SkillsContainer data={data} />;
};

export default Yetenekler;
