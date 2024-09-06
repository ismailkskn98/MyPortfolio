import React from "react";
import AboutImage from "./AboutImage";

const AboutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <article id="aboutContainer" className="flex items-center gap-16 md:gap-32 px-0 md:pl-32 md:pr-16 flex-col xl:flex-row">
      <div id="aboutContent" className="flex flex-row flex-wrap items-center md:items-start gap-8 sm:gap-16">
        {children}
      </div>
      <AboutImage />
    </article>
  );
};

export default AboutContent;
