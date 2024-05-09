import React from "react";
import ModuleTitle from "../moduleTitle";
import IslerContent from "./IslerContent";

const Works = () => {
  return (
    <section id="isler" className="w-full h-min bg-BG2">
      <main className="bg-works-bg  bg-repeat-x flex flex-col items-center gap-16 p-32">
        <ModuleTitle
          description="Bu harika projelerde çalışmaktan keyif aldım"
          title="İşler"
          isHome={true}
        />
        <IslerContent />
      </main>
    </section>
  );
};

export default Works;
