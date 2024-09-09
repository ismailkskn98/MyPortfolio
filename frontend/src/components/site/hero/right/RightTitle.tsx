import React from "react";

const RightTitle = () => {
  return (
    <div id="rightTitle" className="w-full md:max-w-[800px] flex flex-col gap-4">
      <p className="xl:w-full code-m text-Brand2">{"<h1>"}</p>
      <div className="px-6 md:px-4">
        <p className="xl:w-full h2-u md:h1-u text-White">Selam</p>
        <p className="xl:w-full h2-u md:h1-u text-White">
          Ben <span className="text-Brand1">İsmail</span>,
        </p>
        <div className="flex flex-col items-start md:items-end md:flex-row gap-4">
          <p className="xl:w-full h2-u md:h1-u text-White whitespace-nowrap lg:whitespace-normal 2xl:whitespace-nowrap">Front-End Developer</p>
          <p className="xl:w-full code-m text-Brand2 -ml-6 md:mr-0">{"</h1>"}</p>
        </div>
      </div>
    </div>
  );
};

export default RightTitle;
