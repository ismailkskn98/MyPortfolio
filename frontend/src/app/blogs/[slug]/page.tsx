import React from "react";

const Blog = ({ params }: { params: { slug: string } }) => {
  return <div>Blog: {params.slug}</div>;
};

export default Blog;
