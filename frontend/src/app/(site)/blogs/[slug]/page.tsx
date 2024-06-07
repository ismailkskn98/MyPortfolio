import BlogContent from "@/components/site/blog/blogContent";
import type { Blog } from "@/components/site/blog/blogContent";
import BlogContainer from "@/containers/blogContainer";
import { homeAPI } from "@/helper/homeAPI";
import React from "react";

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog: Blog | string = await homeAPI("blogs", params.slug, "GET");

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
