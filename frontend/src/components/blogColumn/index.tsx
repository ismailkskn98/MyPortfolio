"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "@/../public/images/Image.png";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

type Props = {
  // image?: string,
  title: string;
  description: string;
};

const BlogColumn: React.FC<Props> = ({ title, description }) => {
  const [subTitle, setSubTitle] = useState<string>("");

  useEffect(() => {
    const words: string[] = description.split(" ");
    const newText =
      words.length <= 20 ? words.join(" ") + "..." : words.slice(0, 21).join(" ") + "...";
    setSubTitle(newText);
  }, [description]);

  return (
    <section className="w-full flex items-center justify-center">
      <article className="relative py-8 md:py-16 flex justify-center items-center">
        <div className="w-full absolute -top-[1px] left-0 h-[1px] bg-[#848484]"></div>
        <div className="flex items-center px-6 sm:px-[14px] gap-8 md:gap-16 flex-col md:flex-row">
          <Image src={image} alt="blog image" className="max-w-60 max-h-60" />
          <div id="blogInfo" className="flex flex-col gap-6">
            <h2 className="h2-u text-Brand1">{title}</h2>
            <p className="para-u text-White overflow-ellipsis">{subTitle}</p>
            <Link
              href={"#"}
              className="flex items-center gap-1 text-Brand1 decoration-White underline-offset-8 para-u group"
            >
              <span>Devamını Oku</span>
              <MdDoubleArrow className="group-hover:ml-1 transition-all" />
            </Link>
            <div
              id="label"
              className="flex flex-col md:items-center md:flex-row gap-6 text-White mt-2"
            >
              <div className="flex items-center justify-center flex-nowrap bg-Grey rounded-2xl px-2 py-1 Label-u-l h-min w-min">
                <p className="w-full min-w-[97px]">Web Developer</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="Label-u-l flex items-center gap-2">
                  <span className="Label-u-m">Text </span>
                  <span>İsmail</span>
                </span>
                <span className="Label-u-l flex items-center gap-2">
                  <span className="Label-u-m">Date </span>
                  <span>10/02/2023</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 h-[1px] bg-[#848484]"></div>
      </article>
    </section>
  );
};

export default BlogColumn;
