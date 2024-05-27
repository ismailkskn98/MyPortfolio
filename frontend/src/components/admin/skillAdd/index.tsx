"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { SkillSchema } from "./SkillSchema";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

type FetchMessageType = {
  message: string;
  error: boolean;
  success: boolean;
};

type InitialValues = {
  name: string;
  image: File | null;
};

const initialValues: InitialValues = {
  name: "",
  image: null,
};

const SkillAdd = () => {
  const [fileControl, setFileControl] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (
    values: InitialValues,
    { resetForm }: FormikHelpers<InitialValues>
  ) => {
    const formData = new FormData();
    if (values.image) {
      formData.append("name", values.name);
      formData.append("image", values.image);
    }
    try {
      const response = await fetch(`${BASE_URL_API}/admin/skill-create`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz");
      }
      const data: FetchMessageType = await response.json();
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
        <Formik
          initialValues={initialValues}
          validationSchema={SkillSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors }) => (
            <Form method="POST" encType="multipart/form-data" className="flex flex-col gap-5">
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
