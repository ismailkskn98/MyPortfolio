"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "200px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-[80rem] flex items-center justify-center"
    >
      <article className="w-full relative py-8 md:py-16">
        <div id="line" className="w-full absolute -top-[1px] left-0 h-[1px] bg-[#848484]"></div>
        {children}
        <div id="line" className="w-full absolute bottom-0 left-0 h-[1px] bg-[#848484]"></div>
      </article>
    </motion.div>
  );
};

export default BlogColumn;
