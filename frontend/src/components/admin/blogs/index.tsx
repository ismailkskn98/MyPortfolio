"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ResponseData } from "../hero/HeroForm";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import InfoMessage from "../infoMessage";

// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type BlogsType = {
  id: number | string;
  title: string;
  subtitle: string;
  userId: number | string;
  Categories: {
    name: string;
    BlogCategory: { blogId: number; categoryId: number };
  }[];
};

const Blogs = ({ blogs }: { blogs: BlogsType[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogsType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleDeleteClick = (blog: BlogsType) => {
    setSelectedBlog(blog);
    setShow((prev) => !prev);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/admin/blogs/delete/${selectedBlog?.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        setShow(false);
        return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }

      const data: ResponseData = await response.json();
      if (data.error) {
        setShow(false);
        return setErrorMessage(data.message);
      }
      setShow(false);
      return setSuccessMessage(data.message);
    } catch (error) {
      setShow(false);
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
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8 bg-BG2 text-white">
      <h1 className="w-full flex items-center justify-center text-4xl">Bloglarım</h1>
      <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />
        <table className="text-sm w-full text-left rtl:text-right text-gray-300">
          <thead className="font-bold  uppercase bg-gray-700 text-gray-300">
            <tr>
              <td scope="col" className="px-6 py-3">
                ID
              </td>
              <td scope="col" className="px-6 py-3">
                Resim
              </td>
              <td scope="col" className="px-6 py-3">
                Baslik
              </td>
              <td scope="col" className="px-6 py-3">
                Kategori
              </td>
              <td scope="col" className="px-6 py-3"></td>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => (
              <tr key={item.id} className="odd:bg-Grey even:bg-BG2 border-b border-gray-700">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">Resim</td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs">{item.subtitle}</p>
                </td>
                <td className="px-6 py-4">
                  {item.Categories.map((category, i) => (
                    <p key={i}>{category.name}</p>
                  ))}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/bloglarim/${item.id}`}
                    className="mr-4 px-2 py-2 border-none outline-none rounded bg-JS text-white cursor-pointer hover:opacity-70"
                  >
                    Güncelle
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(item)}
                    className="px-3 py-2 border-none outline-none rounded bg-red-600 text-white cursor-pointer hover:opacity-70"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <ConfirmDeleteModal
        show={show}
        onClose={() => setShow((prev) => !prev)}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
};

export default Blogs;
