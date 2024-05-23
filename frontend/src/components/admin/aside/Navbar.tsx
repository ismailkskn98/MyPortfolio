"use client";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoGitNetworkSharp, IoPersonSharp } from "react-icons/io5";
import { TbArrowRoundaboutLeft } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";
import { BiLogoBlogger } from "react-icons/bi";

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const Navbar = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Anasayfa", href: "/admin", icon: FaHome },
    { name: "Hero", href: "/admin/hero", icon: IoPersonSharp },
    { name: "Hakkımda", href: "/admin/hakkimda", icon: TbArrowRoundaboutLeft },
    { name: "Yetenekler", href: "/admin/yetenekler", icon: GiSkills },
    { name: "Yetenek Ekle", href: "/admin/yetenek-ekle", icon: GiSkills },
    { name: "İşler", href: "/admin/isler", icon: IoGitNetworkSharp },
    { name: "Bloglarım", href: "/admin/bloglarim", icon: BiLogoBlogger },
    { name: "Blog Ekle", href: "/admin/blog-ekle", icon: BiLogoBlogger },
    { name: "Mesajlar", href: "/admin/mesajlar", icon: RiMessage2Fill },
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
