"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { SkillSchema } from "./SkillSchema";
import InfoMessage from "../infoMessage";
import { ResponseData } from "../hero/HeroForm";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

type InitialValues = {
  name: string;
  link: string;
  image: File | null;
};

const initialValues: InitialValues = {
  name: "",
  link: "",
  image: null,
};

const SkillAdd = () => {
  const [fileControl, setFileControl] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (values: InitialValues, { resetForm }: FormikHelpers<InitialValues>) => {
    const formData = new FormData();
    if (values.image) {
      formData.append("name", values.name);
      formData.append("link", values.link);
      formData.append("image", values.image);
    }
    console.log(values);
    try {
      const response = await fetch(`${BASE_URL_API}/admin/skill-create`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz");
      }
      const data: ResponseData = await response.json();
      if (data.error) {
        return setErrorMessage(data.message);
      }
      resetForm();
      setFileControl(false);
      if (fileInputRef && fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return setSuccessMessage(data.message);
    } catch (error) {
      if (error instanceof Error) {
        return setErrorMessage(error.message);
      } else {
        return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  return (
    <>
      <main className="w-full px-6 flex flex-col items-center gap-5 shadow-md py-8">
        <h1 className="w-full flex items-center justify-center text-4xl">Yetenek Ekle</h1>
        <Formik initialValues={initialValues} validationSchema={SkillSchema} onSubmit={handleSubmit}>
          {({ setFieldValue, errors }) => (
            <Form method="POST" encType="multipart/form-data" className="flex flex-col gap-5">
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
                <label htmlFor="image" className="font-semibold">
                  Resim Yükle
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  ref={fileInputRef}
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
              <button
                type="submit"
                className={`px-4 py-2 rounded border-none outline-none bg-BG2 text-white self-end font-semibold hover:bg-BG1 cursor-pointer transition-all disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed`}
                disabled={!fileControl}
              >
                Kaydet
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default SkillAdd;
