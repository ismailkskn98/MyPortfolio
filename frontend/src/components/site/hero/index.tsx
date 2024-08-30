"use client";
import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="anasayfa" className="w-full h-min flex flex-col items-center gap-16 px-0 py-16 lg:px-32 md:pb-32">
      <h1 className="bg-text-u text-Brand2 hidden md:block">Developer</h1>
      <main className="flex flex-col xl:flex-row items-center sm:gap-32 gap-16 px-6 md:px-16 xl:px-32">{children}</main>
    </section>
  );
};

export default Hero;
