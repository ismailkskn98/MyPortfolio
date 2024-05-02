import React, { use } from "react";
import Readmore from "./Readmore";
import Info from "./Info";
import Image from "next/image";
import image from "@/../public/images/Image.png";

export type Blog = {
  // image?: string,
  title: string;
  subtitle: string;
  User: {
    firstname: string;
  };
  Categories: [
    {
      name: string;
    }
  ];
  createdAt: string;
};

const Content: React.FC<Blog> = ({ title, subtitle, createdAt, Categories, User }) => {
  return (
    <div className="flex items-center px-6 sm:px-[14px] gap-8 md:gap-16 flex-col md:flex-row">
      <Image src={image} alt="blog image" className="max-w-60 max-h-60" />
      <div id="content" className="flex flex-col gap-6">
        <h2 className="h2-u text-Brand1">{title}</h2>
        <p className="para-u text-White overflow-ellipsis">{subtitle}</p>
        <Readmore />
        <Info createdAt={createdAt} author={User.firstname} tag={Categories[0].name} />
      </div>
    </div>
  );
};

export default Content;
