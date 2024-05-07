"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItem = {
  link: string;
  name: string;
};

const navItems: NavItem[] = [
  { link: "/", name: "Anasayfa" },
  { link: "/blogs", name: "Blogs" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 sm:gap-8 media-m lg:menu-m"
    >
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className={`hover:text-Brand1 transition-colors ${
            pathname == item.link ? "text-Brand1" : "text-White"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </motion.nav>
  );
};
export default Navbar;
