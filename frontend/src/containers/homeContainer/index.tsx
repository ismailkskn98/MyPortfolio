import React from "react";
// type
import type { Blog } from "@/components/site/blog/blogColumn/Content";

// Components
import Hero from "@/components/site/hero";
import Left from "@/components/site/hero/left";
import Right from "@/components/site/hero/right";
import NavigationBar from "@/components/site/navigationBar";
import About from "@/components/site/about";
import Skills from "@/components/site/skills";
import Works from "@/components/site/works";
import HomeBlog from "@/components/site/homeBlog";
import ModuleTitle from "@/components/site/moduleTitle";
import Contact from "@/components/site/contact";
import ContactTitle from "@/components/site/contact/ContactTitle";
import ContactForm from "@/components/site/contact/ContactForm";
import BlogColumn from "@/components/site/blog/blogColumn";
import Content from "@/components/site/blog/blogColumn/Content";
import ImageName from "@/components/site/hero/left/ImageName";
import CardInfo from "@/components/site/hero/left/CardInfo";
import CvButton from "@/components/site/hero/left/CvButton";
import MouseArrow from "@/components/site/about/MouseArrow";
import AboutContent from "@/components/site/about/AboutContent";
import AboutTitle from "@/components/site/about/AboutTitle";
import AboutText from "@/components/site/about/AboutText";
import SkillsContent from "@/components/site/skills/SkillsContent";
import SkillsContentServices from "@/components/site/skills/SkillsContentServices";
import SkillsContentSkills from "@/components/site/skills/SkillsContentSkills";
import { HeroType } from "@/components/admin/hero/HeroForm";
import { AboutType } from "@/components/admin/about";
import { SkillsType } from "@/components/admin/skills";

const HomeContainer = ({
  blog,
  hero,
  about,
  skills,
}: {
  blog: Blog;
  hero: HeroType;
  about: AboutType;
  skills: SkillsType[];
}) => {
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
      <About>
        <MouseArrow />
        <AboutContent>
          <AboutTitle />
          <AboutText about={about} />
        </AboutContent>
      </About>
      <Skills>
        <SkillsContent>
          <SkillsContentServices />
          <SkillsContentSkills skills={skills} />
        </SkillsContent>
      </Skills>
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
