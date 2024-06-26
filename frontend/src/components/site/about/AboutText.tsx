import { AboutType } from "@/app/(admin)/admin/hakkimda/page";
import parse from "html-react-parser";
import React from "react";

const AboutText = ({ about }: { about: AboutType }) => {
  return (
    <div id="aboutText" className="flex flex-col gap-4 px-6 sm:px-10 py-6 bg-BG1 rounded-[40px]">
      <p className="code-m text-Brand2">{"<p>"}</p>
      <p className="block logo-m text-Brand1">Selam!</p>
      <div className="text-white para-m">{parse(about.about)}</div>
      <p className="code-m text-Brand2">{"</p>"}</p>
    </div>
  );
};

export default AboutText;
