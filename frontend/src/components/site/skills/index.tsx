import React from "react";
import ModuleTitle from "../moduleTitle";

const Skills = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="beceriler" className="w-full h-min bg-BG1">
      <main className="flex flex-col items-center bg-skills-bg bg-right bg-no-repeat bg-cover gap-16 px-6 py-16 sm:p-16 lg:p-32">
        <ModuleTitle
          description="Öğrenmeyi ve gelişmeyi asla bırakmamaya çalışıyorum"
          title="Yetenekler"
          isHome={true}
        />
        {children}
      </main>
    </section>
  );
};

export default Skills;
