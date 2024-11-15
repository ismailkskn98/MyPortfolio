import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fluid container-fluid bg-BG1 overflow-hidden">
      <main className="flex items-center justify-between lg:gap-0 gap-1 py-10 md:py-16">
        <Logo />
        <div className="flex items-center gap-8 md:gap-16">
          <Navbar />
          <div id="right" className="flex items-center gap-16">
            <Search />
            <SocialMedia />
          </div>
        </div>
      </main>
      <div className="fluid w-full h-[1px] bg-Grey/70"></div>
    </header>
  );
};

export default Header;
