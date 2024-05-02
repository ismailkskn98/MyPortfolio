"use client";
import Link from "next/link";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <span className="h2-u text-Brand1">{error.message}</span>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => reset()}
          className="bg-[#fff0] border-none underline text-White button-u underline-offset-8 cursor-pointer"
        >
          Tekrar Deneyin
        </button>
        <Link href="/" className="text-White button-u underline underline-offset-8 cursor-pointer">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
