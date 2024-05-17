import { jwtTokenVerify } from "@/lib/auth";
import { cookies } from "next/headers";

export type JWTPayload = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  iat: Date | number;
  exp: Date | number;
};

// Server Component
export const fromServer = async () => {
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };

  const verifiedToken: "" | JWTPayload | null = token && (await jwtTokenVerify(token));
  return verifiedToken;
};
