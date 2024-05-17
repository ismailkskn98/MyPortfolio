"use client";
import { Payload } from "@/hooks/AuthFromClient";
import React from "react";
import styles from "@/app/(admin)/admin/styles.module.css";

const Header = ({ payload }: { payload: Payload | null }) => {
  return (
    <header
      id="adminHeader"
      className={`${styles.adminHeader} flex items-center bg-BG2 text-White py-5 px-6`}
    >
      <main className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xl text-Brand1">{"<İK>"}</span>
          <span className="font-semibold text-xl tracking-wider underline underline-offset-4">
            {payload?.username}
          </span>
        </div>
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
