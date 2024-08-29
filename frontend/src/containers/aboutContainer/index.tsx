import About from "@/components/admin/about";
import React from "react";
// types
import type { AboutType } from "@/types";

const AboutContainer = ({ data }: { data: AboutType[] }) => {
  return (
    <>
      <About data={data} />
    </>
  );
};

export default AboutContainer;
