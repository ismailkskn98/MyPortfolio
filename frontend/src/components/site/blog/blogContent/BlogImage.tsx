import React from "react";
import Image from "next/image";

type BlogImageProps = {
  title: string;
  image: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogImage: React.FC<BlogImageProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-96 rounded-sm shadow-lg">
      <Image
        src={`${BASE_URL}/${image}`}
        alt={title}
        fill
        className="rounded-sm shadow-sm object-cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUklN+DwACAQFMqoz9TAAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default BlogImage;
