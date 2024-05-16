import Link from "next/link";
import React from "react";

const FooterNav = () => {
  return (
    <nav id="footerNav" className=" flex items-center gap-8">
      <Link
        href={"/"}
        className="underline underline-offset-4 text-White hover:text-Brand1 transition-colors"
      >
        Anasayfa
      </Link>
      <Link
        href={"/blogs"}
        className="underline underline-offset-4 text-White hover:text-Brand1 transition-colors"
      >
        Blogs
      </Link>
    </nav>
  );
};

export default FooterNav;
