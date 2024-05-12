import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = () => {
  return (
    <main className="w-full h-screen flex flex-row items-center overflow-hidden">
      <LoginLeft />
      <LoginRight />
    </main>
  );
};

export default Login;
