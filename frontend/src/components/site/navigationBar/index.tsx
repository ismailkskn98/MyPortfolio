"use client";
import Link from "next/link";
import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { useActiveNav } from "@/hooks/useActiveNav";

type NavItem = {
  link: string;
  sectionId: string;
  hover?: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { link: "#anasayfa", sectionId: "anasayfa", icon: IoGridOutline },
  { link: "#hakkimda", sectionId: "hakkimda", hover: "Hakkımda", icon: FiUser },
  { link: "#beceriler", sectionId: "beceriler", hover: "Beceriler", icon: IoCode },
  { link: "#isler", sectionId: "isler", hover: "İşler", icon: RiComputerLine },
  { link: "#blogs", sectionId: "blogs", hover: "Blogs", icon: HiOutlinePencilAlt },
  { link: "#iletisim", sectionId: "iletisim", hover: "İletişim", icon: IoMailOutline },
];

const NavigationBar = () => {
  const { handleNavLinkClick, sectionId } = useActiveNav();

  return (
    <nav className="hidden xl:flex fixed z-50 top-56 left-12 2xl:left-16 flex-col items-center gap-6 px-3 py-2 rounded-[40px] bg-BG2/90 border border-solid border-White">
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className={`relative w-10 h-10 flex items-center justify-center  rounded-full transition-all group ${
            sectionId === item.sectionId ? "bg-White text-BG1" : "bg-BG2/90 text-White"
          }`}
          onClick={() => handleNavLinkClick(item.sectionId)}
        >
          <item.icon className={`w-6 h-6 ${sectionId !== item.sectionId && "text-White"}`} />
          <span
            className={`${
              item.hover &&
              "absolute top-1/2 left-16 -translate-y-1/2 px-4 py-2 rounded-lg transition invisible opacity-0 group-hover:visible group-hover:opacity-100 para-u text-BG1 bg-White"
            }`}
          >
            {item.hover}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
