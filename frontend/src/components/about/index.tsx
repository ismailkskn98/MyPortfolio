import React from "react";
import MouseArrow from "./MouseArrow";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section id="hakkimda" className="w-full h-min bg-BG2">
      <main className="w-full bg-about-bg px-6 sm:px-16 lg:px-32 py-16 md:py-32 flex flex-col items-center md:gap-32">
        <MouseArrow />
        <AboutContent />
      </main>
    </section>
  );
};

export default About;
