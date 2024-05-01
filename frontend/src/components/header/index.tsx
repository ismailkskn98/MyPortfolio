import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full px-32">
      <div className="h-min py-16 flex items-center justify-between">
        <Logo />
        <section className="flex items-center gap-16">
          <Navbar />
          <div className="flex items-center gap-16">
            <Search />
            <SocialMedia />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
