"use client";
import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="anasayfa" className="flex flex-col items-center gap-16 px-0 pt-[13px] pb-16 md:pb-36">
      <h1 className="bg-text-u text-Brand2 hidden md:block">Developer</h1>
      <main className="container flex flex-col 2xl:flex-row items-center md:gap-32 gap-16 px-1">{children}</main>
    </section>
  );
};

export default Hero;
