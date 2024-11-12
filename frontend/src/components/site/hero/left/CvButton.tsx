"use client";
import React from "react";
import { LuDownload } from "react-icons/lu";

const CvButton = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <a href="/ismail-keskin.pdf" download>
        <button className="max-w-56 flex items-center justify-center gap-4 px-8 py-4 bg-White border-none outline-none rounded-[32px] cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-Brand1 hover:text-white hover:scale-95 focus:bg-Brand2 focus:ring-4 focus:ring-Brand1 focus:ring-opacity-50 shadow-md hover:shadow-lg">
          Download CV <LuDownload />
        </button>
      </a>
    </div>
  );
};

export default CvButton;
