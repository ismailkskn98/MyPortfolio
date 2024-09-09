import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

type RemarkProps = {
  createdAt: string | number | Date;
  description: string;
  firstname: string;
};

const Remark: React.FC<RemarkProps> = ({ createdAt, description, firstname }) => {
  const date = `${new Date(createdAt).getDate().toString().padStart(2, "0")}/${new Date(createdAt).getMonth() + 1}/${new Date(createdAt).getFullYear()}`;

  const wordsPerMinute = 900; // dakikada 900 karakter
  const wordCount = description.trim().length;
  const read = Math.ceil(wordCount / wordsPerMinute);

  return (
    <article id="remark" className="w-full flex flex-col gap-4">
      <div id="line" className="w-full h-[1px] bg-Grey/70"></div>
      <div className="flex items-center justify-between px-6">
        <Link href={"/blogs"} className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full p-2 bg-Brand2 transition-all hover:bg-Brand1">
          <IoChevronBack className="w-4 h-4 text-BG1" />
        </Link>
        <div className="flex items-center gap-6 text-White">
          <div className="flex items-center gap-2">
            <span className="Label-u-m">Yazar </span>
            <span className="Label-u-l">{firstname}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="Label-u-m">Tarih </span>
            <span className="Label-u-l">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="Label-u-m">Okuma Süresi </span>
            <span className="Label-u-l">{read} Dk</span>
          </div>
        </div>
      </div>
      <div id="line" className="w-full h-[1px] bg-Grey/70"></div>
    </article>
  );
};

export default Remark;
