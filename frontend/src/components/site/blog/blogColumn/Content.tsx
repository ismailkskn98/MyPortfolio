import React, { use } from "react";
import Readmore from "./Readmore";
import Info from "./Info";
import Image from "next/image";
import image from "@/../public/images/Image.png";
import Link from "next/link";

export type Blog = {
  // image?: string,
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  User: {
    firstname: string;
  };
  Categories: [
    {
      name: string;
    }
  ];
};

const Content: React.FC<Blog> = ({ title, subtitle, slug, createdAt, Categories, User }) => {
  return (
    <div className="flex items-center px-6 sm:px-[14px] gap-8 md:gap-16 flex-col md:flex-row">
      <Link href={`blogs/${slug}`}>
        <Image src={image} alt="blog image" className="max-w-60 max-h-60" />
      </Link>
      <div id="content" className="flex flex-col gap-6">
        <Link href={`blogs/${slug}`}>
          <h2 className="h2-u text-Brand1">{title}</h2>
        </Link>
        <p className="para-u text-White overflow-ellipsis">{subtitle}</p>
        <Readmore slug={slug} />
        <Info createdAt={createdAt} author={User.firstname} tag={Categories[0].name} />
      </div>
    </div>
  );
};

export default Content;
