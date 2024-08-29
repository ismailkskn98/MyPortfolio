"use client";
import Footer from "@/components/site/footer";
import Link from "next/link";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 bg-BG1">
        <span className="h2-u text-Brand1">{`${error.message}`}</span>
        <div className="flex items-center justify-center gap-5">
          <button onClick={() => reset()} className="bg-[#fff0] border-none underline text-White button-u underline-offset-8 cursor-pointer hover:text-Brand1 transition-all">
            Tekrar Deneyin
          </button>
          <Link href="/" className="text-White button-u underline underline-offset-8 cursor-pointer hover:text-Brand1 transition-all">
            Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
