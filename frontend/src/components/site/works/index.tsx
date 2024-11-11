import React from "react";
import ModuleTitle from "../moduleTitle";

const Works = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="isler" className="fluid container-fluid bg-BG2">
      <main className="fluid bg-works-bg bg-repeat-x flex flex-col items-center gap-16 py-14">
        <ModuleTitle description="Bu harika projelerde çalışmaktan keyif aldım" title="İşler" isHome={true} />
        {children}
      </main>
    </section>
  );
};

export default Works;
