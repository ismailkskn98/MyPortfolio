import React from "react";
import parse from "html-react-parser";

export type Blog = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  createdAt: Date | string | number;
  updatedAt: Date | string | number;
  Categories: {
    name: string;
    BlogCategory: { blogId: number; categoryId: number };
  }[];
  User: {
    firstname: string;
    lastname?: string | undefined; // lastname alanı isteğe bağlı olmalıdır
  };
};

const BlogContent: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <span>{blog.title}</span>
      <span>{blog.slug}</span>
      <span>{blog.subtitle}</span>
      <span>{parse(blog.description)}</span>
      <span>
        {blog.Categories.map((category, index) => (
          <span key={index}>{category.name}</span>
        ))}
      </span>
      <span>{blog.User.firstname}</span>
      {blog.User.lastname && <span>{blog.User.lastname}</span>}
    </div>
  );
};

export default BlogContent;
