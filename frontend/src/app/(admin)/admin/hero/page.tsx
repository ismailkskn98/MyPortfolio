import HeroContainer from "@/containers/heroContainer";
import React from "react";

// http://localhost:7930/api
const BASE_URL = process.env.BASE_URL;

export type Hero = {
  id: number;
  name: string;
  job: string;
  email: string;
  freelancer: string;
  website: string;
  location: string;
};

const getHero = async () => {
  try {
    const response = await fetch(`${BASE_URL}/admin/hero/1`, { method: "GET" });
    if (!response.ok) {
      const errorMessage = await response.json();
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
