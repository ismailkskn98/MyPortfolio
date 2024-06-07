"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { LoginSchema } from "./LoginSchema";
import { LoginFormItem, loginFormItems } from "./LoginFormItems";
import CustomInput from "./CustomInput";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

type LoginResponse = {
  message: string;
  error: boolean;
  success: boolean;
  token?: string;
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const next: string | null = searchParams.get("next") ?? null;
  const [errorMessage, setErrorMessage] = useState<LoginResponse>({
    message: "",
    error: false,
    success: false,
  });

  const handleSubmit = async (values: InitialValues) => {
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
      return setErrorMessage(data);
    }
    return router.replace(next ?? "/admin");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {({ isSubmitting, isValid }) => (
        <Form method="POST" className="max-w-[550px] w-full flex flex-col items-center gap-8">
          {errorMessage.error && (
            <p className="w-full px-2 py-3 -mb-5 flex items-center justify-center font-semibold rounded bg-red-500 text-red-900">
              {errorMessage.message}
            </p>
          )}

          {loginFormItems.map((item: LoginFormItem, i) => (
            <CustomInput {...item} key={i} error={errorMessage.error} />
          ))}
          <button
            type="submit"
            className={`px-7 py-2 rounded-sm search-u bg-[#FBAE3C] text-BG1 outline-none border border-solid border-[#FBAE3C] cursor-pointer uppercase font-semibold disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed disabled:border-gray-600`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
