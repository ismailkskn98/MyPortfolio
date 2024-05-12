import React from "react";

const Login = () => {
  return (
    <main className="w-full h-screen flex flex-row items-center overflow-hidden">
      <article className="hidden lg:block basis-3/5 h-full bg-login-left-bg bg-center bg-no-repeat"></article>
      <article className="relative h-full basis-full lg:basis-2/5 bg-login-right-bg-mobil lg:bg-login-right-bg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-8 px-6 text-White">
        <div className="relative">
          <h1 className="h1-u relative z-10">Giriş Yap</h1>
          <span className="inline-block w-36 h-16 absolute bottom-0 right-0 bg-login-h1"></span>
        </div>
        <form className="max-w-[550px] w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col gap-1 article-u">
            <label htmlFor="username" className="font-semibold">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Kullanıcı Adınızı Giriniz"
              className="border-none outline-none focus:outline focus:outline-[3px] focus:outline-offset-0 focus:outline-[#FBAE3C] px-2 py-1 rounded-sm"
            />
          </div>
          <div className="w-full flex flex-col gap-1 article-u">
            <label htmlFor="username" className="font-semibold">
              Şifre
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi Giriniz"
              className="border-none outline-none focus:outline focus:outline-[3px] focus:outline-offset-0 focus:outline-[#FBAE3C] px-2 py-1 rounded-sm"
            />
          </div>
          <button className="px-7 py-2 rounded-sm search-u bg-[#FBAE3C] text-BG1 outline-none border border-solid border-[#FBAE3C] cursor-pointer uppercase font-semibold">
            Giriş Yap
          </button>
        </form>
      </article>
    </main>
  );
};

export default Login;
