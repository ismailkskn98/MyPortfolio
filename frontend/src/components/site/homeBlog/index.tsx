"use client";
import React from "react";
import SolidButton from "../buttons/SolidButton";
import { useRouter } from "next/navigation";

const HomeBlog = ({ children, slug }: { children: React.ReactNode; slug: string }) => {
  const router = useRouter();
  const viewMore = (): void => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <section id="blogs" className="bg-BG1">
      <main className="container flex flex-col items-center gap-16 px-3 py-16 md:p-16 xl:px-32 xl:p-16">
        {children}
        <SolidButton bgColor="bg-BG1" border={true} buttonFc={viewMore} buttonText="Devamını Oku" textColor="text-White" />
      </main>
    </section>
  );
};

export default HomeBlog;
