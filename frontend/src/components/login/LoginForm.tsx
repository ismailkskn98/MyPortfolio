"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import { LoginSchema } from "./LoginSchema";
import { LoginFormItem, loginFormItems } from "./LoginFormItems";
import CustomInput from "./CustomInput";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

type LoginResponse = {
  message: string;
  data: string;
  error: boolean;
  success: boolean;
};

type InitialValues = {
  username: string;
  password: string;
};

const initialValues: InitialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  // URL -> `/dashboard?next=my-project`
  // `next` -> 'my-project'
  const next: string | null = searchParams.get("next") ?? null;
  const [errorMessage, setErrorMessage] = useState<LoginResponse>({
    message: "",
    data: "",
    error: false,
    success: false,
  });

  const handleSubmit = async (values: InitialValues) => {
    setIsLoading(true);
    const response = await fetch(`${BASE_URL_API}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data: LoginResponse = await response.json();
    if (data.error) {
      values.password = "";
      setIsLoading(false);
      return setErrorMessage(data);
    }
    Cookies.set("token", data.data);
    setIsLoading(false);
    router.push(next ?? "/admin");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit} validateOnMount={true}>
      {({ isSubmitting, isValid }) => (
        <Form method="POST" className="max-w-[550px] w-full flex flex-col items-center gap-8">
          {errorMessage.error && <p className="w-full px-2 py-3 -mb-5 flex items-center justify-center font-semibold rounded bg-red-500 text-red-900">{errorMessage.message}</p>}

          {loginFormItems.map((item: LoginFormItem, i) => (
            <CustomInput {...item} key={i} error={errorMessage.error} />
          ))}
          <button
            type="submit"
            className={`px-7 py-2 rounded-sm search-u bg-[#FBAE3C] text-BG1 outline-none border border-solid border-[#FBAE3C] cursor-pointer uppercase font-semibold disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed disabled:border-gray-600`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting || isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
