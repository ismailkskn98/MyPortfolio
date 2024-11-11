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
    <section id="blogs" className="fluid container-fluid bg-BG1">
      <main className="flex flex-col items-center gap-10 py-14">
        {children}
        <SolidButton bgColor="bg-BG1" border={true} buttonFc={viewMore} buttonText="Devamını Oku" textColor="text-White" />
      </main>
    </section>
  );
};

export default HomeBlog;
