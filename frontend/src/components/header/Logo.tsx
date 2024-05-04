"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Link href={"/"} className="flex items-center gap-2">
        <p className="text-Brand1 media-m lg:menu-m xl:logo-m">{"<C/>"}</p>
        <h6 className="text-White media-m lg:menu-m xl:logo-m">İsmailKeskin</h6>
      </Link>
    </motion.span>
  );
};

export default Logo;
