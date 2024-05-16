"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type SosyalMediaItem = {
  name: string;
  link: string;
  icon: React.ElementType;
};

const SosyalMediaItems: SosyalMediaItem[] = [
  { name: "Instagram", link: "https://www.instagram.com/h.ismailkeskin/", icon: FaInstagram },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ismail-keskin-556538242/",
    icon: FaLinkedin,
  },
  { name: "Github", link: "https://github.com/ismailkskn98/", icon: FaGithub },
];

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="items-center gap-8 media-m hidden md:flex"
    >
      {SosyalMediaItems.map((item, i) => (
        <Link key={i} href={item.link} className="flex items-center gap-2 group" target="_blank">
          <item.icon className="text-Brand1 w-5 h-5" />
          <p className="text-White hidden 2xl:inline-block group-hover:text-Brand1 transition-colors">
            {item.name}
          </p>
        </Link>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
