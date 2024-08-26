import About, { AboutType } from "@/components/admin/about";
import React from "react";

const AboutContainer = ({ data }: { data: AboutType[] }) => {
  return (
    <>
      <About data={data} />
    </>
  );
};

export default AboutContainer;
