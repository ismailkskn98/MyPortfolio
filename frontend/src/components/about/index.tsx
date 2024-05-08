import React from "react";
import MouseArrow from "./MouseArrow";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section id="hakkimda" className="w-full h-min bg-BG2">
      <main className="bg-about-bg flex flex-col items-center px-6 sm:px-16 lg:px-32 py-16 md:py-32 md:gap-32">
        <MouseArrow />
        <AboutContent />
      </main>
    </section>
  );
};

export default About;
