import React from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
      <h1 className="w-full flex items-center justify-center text-4xl">Hero Düzenle</h1>
      <section className="flex items-center gap-5">{children}</section>
    </main>
  );
};

export default Hero;
