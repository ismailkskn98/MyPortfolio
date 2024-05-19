import React from "react";

const HomeMain = () => {
  return (
    <main className="flex items-center justify-between gap-14">
      <div className="basis-2/3">
        <div>Sistem Bildirimleri:</div>
        <div>Önemli Duyurular:</div>
      </div>
      <div className="basis-1/3 flex flex-col items-end gap-5">
        <div className="w-[235px] flex flex-col items-center bg-React text-white px-8 py-5 rounded-sm">
          <h3>Toplam Proje</h3>
          <p>10</p>
        </div>
        <div className="w-[235px] flex flex-col items-center bg-Html text-white px-8 py-5 rounded-sm">
          <h3>Toplam Blog Yazısı</h3>
          <p>25</p>
        </div>
        <div className="w-[235px] flex flex-col items-center bg-CSS text-white px-8 py-5 rounded-sm">
          <h3>Son Güncelleme</h3>
          <p>15 Mayıs 2024</p>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
