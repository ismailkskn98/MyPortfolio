"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { ResponseData } from "../hero/HeroForm";
import InfoMessage from "../infoMessage";

// http://localhost:5029
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// http://localhost:7930/api
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

export type SkillsType = {
  id: number | string;
  name: string;
  image: string;
};

const Skills = ({ data }: { data: SkillsType[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillsType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleDeleteClick = (skill: SkillsType) => {
    setSelectedSkill(skill);
    setShow((prev) => !prev);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/admin/skills/delete/${selectedSkill?.id}`, {
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
      <h1 className="w-full flex items-center justify-center text-4xl">Yetenekler</h1>
      <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <InfoMessage errorMessage={errorMessage} successMessage={successMessage} />
        <table className="text-sm w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td scope="col" className="px-6 py-3">
                Resim
              </td>
              <td scope="col" className="px-6 py-3">
                İsim
              </td>
              <td scope="col" className="px-6 py-3"></td>
            </tr>
          </thead>
          <tbody>
            {data.map((item: SkillsType, i) => {
              return (
                <tr
                  key={i}
                  className="odd:bg-white odd:dark:bg-Grey even:bg-gray-50 even:dark:bg-BG2 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <Image src={`${BASE_URL}/${item.image}`} alt="Yetenek Resmi" width={130} height={100} />
                  </td>
                  <td className="px-6 py-4 text-base font-semibold capitalize">{item.name}</td>
                  <td className="px-6 py-4 max-w-28">
                    <Link
                      href={`/admin/yetenekler/${item.id}`}
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
              );
            })}
          </tbody>
        </table>
      </section>
      <ConfirmDeleteModal show={show} onClose={() => setShow((prev) => !prev)} onConfirm={handleConfirmDelete} />
    </main>
  );
};

export default Skills;
