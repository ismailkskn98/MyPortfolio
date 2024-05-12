import React from "react";

const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
