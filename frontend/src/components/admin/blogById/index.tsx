"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import InfoMessage from "../infoMessage";
import { AuthFromClient } from "@/hooks/AuthFromClient";
import { blogItems } from "./blogItems";
import CustomInput from "./CustomInput";
import Tiptap from "./Tiptap";
import { BlogSchema } from "./BlogSchema";
import Image from "next/image";
import { useRouter } from "next/navigation";
// types
import type { BlogItem } from "../blogAdd/BlogItems";
import type { BlogByIdType, CategoriesType, ErrorResponse } from "@/types";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
// http://localhost:7930
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type InitialValues = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: File | null;
  currentImage: string;
  userId: string | number;
  categoryIds: (string | number)[];
  User: {
    id: string | number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
  };
};

const BlogById = ({ blog, categories }: { blog: BlogByIdType; categories: CategoriesType[] }) => {
  const tokenPayload = AuthFromClient();
  const router = useRouter();
  const [fileControl, setFileControl] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const initialValues: InitialValues = {
    title: blog.title,
    slug: blog.slug,
    subtitle: blog.subtitle,
    description: blog.description,
    image: null,
    currentImage: blog.image,
    userId: blog.userId,
    categoryIds: blog.Categories.map((category) => category.id),
    User: blog.User,
  };

  const handleSubmit = async (values: InitialValues) => {
    const formData = new FormData();
    formData.append("id", blog.id.toString());
    formData.append("title", values.title);
    formData.append("subtitle", values.subtitle);
    formData.append("description", values.description);
    formData.append("userId", values.userId.toString());
    formData.append("categoryIds", JSON.stringify(values.categoryIds));
    formData.append("currentImage", values.currentImage);
    if (fileControl && values.image) {
      formData.append("image", values.image);
    }

    try {
      const response = await fetch(`${BASE_URL_API}/admin/blogs/${blog.id}`, {
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
        router.replace(`/admin/bloglarim`);
      }, 3500);
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
  }, [successMessage, errorMessage]);

  return (
    <>
      <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
        <h1 className="w-full flex items-center justify-center text-4xl">Blog Ekle</h1>
        <section className="w-full flex flex-col">
          <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />
          <Formik initialValues={initialValues} validationSchema={BlogSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, isValid, setFieldValue, values }) => (
              <Form className="w-full flex items-start justify-between gap-10 px-16" encType="multipart/form-data">
                <article className="w-full flex flex-col gap-5">
                  {blogItems.map((item: BlogItem, i) => (
                    <CustomInput key={i} {...item} />
                  ))}
                  <label htmlFor="description" className="font-semibold">
                    Açıklama
                  </label>
                  <Tiptap name="description" />
                  {!isValid && <p className="-mt-3 text-sm text-red-500">*Lütfen en az 50 karakter giriniz. Tüm alanları doldurduktan sonra bu uyarı kaybolur.</p>}
                  <div className="flex flex-col items-start gap-2">
                    <div className="relative w-44 h-44 bg-BG2 p-3 rounded">
                      <Image src={`${BASE_URL}/${blog.image}`} fill={true} alt={blog.title} className="rounded" />
                    </div>
                    <label htmlFor="image" className="font-semibold">
                      Resim
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      ref={fileInputRef}
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
                    disabled={!isValid}
                  >
                    {isSubmitting ? "Kaydediliyor..." : "Kaydet"}
                  </button>
                </article>
                <article className="flex flex-col gap-2 border-r-0 border-b-0 border-l-0 border-t border-solid border-black-500/50 pt-4 w-40">
                  {categories.map((category) => (
                    <div key={category._id} className="flex items-center gap-3">
                      <Field
                        type="checkbox"
                        name="categoryIds"
                        value={category._id}
                        id={category.name}
                        className="w-[14px] h-[14px]"
                        onChange={() => {
                          const isChecked = values.categoryIds.includes(category._id);
                          if (isChecked) {
                            setFieldValue(
                              "categoryIds",
                              values.categoryIds.filter((values) => values !== category._id)
                            );
                          } else {
                            setFieldValue("categoryIds", [...values.categoryIds, category._id]);
                          }
                        }}
                      />
                      <label htmlFor={category.name} className="capitalize whitespace-nowrap">
                        {category.name}
                      </label>
                    </div>
                  ))}
                  <ErrorMessage name="categoryIds" component="p" className="text-red-600 text-sm pl-1" />
                </article>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </>
  );
};

export default BlogById;
