import React from "react";

const About = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="hakkimda" className="w-full h-min bg-BG2">
      <main className="container bg-about-bg bg-center bg-no-repeat bg-cover flex flex-col items-center gap-16 xl:gap-32 px-3 py-16 md:py-28 pt-24">{children}</main>
    </section>
  );
};

export default About;
