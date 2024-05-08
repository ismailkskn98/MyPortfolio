import React from "react";
import ModuleTitle from "../moduleTitle";
import SkillsContent from "./SkillsContent";

const Skills = () => {
  return (
    <section id="beceriler" className="w-full h-min px-6 py-16 sm:p-16 lg:p-32">
      <main className="flex flex-col items-center gap-16">
        <ModuleTitle
          description="Öğrenmeyi ve gelişmeyi asla bırakmamaya çalışıyorum"
          title="Beceriler"
          isHome={true}
        />
        <SkillsContent />
      </main>
    </section>
  );
};

export default Skills;
