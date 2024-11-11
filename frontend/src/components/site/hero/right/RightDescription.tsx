import Link from "next/link";
import React from "react";
import { IoMailOutline } from "react-icons/io5";

const RightDescription = () => {
  return (
    <div id="rightDescription" className="w-full md:max-w-[800px] flex flex-col gap-4">
      <p className="code-m text-Brand2">{"<p>"}</p>
      <p className="px-6 text-White para-m leading-7 lg:leading-6">
        Harika web deneyimleri oluşturarak işletmelerin büyümesine yardımcı oluyorum. Eğer iş bitirmeyi seven bir geliştirici arıyorsanız,
      </p>
      <p className="code-m text-Brand2">{"</p>"}</p>
      <Link href="#iletisim" className="flex items-center gap-4">
        <span className="h2-m text-Brand1 whitespace-nowrap">Hadi Konuşalım</span>
        <div className="bg-Grey p-2 rounded-full flex items-center justify-center text-Brand1 border-none outline-none cursor-pointer animate-bounce">
          <IoMailOutline className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default RightDescription;
