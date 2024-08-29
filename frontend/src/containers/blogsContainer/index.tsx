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
    <div className="px-6 lg:px-8 xl:px-32 flex flex-col items-center gap-16">
      <ModuleTitle title="Blogs" description="Teknoloji ve iş dünyası hakkındaki düşüncelerim, takip edebilirsin" isHome={false} />
      <main>
        {blogs?.map((blog: BlogColumnType, i: number) => (
          <BlogColumn key={i}>
            <Content _id={blog._id} title={blog.title} subtitle={blog.subtitle} slug={blog.slug} createdAt={blog.createdAt} user={blog.user} categories={blog.categories} />
          </BlogColumn>
        ))}
      </main>
    </div>
  );
};

export default BlogsContainer;
