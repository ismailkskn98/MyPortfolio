import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const LoginContainer = () => {
  return (
    <section className="w-full h-full flex flex-row items-center overflow-hidden ">
      <LoginLeft />
      <LoginRight />
    </section>
  );
};

export default LoginContainer;
