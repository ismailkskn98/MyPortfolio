import React, { useState } from "react";
import CountUp from "react-countup";

type HighlightsProps = {
  public_repos: number;
  followers: number;
  following: number;
};

const Highlights: React.FC<HighlightsProps> = ({ public_repos, followers, following }) => {
  const [showPlusRepos, setShowPlusRepos] = useState<boolean>(false);
  const [showPlusFollowers, setShowPlusFollowers] = useState<boolean>(false);
  const [showPlusFollowing, setShowPlusFollowing] = useState<boolean>(false);

  return (
    <div id="highlights" className="flex flex-col gap-12 px-8 py-12 rounded-[80px] text-White bg-BG2">
      <div id="rightLanguage" className="w-52 flex items-center gap-4">
        <span className="number-m text-Brand1 flex">
          {
            <CountUp
              end={public_repos > 99 ? 99 : public_repos}
              onEnd={() => {
                if (public_repos > 99) {
                  setShowPlusRepos(true);
                }
              }}
            />
          }
          {showPlusRepos ? "+" : ""}
        </span>
        <div className="flex flex-col para-m">
          <p>Github Repositories</p>
        </div>
      </div>
      <div id="rightTools" className="w-44 flex items-center gap-4">
        <span className="number-m text-Brand1">
          {" "}
          {
            <CountUp
              end={followers > 99 ? 99 : followers}
              onEnd={() => {
                if (followers > 99) {
                  setShowPlusFollowers(true);
                }
              }}
            />
          }
          {showPlusFollowers ? "+" : ""}
        </span>
        <div className="flex flex-col para-m">
          <p>Github Takipçi</p>
        </div>
      </div>
      <div id="rightExperience" className="w-44 flex items-center gap-4">
        <span className="number-m text-Brand1">
          {" "}
          {
            <CountUp
              end={following > 99 ? 99 : following}
              onEnd={() => {
                if (following > 99) {
                  setShowPlusFollowing(true);
                }
              }}
            />
          }
          {showPlusFollowing ? "+" : ""}
        </span>
        <div className="flex flex-col para-m">
          <p>Github Takip</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
