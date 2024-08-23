import LoginContainer from "@/components/login";
import LoadingComponents from "@/components/site/loading";
import React, { Suspense } from "react";

const Login = () => {
  return (
    <>
      <Suspense fallback={<LoadingComponents />}>
        <LoginContainer />
      </Suspense>
    </>
  );
};

export default Login;
