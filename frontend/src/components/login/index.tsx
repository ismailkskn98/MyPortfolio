import React, { Suspense } from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const LoginContainer = () => {
  return (
    <section className="w-full h-full flex flex-row items-center overflow-hidden ">
      <LoginLeft />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginRight />
      </Suspense>
    </section>
  );
};

export default LoginContainer;
