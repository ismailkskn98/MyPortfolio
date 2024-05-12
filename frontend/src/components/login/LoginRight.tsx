import React from "react";
import LoginForm from "./LoginForm";

const LoginRight = () => {
  return (
    <article className="relative h-full basis-full lg:basis-2/5 bg-login-right-bg-mobil lg:bg-login-right-bg bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-8 px-6 text-White">
      <div className="relative">
        <h1 className="h1-u relative z-10">Giriş Yap</h1>
        <span className="inline-block w-36 h-16 absolute bottom-0 right-0 bg-login-h1"></span>
      </div>
      <LoginForm />
    </article>
  );
};

export default LoginRight;
