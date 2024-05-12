import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full h-min bg-BG1 px-6 lg:px-8 xl:px-32">
      <div className="h-min py-10 md:py-16 flex items-center justify-between gap-1 sm:gap-0">
        <Logo />
        <main className="flex items-center gap-8 md:gap-16">
          <Navbar />
          <div id="right" className="flex items-center gap-16">
            <Search />
            <SocialMedia />
          </div>
        </main>
      </div>
      <div className="w-full h-[1px] bg-Grey/70"></div>
    </header>
  );
};

export default Header;
