import Hero from "@/components/admin/hero";
import HeroForm from "@/components/admin/hero/HeroForm";
import React from "react";
// types
import type { HeroType } from "@/types";

const HeroContainer = ({ data }: { data: HeroType[] }) => {
  return (
    <>
      <Hero>
        <HeroForm data={data} />
      </Hero>
    </>
  );
};

export default HeroContainer;
