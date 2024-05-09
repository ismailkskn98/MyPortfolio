import React from "react";
import { IoMailOutline } from "react-icons/io5";

const RightDescription = () => {
  return (
    <div id="rightDescription" className="w-full md:max-w-[800px] flex flex-col gap-4">
      <p className="code-m text-Brand2">{"<p>"}</p>
      <p className="px-6 text-White para-m">
        Harika web deneyimleri oluşturarak işletmelerin büyümesine yardımcı oluyorum. Eğer iş
        bitirmeyi seven bir geliştirici arıyorsanız,
      </p>
      <p className="code-m text-Brand2">{"</p>"}</p>
      <div className="flex items-center gap-4 md:pl-6">
        <span className="h2-m text-Brand1 whitespace-nowrap">Hadi Konuşalım</span>
        <button className="bg-Grey p-2 rounded-full flex items-center justify-center text-Brand1 border-none outline-none cursor-pointer">
          <IoMailOutline className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default RightDescription;
