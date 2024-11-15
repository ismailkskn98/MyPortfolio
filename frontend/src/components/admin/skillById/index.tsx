"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { SkillSchema } from "../skillAdd/SkillSchema";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoMessage from "../infoMessage";
// types
import type { ErrorResponse, SkillType } from "@/types";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
// http://localhost:5029
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type InitialValues = {
  name: string;
  link: string;
  image: File | null;
  currentImage: string;
};

const SkillById = ({ data }: { data: SkillType }) => {
  const router = useRouter();
  const [fileControl, setFileControl] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const initialValues: InitialValues = {
    name: data.name,
    link: data.link,
    image: null,
    currentImage: data.image,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  const handleSubmit = async (values: InitialValues) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("link", values.link);
    formData.append("currentImage", values.currentImage);
    if (fileControl && values.image) {
      formData.append("image", values.image);
    }

    // fetch
    try {
      const response = await fetch(`${BASE_URL_API}/admin/skills/${data._id}`, {
        method: "PUT",
        body: formData,
      });
      if (!response.ok) {
        const data: ErrorResponse = await response.json();
        return setErrorMessage(data.message);
      }

      const responseData = await response.json();
      if (responseData.error) {
        return setErrorMessage(responseData.message);
      }
      setSuccessMessage(responseData.message);
      setTimeout(() => {
        router.replace(`/admin/yetenekler`);
      }, 3500);
    } catch (error) {
      return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
    }
  };

  return (
    <>
      <main className="w-full px-6 flex flex-col items-center gap-5 shadow-md py-8">
        <h1 className="w-full flex items-center justify-center text-4xl">Yetenek Güncelle</h1>
        <Formik initialValues={initialValues} validationSchema={SkillSchema} onSubmit={handleSubmit}>
          {({ setFieldValue, errors }) => (
            <Form method="POST" encType="multipart/form-data" className="flex flex-col gap-5">
              <Field type="hidden" name="currentImage" />
              <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="name" className="font-semibold">
                  İsim
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="link" className="font-semibold">
                  Link
                </label>
                <Field
                  type="text"
                  id="link"
                  name="link"
                  className="border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
                />
                <ErrorMessage name="link" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="relative w-44 h-44 bg-BG2 rounded p-3">
                  <Image src={`${BASE_URL}/${data.image}`} fill={true} alt={data.name} className="rounded" />
                </div>
                <label htmlFor="image" className="font-semibold">
                  Resim Yükle
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
                  onChange={(event) => {
                    if (event.currentTarget.files) {
                      setFieldValue("image", event.currentTarget.files[0]);
                      setFileControl(true);
                    } else {
                      setFileControl(false);
                    }
                  }}
                />
                {errors.image && <div className="text-red-500">{errors.image}</div>}
              </div>
              <button type="submit" className={`px-4 py-2 rounded border-none outline-none bg-BG2 text-white self-end font-semibold hover:bg-BG1 cursor-pointer transition-all`}>
                Kaydet
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default SkillById;
