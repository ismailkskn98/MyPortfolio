import { jwtVerify } from "jose";
import { getJwtSecretKey } from "@/helper/getJwtSecretKey";

export const jwtTokenVerify = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    console.log("token var ama yanlış");
    return null;
  }
};
