"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 sm:gap-8 media-m lg:menu-m">
      <Link
        href={"/"}
        className={`hover:text-Brand1 transition-colors ${
          pathname == "/" ? "text-Brand1" : "text-White"
        }`}
      >
        Home
      </Link>
      <Link
        href={"/blogs"}
        className={`hover:text-Brand1 transition-colors ${
          pathname == "/blogs" ? "text-Brand1" : "text-White"
        }`}
      >
        Blogs
      </Link>
    </nav>
  );
};
export default Navbar;
