"use client";
import { AboutType } from "@/app/(admin)/admin/hakkimda/page";
import React, { useEffect, useState } from "react";
import Tiptap from "../tiptap/Tiptap";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL;

const About = ({ data }: { data: AboutType }) => {
  const [initialContent, setInitialContent] = useState<string>(data.about);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSave = async (newContent: string) => {
    try {
      const response = await fetch(`${BASE_URL_API}/admin/about/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          about: newContent,
        }),
      });

      const data = await response.json();
      if (data.error) {
        return setErrorMessage(data.message);
      }
      return setSuccessMessage(data.message);
    } catch (error) {
      return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
      <h1 className="w-full flex items-center justify-center text-4xl">Hakkımda Düzenle</h1>
      <section>
        {errorMessage.length > 0 && (
          <p className="w-full px-4 py-4 bg-red-500 text-red-900 rounded flex items-center justify-center">
            {errorMessage}
          </p>
        )}
        {successMessage.length > 0 && (
          <p className="w-full px-4 py-4 bg-green-500 text-green-900 rounded flex items-center justify-center">
            {successMessage}
          </p>
        )}
        <Tiptap initialContent={initialContent} onSave={handleSave} />
      </section>
    </main>
  );
};

export default About;
