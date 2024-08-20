import React from "react";
import parse from "html-react-parser";

export type Blog = {
  _id: string | number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  createdAt: Date | string | number;
  user: {
    _id: string | number;
    firstname: string;
    lastname?: string;
  };
  categories: {
    _id: string | number;
    name: string;
  }[];
};

const BlogContent: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <span>{blog.title}</span>
      <span>{blog.slug}</span>
      <span>{blog.subtitle}</span>
      <span>{parse(blog.description)}</span>
      <span>
        {blog.categories.map((category, index) => (
          <span key={index}>{category.name}</span>
        ))}
      </span>
      <span>{blog.user.firstname}</span>
      {blog.user.lastname && <span>{blog.user.lastname}</span>}
    </div>
  );
};

export default BlogContent;
