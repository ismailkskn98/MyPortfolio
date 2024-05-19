import React from "react";

const HomeHeader = () => {
  return (
    <header className="w-full flex items-center justify-end gap-3">
      <button className="bg-green-500 text-white border-none outline-none px-3 py-1 rounded-sm">
        Yeni Proje Ekle
      </button>
      <button className="bg-Brand1 text-white border-none outline-none px-3 py-1 rounded-sm">
        Yeni Blog Yazısı Ekle
      </button>
      <button className="bg-gray-600 text-white border-none outline-none px-3 py-1 rounded-sm">
        Ayarlar
      </button>
    </header>
  );
};

export default HomeHeader;
