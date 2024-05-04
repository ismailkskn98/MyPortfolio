"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 sm:gap-8 media-m lg:menu-m"
    >
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
    </motion.nav>
  );
};
export default Navbar;
