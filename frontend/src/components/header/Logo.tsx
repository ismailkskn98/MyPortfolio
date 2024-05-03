import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <p className="text-Brand1 media-m lg:menu-m xl:logo-m">{"<C/>"}</p>
      <h6 className="text-White media-m lg:menu-m xl:logo-m">İsmailKeskin</h6>
    </Link>
  );
};

export default Logo;
