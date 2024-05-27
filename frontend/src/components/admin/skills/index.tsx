import type { SkillsType } from "@/app/(admin)/admin/yetenekler/page";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

// http://localhost:5029
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Skills = ({ data }: { data: SkillsType[] }) => {
  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8 bg-BG2 text-white">
      <h1 className="w-full flex items-center justify-center text-4xl">Yetenekler</h1>
      <section className="w-full flex justify-center items-center">
        <table className={styles.table}>
          <thead className={styles.th}>
            <tr>
              <td className={`${styles.td} w-60`}>İsim</td>
              <td className={`${styles.td} w-60`}>Resim</td>
              <td className={`${styles.td} w-60`}></td>
            </tr>
          </thead>
          <tbody>
            {data.map((item: SkillsType, i) => {
              return (
                <tr key={i}>
                  <td className={styles.td}>{item.name}</td>
                  <td className={`${styles.td} flex items-center justify-center`}>
                    <Image
                      src={`${BASE_URL}/${item.image}`}
                      alt="Yetenek Resmi"
                      width={130}
                      height={100}
                    />
                  </td>
                  <td className={`${styles.td}`}>
                    <Link
                      href={`/admin/yetenekler/${item.id}`}
                      className="mr-4 px-2 py-1 border-none outline-none rounded bg-JS text-white cursor-pointer hover:opacity-70"
                    >
                      Güncelle
                    </Link>
                    <Link
                      href={`/admin/yetenekler/${item.id}`}
                      className=" px-2 py-1 border-none outline-none rounded bg-red-600 text-white cursor-pointer hover:opacity-70"
                    >
                      Sil
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Skills;
