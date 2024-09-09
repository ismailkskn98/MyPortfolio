import BlogContent from "@/components/site/blog/blogContent";
import BlogContainer from "@/containers/blogContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";
import { Metadata } from "next";
import { metadata as meta } from "@/components/MetaData";
// types
import type { BlogType } from "@/types";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const responseBlog: BlogType | string = await fetchApi<BlogType>(`blogs/${params.slug}`);

  if (typeof responseBlog === "string") throw new Error(`${responseBlog}`);

  return {
    ...meta,
    description: responseBlog.subtitle,
    title: responseBlog.title,
  };
}

const Blog = async ({ params }: { params: { slug: string } }) => {
  const responseBlog: BlogType | string = await fetchApi<BlogType>(`blogs/${params.slug}`);

  if (typeof responseBlog === "string") throw new Error(`${responseBlog}`);
  return (
    <BlogContainer>
      <BlogContent blog={responseBlog} />
    </BlogContainer>
  );
};

export default Blog;
