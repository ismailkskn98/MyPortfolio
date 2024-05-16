const AUTH_PAGES = ["/login", "/forgot-password"];

export const isAuthPages = (pathname: string) =>
  AUTH_PAGES.some((page) => page.startsWith(pathname)); // true or false
