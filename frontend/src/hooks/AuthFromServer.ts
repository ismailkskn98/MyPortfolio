import { jwtTokenVerify } from "@/lib/auth";
import { cookies } from "next/headers";

// Server Component
export const fromServer = async () => {
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };

  const verifiedToken = token && (await jwtTokenVerify(token));
  return verifiedToken;
};
