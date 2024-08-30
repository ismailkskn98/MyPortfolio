import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtTokenVerify } from "./lib/auth";
import { isAuthPages } from "./helper/isAuthPages";

export async function middleware(request: NextRequest) {
  const { cookies, nextUrl, url } = request;
  const isAuthPage = isAuthPages(nextUrl.pathname); // true or false
  /* {
    name: 'token',
    value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
  } */
  const { value: token } = cookies.get("token") ?? { value: null }; // token or null
  const verifyToken = token && (await jwtTokenVerify(token)); // Token var mı? Token doğru mu?

  if (isAuthPage) {
    if (!verifyToken) {
      // token yok ise veya geçerli değilse
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }
    // Token var ve geçerli ise
    // url: http://localhost:3000/login
    // new URL("/admin", url): http://localhost:3000/admin
    const response = NextResponse.redirect(new URL("/admin", url));
    return response;
  }

  if (!verifyToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams); // /admin?title=baslik&deneme=deneme2 ['baslik', 'deneme2']
    searchParams.set("next", nextUrl.pathname);
    return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
