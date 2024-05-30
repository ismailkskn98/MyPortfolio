import BlogContent from "@/components/site/blog/blogContent";
import type { Blog } from "@/components/site/blog/blogContent";
import BlogContainer from "@/containers/blogContainer";
import { errorMessage } from "@/helper/homeAPI";
import React from "react";

const BASE_URL_API = process.env.BASE_URL_API;

const getBlog = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL_API}/blogs/${slug}`);
    if (!response.ok) {
      const errorMessage: errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog: Blog | string = await getBlog(params.slug);

  if (typeof blog === "string") {
    throw new Error(blog);
  }
  return (
    <div className="text-White">
      <BlogContainer>
        <BlogContent blog={blog} />
      </BlogContainer>
    </div>
  );
};

export default Blog;
