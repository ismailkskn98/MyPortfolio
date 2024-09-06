import React from "react";
import Image from "next/image";
import blogImage from "@/../public/images/Image.png";

type BlogImageProps = {
  title: string;
  image: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogImage: React.FC<BlogImageProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-96 rounded-sm">
      {/* <Image src={`${BASE_URL}/${blog.image}`} alt={blog.title} fill /> */}
      <Image src={blogImage} alt={title} fill className="rounded-sm shadow-sm" />
    </div>
  );
};

export default BlogImage;
