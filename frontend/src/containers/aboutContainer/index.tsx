import { AboutType } from "@/app/(admin)/admin/hakkimda/page";
import About from "@/components/admin/about";
import React from "react";

const AboutContainer = ({ data }: { data: AboutType }) => {
  return (
    <>
      <About data={data} />
    </>
  );
};

export default AboutContainer;
