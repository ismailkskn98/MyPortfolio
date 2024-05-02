import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 menu-m lg:logo-m">
      <span className="text-Brand1">{"<C/>"}</span>
      <span className="text-White">İsmailKeskin</span>
    </Link>
  );
};

export default Logo;
