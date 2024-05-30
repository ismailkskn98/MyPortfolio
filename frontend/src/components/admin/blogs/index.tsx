import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

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
  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8 bg-BG2 text-white">
      <h1 className="w-full flex items-center justify-center text-4xl">Bloglarım</h1>
      <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  <Link
                    href={`/admin/bloglarim/delete/${item.id}`}
                    className="px-2 py-2 border-none outline-none rounded bg-red-600 text-white cursor-pointer hover:opacity-70"
                  >
                    Sil
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Blogs;
