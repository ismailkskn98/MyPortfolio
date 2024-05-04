import BlogColumn from "@/components/blogColumn";
import { Blog } from "@/components/blogColumn/Content";
import ModuleTitle from "@/components/moduleTitle";
import React from "react";

type Props = {
  blogs: Blog[];
};

const BlogContainer: React.FC<Props> = ({ blogs }) => {
  return (
    <div className="px-6 lg:px-8 xl:px-32 flex flex-col items-center gap-16">
      <ModuleTitle
        title="Blogs"
        description="Teknoloji ve iş dünyası hakkındaki düşüncelerim, takip edebilirsin!"
        isHome={false}
      />
      <section>
        {blogs?.map((blog: Blog, i: number) => (
          <BlogColumn key={i} blog={blog} />
        ))}
      </section>
    </div>
  );
};

export default BlogContainer;
