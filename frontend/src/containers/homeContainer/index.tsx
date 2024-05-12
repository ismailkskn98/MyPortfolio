import Hero from "@/components/hero";
import React from "react";
import Left from "@/components/hero/left";
import Right from "@/components/hero/right";
import NavigationBar from "@/components/navigationBar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Works from "@/components/works";
import BlogColumn from "@/components/blog/blogColumn";
import Content from "@/components/blog/blogColumn/Content";
import type { Blog } from "@/components/blog/blogColumn/Content";
import HomeBlog from "@/components/homeBlog";
import ModuleTitle from "@/components/moduleTitle";
import Contact from "@/components/contact";

const HomeContainer = async ({ blog }: { blog: Blog }) => {
  return (
    <>
      <NavigationBar />
      <Hero>
        <Left />
        <Right />
      </Hero>
      <About />
      <Skills />
      <Works />
      <HomeBlog>
        <ModuleTitle
          title="Blogs"
          description="Teknoloji ve iş dünyası hakkındaki düşüncelerim, takip edebilirsiniz"
          isHome={true}
        />
        <BlogColumn>
          <Content
            title={blog.title}
            subtitle={blog.subtitle}
            slug={blog.slug}
            User={blog.User}
            Categories={blog.Categories}
            createdAt={blog.createdAt}
          />
        </BlogColumn>
      </HomeBlog>
      <Contact />
    </>
  );
};

export default HomeContainer;
