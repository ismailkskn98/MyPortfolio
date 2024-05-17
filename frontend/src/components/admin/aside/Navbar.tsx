"use client";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const Navbar = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Anasayfa", href: "/admin", icon: FaHome },
    { name: "Hero", href: "/admin/hero", icon: FaHome },
    { name: "Hakkımda", href: "/admin/hakkimda", icon: FaHome },
    { name: "Yetenekler", href: "/admin/yetenekler", icon: FaHome },
    { name: "İşler", href: "/admin/isler", icon: FaHome },
    { name: "Bloglarım", href: "/admin/bloglarim", icon: FaHome },
    { name: "Blog Ekle", href: "/admin/blog-ekle", icon: FaHome },
    { name: "Mesajlar", href: "/admin/mesajlar", icon: FaHome },
  ];

  return (
    <nav className="w-full h-full flex flex-col gap-3">
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`${
            pathname === item.href && "bg-Brand1 text-BG2 "
          } w-full flex items-center gap-2 px-6 py-3 text-lg text-white tracking-wider hover:bg-BG1 transition-all cursor-pointer whitespace-nowrap`}
        >
          <item.icon className="min-w-4 min-h-4" />
          <span className="md:invisible md:opacity-0 transition-all xl:visible xl:opacity-100">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
