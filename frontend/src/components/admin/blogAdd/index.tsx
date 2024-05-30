"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
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
};

const initialValues: InitialValues = {
  title: "",
  subtitle: "",
  description: "",
};

const BlogAdd = ({ categories }: { categories: Categories[] }) => {
  const handleSubmit = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
      <h1 className="w-full flex items-center justify-center text-4xl">Blog Ekle</h1>
      <section className="w-full flex items-center justify-center">
        <Formik initialValues={initialValues} validationSchema={BlogSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, isValid }) => (
            <Form className="w-full flex items-start justify-between gap-10 px-16">
              <article className="w-full flex flex-col gap-5">
                {blogItems.map((item: BlogItem, i) => (
                  <CustomInput key={i} {...item} />
                ))}
                <label htmlFor="description" className="font-semibold">
                  Açıklama
                </label>
                <Tiptap name="description" />
                <button
                  type="submit"
                  className={`px-4 py-2 mt-3 rounded border-none outline-none bg-BG2 text-white self-center font-semibold hover:bg-BG1 cursor-pointer transition-all disabled:bg-gray-600 disabled:text-white disabled:cursor-not-allowed`}
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Kaydediliyor..." : "Kaydet"}
                </button>
              </article>
              <article className="flex flex-col gap-2 border-r-0 border-b-0 border-l-0 border-t border-solid border-black-500/50 pt-4">
                {categories.map((category: Categories) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="categories[]"
                      id={category.name}
                      className="w-[14px] h-[14px]"
                    />
                    <label htmlFor={category.name} className="capitalize whitespace-nowrap">
                      {category.name}
                    </label>
                  </div>
                ))}
              </article>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default BlogAdd;
