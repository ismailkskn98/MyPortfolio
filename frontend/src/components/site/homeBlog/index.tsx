"use client";
import React from "react";
import SolidButton from "../buttons/SolidButton";

const HomeBlog = ({ children }: { children: React.ReactNode }) => {
  const viewMore = (): void => {};

  return (
    <section id="blogs" className="bg-BG1">
      <main className="flex flex-col items-center gap-16 px-6 py-16 md:p-16 xl:px-32 xl:py-24">
        {children}
        <SolidButton
          bgColor="bg-BG1"
          border={true}
          buttonFc={viewMore}
          buttonText="Devamını Oku"
          textColor="text-White"
        />
      </main>
    </section>
  );
};

export default HomeBlog;
