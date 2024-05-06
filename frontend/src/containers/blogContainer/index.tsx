"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {children}
      </motion.div>
    </>
  );
};

export default BlogContainer;
