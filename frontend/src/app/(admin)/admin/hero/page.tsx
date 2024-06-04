import HeroContainer from "@/containers/heroContainer";
import { error, success } from "@/helper/homeAPI";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

export type Hero = {
  id: number;
  name: string;
  job: string;
  email: string;
  freelancer: string;
  website: string;
  city: string;
};

const getHero = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/hero`, {
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

const Hero = async () => {
  const data: Hero | string = await getHero();
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <HeroContainer data={data} />;
};

export default Hero;
