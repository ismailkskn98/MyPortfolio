import React from "react";

type Props = {
  blog: {
    title: string;
    slug: string;
    subtitle: String;
    description: string;
    Categories: {
      name: string;
      BlogCategory: { blogId: number; categoryId: number };
    }[];
    User: {
      firstname: string;
      lastname: string;
    };
  };
};

const BlogContent: React.FC<Props> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <span>{blog.title}</span>
      <span>{blog.slug}</span>
      <span>{blog.subtitle}</span>
      <span>{blog.description}</span>
      <span>
        {blog.Categories.map((category, index) => (
          <span key={index}>{category.name}</span>
        ))}
      </span>
      <span>{blog.User.firstname}</span>
      <span>{blog.User.lastname}</span>
    </div>
  );
};

export default BlogContent;
