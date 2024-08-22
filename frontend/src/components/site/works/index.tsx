import React from "react";
import ModuleTitle from "../moduleTitle";

const Works = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="isler" className="w-full h-min bg-BG2">
      <main className="bg-works-bg bg-repeat-x flex flex-col items-center gap-16 px-6 py-16 md:p-16 xl:p-32">
        <ModuleTitle description="Bu harika projelerde çalışmaktan keyif aldım" title="İşler" isHome={true} />
        {children}
      </main>
    </section>
  );
};

export default Works;
