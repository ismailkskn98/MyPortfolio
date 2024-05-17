"use client";
import { Payload } from "@/hooks/AuthFromClient";
import React from "react";
import styles from "@/app/(admin)/admin/styles.module.css";
import Cookies from "js-cookie";

const Header = ({ payload }: { payload: Payload | null }) => {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <header
      id="adminHeader"
      className={`${styles.adminHeader} flex items-center bg-BG2 text-White py-5 px-6`}
    >
      <main className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xl text-Brand1">{"<İK>"}</span>
          <span className="font-semibold text-xl tracking-wider">{payload?.username}</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <span>{payload?.firstname}</span>
              <span>{payload?.lastname}</span>
            </div>
            <span>/</span>
            <span>{payload?.role}</span>
          </div>
          <button
            onClick={handleLogout}
            className="font-semibold text-lg underline underline-offset-4 bg-transparent border-none outline-none text-white cursor-pointer"
          >
            Çıkış
          </button>
        </div>
      </main>
    </header>
  );
};

export default Header;
