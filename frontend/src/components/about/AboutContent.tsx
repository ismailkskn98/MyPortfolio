import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";
import AboutTitle from "./AboutTitle";

const AboutContent = () => {
  return (
    <article
      id="aboutContainer"
      className="flex items-center gap-16 md:gap-32 px-0 md:pl-32 md:pr-16 flex-col xl:flex-row"
    >
      <div id="aboutContent" className="flex flex-col gap-8 sm:gap-16">
        <AboutTitle />
        <AboutText />
      </div>
      <AboutImage />
    </article>
  );
};

export default AboutContent;
