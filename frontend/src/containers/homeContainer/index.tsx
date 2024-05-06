import Hero from "@/components/hero";
import React from "react";
import Left from "@/components/hero/left";
import Right from "@/components/hero/right";

type Props = {};

const HomeContainer: React.FC<Props> = async () => {
  return (
    <>
      <Hero>
        <Left />
        <Right />
      </Hero>
    </>
  );
};

export default HomeContainer;
