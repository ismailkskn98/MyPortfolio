"use client";
import { Payload } from "@/hooks/AuthFromClient";
import React from "react";

const Header = ({ payload }: { payload: Payload | null }) => {
  return (
    <header className="w-full bg-BG2 text-White py-5 px-6">
      <main className="flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <span>{payload?.firstname}</span>
            <span>{payload?.lastname}</span>
          </div>
          <span>/</span>
          <span>{payload?.role}</span>
        </div>
      </main>
    </header>
  );
};

export default Header;
