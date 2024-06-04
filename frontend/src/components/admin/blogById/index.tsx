import React from "react";

export type BlogByIdType = {
  id: string | number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  userId: string | number;
  Categories: {
    id: string | number;
    name: string;
    BlogCategory: { blogId: number; categoryId: number };
  }[];
  User: {
    id: string | number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
  };
};

const BlogById = ({ blog }: { blog: BlogByIdType }) => {
  return (
    <>
      <div>{blog.image}</div>
      <div>{blog.title}</div>
      <div>{blog.slug}</div>
    </>
  );
};

export default BlogById;
