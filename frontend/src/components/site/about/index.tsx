import React from "react";

const About = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="hakkimda" className="fluid container-fluid bg-BG2">
      <main className="container bg-about-bg bg-center bg-no-repeat bg-cover flex flex-col items-center gap-16 xl:gap-32 px-3 py-14">{children}</main>
    </section>
  );
};

export default About;
