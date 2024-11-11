import BlogColumn from "@/components/site/blog/blogColumn";
import Content from "@/components/site/blog/blogColumn/Content";
import ModuleTitle from "@/components/site/moduleTitle";
import React from "react";
// types
import type { BlogColumnType } from "@/types";

type Props = {
  blogs: BlogColumnType[];
};

const BlogsContainer: React.FC<Props> = ({ blogs }) => {
  return (
    <section className="fluid container-fluid flex flex-col items-center justify-items-center gap-16 py-16 md:py-32 ">
      <ModuleTitle title="Blogs" description="Teknoloji ve iş dünyası hakkındaki düşüncelerim, takip edebilirsin" isHome={false} />
      <main className="w-full h-min flex flex-col items-center">
        {blogs?.map((blog: BlogColumnType, i: number) => (
          <BlogColumn isHome={false} key={i}>
            <Content _id={blog._id} title={blog.title} subtitle={blog.subtitle} slug={blog.slug} createdAt={blog.createdAt} user={blog.user} categories={blog.categories} />
          </BlogColumn>
        ))}
      </main>
    </section>
  );
};

export default BlogsContainer;
