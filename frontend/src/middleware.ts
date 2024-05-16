import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtTokenVerify } from "./lib/auth";
import { isAuthPages } from "./helper/isAuthPages";

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null }; // token or null

  const isAuthPage = isAuthPages(nextUrl.pathname); // true or false
  const hasVerifyToken = token && (await jwtTokenVerify(token)); // Payload | null

  if (isAuthPage) {
    if (!hasVerifyToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }
    const response = NextResponse.redirect(new URL("/admin", url));
    return response;
  }

  if (!hasVerifyToken) {
    // token yok veya yanlış ise
    const searchParams = new URLSearchParams(nextUrl.searchParams); // /admin?deneme=baslik
    searchParams.set("next", nextUrl.pathname); // /admin?deneme=baslik&next=/admin
    return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};

// const AUTH_PAGES = ["/login", "/register"];

// const isAuthPages = (url: string) => AUTH_PAGES.some((page) => page.startsWith(url));

// export async function middleware(request: NextRequest) {
//   const { url, nextUrl, cookies } = request;
//   const { value: token } = cookies.get("token") ?? { value: null };
//   const hasVerifiedToken = token && (await verifyJwtToken(token));
//   const isAuthPageRequested = isAuthPages(nextUrl.pathname);

//   if (isAuthPageRequested) {
//     if (!hasVerifiedToken) {
//       const response = NextResponse.next();
//       response.cookies.delete("token");
//       return response;
//     }

//     const response = NextResponse.redirect(new URL(`/`, url));
//     return response;
//   }

//   if (!hasVerifiedToken) {
//     const searchParams = new URLSearchParams(nextUrl.searchParams);
//     searchParams.set("next", nextUrl.pathname);

//     const response = NextResponse.redirect(
//       new URL(`/login?${searchParams}`, url)
//     );
//     response.cookies.delete("token");

//     return response;
//   }

//   return NextResponse.next();
// }

// export const config = { matcher: ["/login", "/admin/:path*"] };
