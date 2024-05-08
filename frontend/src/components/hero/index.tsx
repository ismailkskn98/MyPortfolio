"use client";
import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      id="anasayfa"
      className="w-full h-min flex flex-col items-center gap-16 px-0 lg:px-32 pb-16 pt-16 md:pb-32"
    >
      <h1 className="bg-text-u text-Brand2 hidden md:block">Developer</h1>
      <main className="flex items-center flex-col xl:flex-row gap-16 sm:gap-32 px-6 sm:px-16 lg:px-32">
        {children}
      </main>
    </section>
  );
};

export default Hero;
