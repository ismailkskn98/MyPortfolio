import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <header className="w-full flex items-center justify-end gap-3">
      <Link
        href={"/admin/blog-ekle"}
        className="bg-green-500 text-white border-none outline-none px-3 py-1 rounded-sm cursor-pointer"
      >
        Yeni Blog Ekle
      </Link>
      <Link
        href={"/admin/yetenek-ekle"}
        className="bg-Brand1 text-white border-none outline-none px-3 py-1 rounded-sm cursor-pointer"
      >
        Yeni Yetenek Ekle
      </Link>
      <Link
        href={"#"}
        className="bg-gray-600 text-white border-none outline-none px-3 py-1 rounded-sm cursor-pointer"
      >
        Ayarlar
      </Link>
    </header>
  );
};

export default HomeHeader;
