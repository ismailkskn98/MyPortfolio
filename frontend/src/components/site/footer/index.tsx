import React from "react";
import Copyright from "./Copyright";
import FooterNav from "./FooterNav";
import Desinger from "./Desinger";
import FooterMedia from "./FooterMedia";

const Footer = () => {
  return (
    <footer className="fluid container-fluid  gap-y-6 lg:gap-y-4 text-White bg-BG2 pb-8 lg:pb-4">
      <div className="fluid max-w-full h-[1px] bg-Grey/70"></div>
      <main className="container w-full flex items-center para-u gap-6 lg:gap-0 flex-col lg:flex-row justify-start lg:justify-between">
        <div className="order-2 lg:order-1 flex-grow flex items-center justify-between flex-col sm:flex-row gap-6 sm:gap-16 lg:gap-0">
          <Copyright />
          <FooterNav />
        </div>
        <FooterMedia />
        <Desinger />
      </main>
    </footer>
  );
};

export default Footer;
