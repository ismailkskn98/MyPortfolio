import Link from "next/link";
import React from "react";

const Desinger = () => {
  return (
    <div
      id="desinger"
      className="flex-grow Label-u-l flex items-center justify-end gap-3 order-3 lg:order-3"
    >
      <p className="whitespace-nowrap">Desing By</p>
      <Link
        href={"https://www.instagram.com/johannleon2025/"}
        className="text-Brand1 underline underline-offset-4"
      >
        JohannLeon
      </Link>
    </div>
  );
};

export default Desinger;
