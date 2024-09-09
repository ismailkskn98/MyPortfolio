"use client";
import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="anasayfa" className="w-full h-min flex flex-col items-center gap-16 px-0 py-16">
      <h1 className="bg-text-u text-Brand2 hidden md:block">Developer</h1>
      <main className="container flex flex-col 2xl:flex-row items-center gap-16 md:gap-8 px-3 2xl:px-16">{children}</main>
    </section>
  );
};

export default Hero;
