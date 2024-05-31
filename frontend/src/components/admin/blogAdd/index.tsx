"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BlogSchema } from "./BlogSchema";
import { BlogItem, blogItems } from "./BlogItems";
import CustomInput from "./CustomInput";
import Tiptap from "./Tiptap";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type Categories = {
  id: number | string;
  name: string;
};

type InitialValues = {
  title: string;
  subtitle: string;
  description: string;
  image: File | null;
  categories: [];
};

const initialValues: InitialValues = {
  title: "",
  subtitle: "",
  description: "",
  image: null,
  categories: [],
};

const BlogAdd = ({ categories }: { categories: Categories[] }) => {
  const [fileControl, setFileControl] = useState<boolean>(false);

  const handleSubmit = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
      <h1 className="w-full flex items-center justify-center text-4xl">Blog Ekle</h1>
      <section className="w-full flex items-center justify-center">
        <Formik initialValues={initialValues} validationSchema={BlogSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, isValid, setFieldValue }) => (
            <Form className="w-full flex items-start justify-between gap-10 px-16">
              <article className="w-full flex flex-col gap-5">
                {blogItems.map((item: BlogItem, i) => (
                  <CustomInput key={i} {...item} />
                ))}
                <label htmlFor="description" className="font-semibold">
                  Açıklama
                </label>
                <Tiptap name="description" />
                {!isValid && (
                  <p className="-mt-3 text-sm text-red-500">*Lütfen en az 50 karakter giriniz</p>
                )}
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="image" className="font-semibold">
                    Resim
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="w-full border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
                    onChange={(event) => {
                      if (event.currentTarget.files) {
                        setFileControl(true);
                        return setFieldValue("image", event.currentTarget.files[0]);
                      }
                      setFileControl(false);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className={`px-4 py-2 mt-3 rounded border-none outline-none bg-BG2 text-white self-center font-semibold hover:bg-BG1 cursor-pointer transition-all disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed`}
                  disabled={!isValid || !fileControl}
                >
                  {isSubmitting ? "Kaydediliyor..." : "Kaydet"}
                </button>
              </article>
              <article className="flex flex-col gap-2 border-r-0 border-b-0 border-l-0 border-t border-solid border-black-500/50 pt-4 w-40">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <Field
                      type="checkbox"
                      name="categories"
                      value={category.name}
                      id={category.name}
                      className="w-[14px] h-[14px]"
                    />
                    <label htmlFor={category.name} className="capitalize whitespace-nowrap">
                      {category.name}
                    </label>
                  </div>
                ))}
                <ErrorMessage
                  name="categories"
                  component="p"
                  className="text-red-600 text-sm pl-1"
                />
              </article>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default BlogAdd;
