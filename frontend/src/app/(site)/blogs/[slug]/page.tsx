import BlogContent from "@/components/site/blog/blogContent";
import BlogContainer from "@/containers/blogContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";
// types
import type { BlogType } from "@/types";

const Blog = async ({ params }: { params: { slug: string } }) => {
  const responseBlog: BlogType | string = await fetchApi<BlogType>(`blogs/${params.slug}`);

  if (typeof responseBlog === "string") throw new Error(`${responseBlog}`);

  return (
    <div className="text-White">
      <BlogContainer>
        <BlogContent blog={responseBlog} />
      </BlogContainer>
    </div>
  );
};

export default Blog;
