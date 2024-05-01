import BlogColumn from "@/components/blogColumn";
import React from "react";

const HomeContainer = () => {
  return (
    <div className="container">
      <BlogColumn
        description="Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet"
        title="What does it take to become a web developer?"
      />
      <BlogColumn
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi eos tempore quo reprehenderit doloremque debitis ab eveniet facilis quae!"
        title="Title Alanı"
      />
    </div>
  );
};

export default HomeContainer;
