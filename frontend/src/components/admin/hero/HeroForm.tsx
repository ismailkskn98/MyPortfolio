"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { heroSchema } from "./HeroSchema";
import { heroFormItems } from "./HeroFormItems";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import InfoMessage from "../infoMessage";
// types
import type { HeroFormItem } from "./HeroFormItems";
import type { HeroType } from "@/types";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type ResponseData = {
  message: string;
  data: [];
  success: boolean;
  error: boolean;
};

type InitialValues = {
  name: string;
  job: string;
  email: string;
  freelancer: string;
  city: string;
  website: string;
};

const HeroForm = ({ data }: { data: HeroType[] }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [id, setId] = useState<number | string>(data[0]._id);
  const initialValues: InitialValues = {
    name: data[0].name,
    job: data[0].job,
    email: data[0].email,
    freelancer: data[0].freelancer,
    city: data[0].city,
    website: data[0].website,
  };
  const handleSubmit = async (values: InitialValues, actions: FormikHelpers<InitialValues>) => {
    try {
      const response = await fetch(`${BASE_URL_API}/admin/hero/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }
      const data: ResponseData = await response.json();
      if (data.error) {
        return setErrorMessage(data.message);
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
  }, [errorMessage, successMessage]);

  return (
    <Formik initialValues={initialValues} validationSchema={heroSchema} onSubmit={handleSubmit} validateOnMount={true}>
      {({ isSubmitting, isValid }) => (
        <Form className="basis-1/4 flex flex-col items-start mx-auto gap-5">
          <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />

          {heroFormItems.map((item: HeroFormItem, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <CustomSelect labelText="Şehir" input={{ id: "city", name: "city" }} />
          <button
            type="submit"
            className={`px-4 py-2 rounded border-none outline-none bg-BG2 text-white self-end font-semibold hover:bg-BG1 cursor-pointer transition-all disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Güncelleniyor..." : "Güncelle"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HeroForm;
