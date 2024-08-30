const AUTH_PAGES = ["/login", "/forgot-password"];

export const isAuthPages = (pathname: string) => AUTH_PAGES.some((page) => page.startsWith(pathname)); // startsWith: verdiğimiz değer ile başlıyor mu? başlamıyor mu? true or false (query de gelebilir ondan dolayı sadece başlangıcını kontrol ediyoruz)
