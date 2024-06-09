"use client";
import React, { useEffect, useState } from "react";
import Tiptap from "../tiptap/Tiptap";
import InfoMessage from "../infoMessage";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type AboutType = {
  about: string;
};

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
      if (!response.ok) {
        return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }
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
        <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />
        <Tiptap initialContent={initialContent} onSave={handleSave} />
      </section>
    </main>
  );
};

export default About;
