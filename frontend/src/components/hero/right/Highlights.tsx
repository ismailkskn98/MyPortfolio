import React from "react";

const Highlights = () => {
  return (
    <div
      id="highlights"
      className="flex flex-col gap-12 px-8 py-12 rounded-[80px] text-White bg-BG2"
    >
      <div id="rightLanguage" className="flex items-center gap-4">
        <span className="number-m text-Brand1">4</span>
        <div className="flex flex-col para-m">
          <p>Programming</p>
          <p>Language</p>
        </div>
      </div>
      <div id="rightTools" className="flex items-center gap-4">
        <span className="number-m text-Brand1">6</span>
        <div className="flex flex-col para-m">
          <p>Development</p>
          <p>Tools</p>
        </div>
      </div>
      <div id="rightExperience" className="flex items-center gap-4">
        <span className="number-m text-Brand1">8</span>
        <div className="flex flex-col para-m">
          <p>Years of</p>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
