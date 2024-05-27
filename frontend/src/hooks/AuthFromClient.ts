"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type Payload = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  iat: Date | number;
  exp: Date | number;
};

type ErrorMessage = {
  message: string;
};

// Client Components
export const AuthFromClient = (): [Payload | null, string | null] => {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // cookie'den token'ı alma
    const getToken = async () => {
      const token = Cookies.get("token") ?? null;
      if (!token) {
        // token yok ise
        return setError("Token is not found!");
      }

      try {
        // token'ı server'a gönderme
        const response: Response = await fetch(`${BASE_URL_API}/auth/verify-token`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          // error
          const errorMessage: ErrorMessage = await response.json();
          return setError(errorMessage.message);
        }

        // payload alma
        const payload: Payload = await response.json();
        return setData(payload);
      } catch (error) {
        if (error instanceof Error) {
          return error.message;
        } else {
          return setError("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
        }
      }
    };

    getToken();
  }, []);

  return [data, error];
};
