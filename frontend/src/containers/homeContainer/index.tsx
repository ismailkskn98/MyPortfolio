import Hero from "@/components/site/hero";
import React from "react";
import Left from "@/components/site/hero/left";
import Right from "@/components/site/hero/right";
import NavigationBar from "@/components/site/navigationBar";
import About from "@/components/site/about";
import Skills from "@/components/site/skills";
import Works from "@/components/site/works";
import BlogColumn from "@/components/site/blog/blogColumn";
import Content from "@/components/site/blog/blogColumn/Content";
import type { Blog } from "@/components/site/blog/blogColumn/Content";
import HomeBlog from "@/components/site/homeBlog";
import ModuleTitle from "@/components/site/moduleTitle";
import Contact from "@/components/site/contact";
import ContactTitle from "@/components/site/contact/ContactTitle";
import ContactForm from "@/components/site/contact/ContactForm";
import type { Hero as HeroType } from "@/app/(admin)/admin/hero/page";
import ImageName from "@/components/site/hero/left/ImageName";
import CardInfo from "@/components/site/hero/left/CardInfo";
import CvButton from "@/components/site/hero/left/CvButton";

const HomeContainer = async ({ blog, hero }: { blog: Blog; hero: HeroType }) => {
  return (
    <>
      <NavigationBar />
      <Hero>
        <Left>
          <ImageName hero={hero} />
          <CardInfo hero={hero} />
          <CvButton />
        </Left>
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
            description={blog.description}
            Categories={blog.Categories}
            createdAt={blog.createdAt}
            updatedAt={blog.updatedAt}
          />
        </BlogColumn>
      </HomeBlog>
      <Contact>
        <ContactTitle />
        <ContactForm />
      </Contact>
    </>
  );
};

export default HomeContainer;
