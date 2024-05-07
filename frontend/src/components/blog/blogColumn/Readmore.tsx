import Link from "next/link";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const Readmore = ({ slug }: { slug: string }) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="flex items-center gap-1 text-Brand1 decoration-White underline-offset-8 para-u group"
    >
      <span>Devamını Oku</span>
      <MdDoubleArrow className="group-hover:ml-1 transition-all" />
    </Link>
  );
};

export default Readmore;
