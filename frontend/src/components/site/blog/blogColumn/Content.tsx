import React, { use } from "react";
import Readmore from "./Readmore";
import Info from "./Info";
import Image from "next/image";
import image from "@/../public/images/Image.png";
import Link from "next/link";

export type Blog = {
  _id: string | number;
  title: string;
  subtitle: string;
  slug: string;
  createdAt: string;
  user: {
    _id: string | number;
    firstname: string;
  };
  categories: [{ name: string }];
};

const Content: React.FC<Blog> = ({ title, subtitle, slug, createdAt, categories, user }) => {
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
        <Info createdAt={createdAt} author={user.firstname} tag={categories[0].name} />
      </div>
    </div>
  );
};

export default Content;
