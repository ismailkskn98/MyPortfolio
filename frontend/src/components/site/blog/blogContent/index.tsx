import React from "react";
import Remark from "./Remark";
import BlogImage from "./BlogImage";
import Content from "./Content";
// types
import type { BlogType } from "@/types";
import Categories from "./Categories";

const BlogContent: React.FC<{ blog: BlogType }> = ({ blog }) => {
  return (
    <section className="py-16 md:py-32 w-full h-full flex items-center justify-center text-White">
      <main className="max-w-[50rem] flex flex-col gap-8">
        <h1 className="text-Brand1 h2-u">{blog.title}</h1>
        <Remark createdAt={blog.createdAt} description={blog.description} firstname={blog.user.firstname} />
        <BlogImage image={blog.image} title={blog.title} />
        <Content description={blog.description} />
        <Categories categories={blog.categories} />
        <Remark createdAt={blog.createdAt} description={blog.description} firstname={blog.user.firstname} />
      </main>
    </section>
  );
};

export default BlogContent;
