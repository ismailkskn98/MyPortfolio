import React from "react";

const About = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="hakkimda" className="w-full h-min bg-BG2">
      <main className="bg-about-bg bg-center bg-no-repeat bg-cover flex flex-col items-center md:gap-32 px-6  py-16 sm:px-16 lg:px-32 md:py-28">{children}</main>
    </section>
  );
};

export default About;
