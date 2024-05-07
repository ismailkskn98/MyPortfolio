"use client";
import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      id="hero"
      className="w-full px-0 md:px-32 pb-16 md:pb-32 pt-16 flex flex-col items-center gap-16"
    >
      <h1 className="bg-text-u text-Brand2 hidden md:block">Developer</h1>
      <main className="flex items-center flex-col xl:flex-row gap-16 px-4 sm:gap-32 md:px-32">
        {children}
      </main>
    </section>
  );
};

export default Hero;
