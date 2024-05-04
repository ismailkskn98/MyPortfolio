import React from "react";

const BASE_URL = process.env.BASE_URL;

const getBlog = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs/${slug}`);
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  await getBlog(params.slug);
  return <div className="text-White">Blog: {params.slug}</div>;
};

export default Blog;
