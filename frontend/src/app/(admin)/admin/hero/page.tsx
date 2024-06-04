import HeroContainer from "@/containers/heroContainer";
import { errorMessage } from "@/helper/homeAPI";
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
      const errorMessage: errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data;
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
