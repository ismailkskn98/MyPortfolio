import { JWTVerifyResult, jwtVerify } from "jose";
import { getJwtSecretKey } from "@/helper/getJwtSecretKey";

type JWTPayload = {
  _id: string | number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

export const jwtTokenVerify = async (token: string) => {
  try {
    const { payload }: JWTVerifyResult<JWTPayload> = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    console.log("token var ama yanlış");
    return null;
  }
};
