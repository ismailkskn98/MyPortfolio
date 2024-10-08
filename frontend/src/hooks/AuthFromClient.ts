"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
// types
import type { ErrorResponse } from "@/types";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type User = {
  id: number | string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

export type Payload = {
  message: string;
  data: User;
  error: boolean;
  success: boolean;
};

// Client Components
export const AuthFromClient = (): Payload | null => {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // cookie'den token'ı alma
    const getToken = async () => {
      const token = Cookies.get("token") ?? null;

      if (!token) {
        // token yok ise
        console.log("Token is not found!");
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
          const responseData: ErrorResponse = await response.json();
          return setError(responseData.message);
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

  return data;
};
