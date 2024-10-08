import parse from "html-react-parser";
import React from "react";
// types
import type { AboutType } from "@/types";

const AboutText = ({ about }: { about: AboutType[] }) => {
  return (
    <div id="aboutText" className="w-full flex flex-col gap-4 px-6 sm:px-10 py-6 bg-BG1 rounded-[40px]">
      <p className="code-m text-Brand2">{"<p>"}</p>
      <p className="block logo-m text-Brand1">Selam!</p>
      <div className="text-white para-m leading-7">{parse(about[0].about)}</div>
      <p className="code-m text-Brand2">{"</p>"}</p>
    </div>
  );
};

export default AboutText;
