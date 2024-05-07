import Hero from "@/components/hero";
import React from "react";
import Left from "@/components/hero/left";
import Right from "@/components/hero/right";
import NavigationBar from "@/components/navigationBar";
import About from "@/components/about";
import Skills from "@/components/skills";

type Props = {};

const HomeContainer: React.FC<Props> = async () => {
  return (
    <>
      <NavigationBar />
      <Hero>
        <Left />
        <Right />
      </Hero>
      <About />
      <Skills />
    </>
  );
};

export default HomeContainer;
