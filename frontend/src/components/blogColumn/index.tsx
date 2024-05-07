"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0, translateY: "200px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex items-center justify-center"
    >
      <article className="relative py-8 md:py-16 flex justify-center items-center">
        <div id="line" className="w-full absolute -top-[1px] left-0 h-[1px] bg-[#848484]"></div>
        {children}
        <div id="line" className="w-full absolute bottom-0 left-0 h-[1px] bg-[#848484]"></div>
      </article>
    </motion.main>
  );
};

export default BlogColumn;
