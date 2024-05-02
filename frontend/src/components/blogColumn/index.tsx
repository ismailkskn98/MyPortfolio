import React from "react";
import type { Blog } from "./Content";
import Content from "./Content";

export type Props = {
  blog: Blog;
};

const BlogColumn: React.FC<Props> = ({ blog }) => {
  return (
    <section className="w-full flex items-center justify-center">
      <article className="relative py-8 md:py-16 flex justify-center items-center">
        <div id="line" className="w-full absolute -top-[1px] left-0 h-[1px] bg-[#848484]"></div>
        <Content
          subtitle={blog.subtitle}
          title={blog.title}
          createdAt={blog.createdAt}
          Categories={blog.Categories}
          User={blog.User}
        />
        <div id="line" className="w-full absolute bottom-0 left-0 h-[1px] bg-[#848484]"></div>
      </article>
    </section>
  );
};

export default BlogColumn;
