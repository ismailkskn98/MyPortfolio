import AboutContainer from "@/containers/aboutContainer";
import { errorMessage } from "@/helper/homeAPI";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

export type AboutType = {
  about: string;
};

const getAbout = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/about`, {
      method: "GET",
      cache: "no-store", // sayfaya her geldiğimizde istek atsın cache'lemesin default: force-cache
    });
    if (!response.ok) {
      const errorMessage: errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data: AboutType = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const Hakkimda = async () => {
  const data: AboutType | string = await getAbout();

  if (typeof data === "string") {
    throw new Error(data);
  }

  return <AboutContainer data={data} />;
};

export default Hakkimda;
