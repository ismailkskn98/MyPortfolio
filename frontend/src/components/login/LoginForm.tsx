"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

// http://localhost:7930/api
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type LoginResponse = {
  message: string;
  error: boolean;
  success: boolean;
  token?: string;
};

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next: string | null = searchParams.get("next") ?? null;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<LoginResponse>({
    message: "",
    error: false,
    success: false,
  });
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data: LoginResponse = await response.json();

    if (data.error) {
      return setErrorMessage(data);
    }
    setSuccess(true);
    return router.replace(next ?? "/admin");
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="max-w-[550px] w-full flex flex-col items-center gap-8"
    >
      {errorMessage.error && (
        <p className="w-full px-2 py-3 -mb-5 flex items-center justify-center font-semibold rounded bg-red-500 text-red-900">
          {errorMessage.message}
        </p>
      )}
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
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="px-7 py-2 rounded-sm search-u bg-[#FBAE3C] text-BG1 outline-none border border-solid border-[#FBAE3C] cursor-pointer uppercase font-semibold">
        {success ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
};

export default LoginForm;
