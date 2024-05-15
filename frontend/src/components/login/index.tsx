import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const LoginContainer = () => {
  return (
    <main className="w-full h-screen flex flex-row items-center overflow-hidden">
      <LoginLeft />
      <LoginRight />
    </main>
  );
};

export default LoginContainer;
