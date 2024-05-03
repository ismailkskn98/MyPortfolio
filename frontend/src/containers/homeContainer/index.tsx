import BlogColumn from "@/components/blogColumn";
import { Blog } from "@/components/blogColumn/Content";
import React from "react";

type Props = {
  blogs: Blog[];
};

const HomeContainer: React.FC<Props> = async ({ blogs }) => {
  return (
    <div className="container">
      {/* {blogs?.map((blog: Blog, i: number) => (
        <BlogColumn key={i} blog={blog} />
      ))} */}
    </div>
  );
};

export default HomeContainer;
