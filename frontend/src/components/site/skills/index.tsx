import React from "react";
import ModuleTitle from "../moduleTitle";

const Skills = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="beceriler" className="fluid container-fluid bg-skills-bg bg-right bg-no-repeat bg-cover">
      <main className="flex flex-col items-center gap-16 px-3 lg:px-32 py-14">
        <ModuleTitle description="Öğrenmeyi ve gelişmeyi asla bırakmamaya çalışıyorum" title="Yetenekler" isHome={true} />
        {children}
      </main>
    </section>
  );
};

export default Skills;
