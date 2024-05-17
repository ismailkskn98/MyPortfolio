import { JWTVerifyResult, jwtVerify } from "jose";
import { getJwtSecretKey } from "@/helper/getJwtSecretKey";
import { JWTPayload } from "@/hooks/AuthFromServer";

export const jwtTokenVerify = async (token: string) => {
  try {
    const { payload }: JWTVerifyResult<JWTPayload> = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    console.log("token var ama yanlış");
    return null;
  }
};
