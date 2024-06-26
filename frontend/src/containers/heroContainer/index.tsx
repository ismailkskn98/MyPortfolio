import Hero from "@/components/admin/hero";
import HeroForm, { HeroType } from "@/components/admin/hero/HeroForm";
import React from "react";

const HeroContainer = ({ data }: { data: HeroType }) => {
  return (
    <>
      <Hero>
        <HeroForm data={data} />
      </Hero>
    </>
  );
};

export default HeroContainer;
