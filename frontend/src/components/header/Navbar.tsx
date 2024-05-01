"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8 media-m lg:menu-m">
      <Link href={"/"} className={`${pathname == "/" ? "text-Brand1" : "text-White"}`}>
        Home
      </Link>
      <Link href={"/blogs"} className={`${pathname == "/blogs" ? "text-Brand1" : "text-White"}`}>
        Blogs
      </Link>
    </nav>
  );
};
export default Navbar;
