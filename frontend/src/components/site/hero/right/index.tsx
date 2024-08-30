"use client";
import React, { useEffect, useState } from "react";
import RightTitle from "./RightTitle";
import RightDescription from "./RightDescription";
import Highlights from "./Highlights";

const username = "ismailkskn98";

const Right = () => {
  const [repoCount, setRepoCount] = useState<number>(0);
  const [followersCount, setFollowersCount] = useState<number>(0);
  const [followingCount, setFollowingCount] = useState<number>(0);

  const animate = (target: number, setState: React.Dispatch<React.SetStateAction<number>>) => {
    let count = 0;
    const increment = target / 20;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
      }
      setState(Math.floor(count));
    }, 20);
  };

  const githubFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error("Beklenmedik bir hata oluştu");
      }
      const data = await response.json();
      animate(data.public_repos, setRepoCount); // Repo sayısını animasyonlu göster
      animate(data.followers, setFollowersCount); // Takipçi sayısını animasyonlu göster
      animate(data.following, setFollowingCount); // Takip edilen sayısını animasyonlu
    } catch (error) {
      console.log("Beklenmedik bir hata oluştu", error);
    }
  };

  useEffect(() => {
    githubFetch();
  }, []);

  return (
    <div id="right" className="w-full flex items-center flex-col lg:flex-row gap-16 lg:gap-0">
      <div id="rightInfo" className="w-full flex flex-col gap-8 items-center lg:items-start">
        <RightTitle />
        <RightDescription />
      </div>
      <Highlights public_repos={repoCount} followers={followersCount} following={followingCount} />
    </div>
  );
};

export default Right;
