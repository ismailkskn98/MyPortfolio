"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogColumn = ({ children, isHome }: { children: React.ReactNode; isHome: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "200px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center justify-start ${isHome ? "max-w-[80rem]" : "w-full"}`}
    >
      <article className="w-full relative py-8 md:py-16">
        <div id="line" className="w-full absolute -top-[1px] left-0 h-[1px] bg-Grey/70"></div>
        {children}
        <div id="line" className="w-full absolute bottom-0 left-0 h-[1px] bg-Grey/70"></div>
      </article>
    </motion.div>
  );
};

export default BlogColumn;
