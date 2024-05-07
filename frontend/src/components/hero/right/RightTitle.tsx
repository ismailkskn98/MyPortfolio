import React from "react";

const RightTitle = () => {
  return (
    <div id="rightTitle" className="w-full">
      <p className="w-full code-m text-Brand2">{"<h1>"}</p>
      <div className="px-4">
        <p className="w-full h2-u md:h1-u text-White">Selam</p>
        <p className="w-full h2-u md:h1-u text-White">
          Ben <span className="text-Brand1">İsmail</span>,
        </p>
        <div className="flex flex-col items-end md:flex-row gap-3">
          <p className="w-full h2-u md:h1-u text-White whitespace-nowrap lg:whitespace-normal 2xl:whitespace-nowrap">
            Front-End Developer
          </p>
          <p className="w-full code-m text-Brand2 mr-[16px] md:mr-0">{"</h1>"}</p>
        </div>
      </div>
    </div>
  );
};

export default RightTitle;
