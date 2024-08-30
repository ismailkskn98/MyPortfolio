import React from "react";

type HighlightsProps = {
  public_repos: number;
  followers: number;
  following: number;
};

const Highlights: React.FC<HighlightsProps> = ({ public_repos, followers, following }) => {
  return (
    <div id="highlights" className="flex flex-col gap-12 px-8 py-12 rounded-[80px] text-White bg-BG2">
      <div id="rightLanguage" className="flex items-center gap-4">
        <span className="number-m text-Brand1">{public_repos}</span>
        <div className="flex flex-col para-m">
          <p>Github Repositories</p>
          <p></p>
        </div>
      </div>
      <div id="rightTools" className="flex items-center gap-4">
        <span className="number-m text-Brand1">{followers}</span>
        <div className="flex flex-col para-m">
          <p>Github Takipçi</p>
        </div>
      </div>
      <div id="rightExperience" className="flex items-center gap-4">
        <span className="number-m text-Brand1">{following}</span>
        <div className="flex flex-col para-m">
          <p>Github Takip</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
