"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="items-center gap-8 media-m hidden md:flex"
    >
      <Link
        href={"https://www.instagram.com/h.ismailkeskin/"}
        className="flex items-center gap-2 group"
        target="_blank"
      >
        <FaInstagram className="text-Brand1 w-5 h-5" />
        <p className="text-White hidden 2xl:inline-block group-hover:text-Brand1 transition-colors">
          Instagram
        </p>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/ismail-keskin-556538242/"}
        className="flex items-center gap-2 group"
        target="_blank"
      >
        <FaLinkedin className="text-Brand1 w-5 h-5" />
        <p className="text-White hidden 2xl:inline-block group-hover:text-Brand1 transition-colors">
          LinkedIn
        </p>
      </Link>
      <Link
        href={"https://github.com/ismailkskn98"}
        className="flex items-center gap-2 group"
        target="_blank"
      >
        <FaGithub className="text-Brand1 w-5 h-5" />
        <p className="text-White hidden 2xl:inline-block group-hover:text-Brand1 transition-colors">
          Github
        </p>
      </Link>
    </motion.div>
  );
};

export default SocialMedia;
