"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import dualScreen from "@/../public/images/works/Dual-screen.png";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import tuzgoluHorizontal from "@/../public/images/works/tuzgolumotorhorizontal.png";
import tuzgoluVertical from "@/../public/images/works/tuzgolumotorvertical.png";
import renatoHorizontal from "@/../public/images/works/renatohorizontal.png";
import renatoVertical from "@/../public/images/works/renatovertical.png";
import styles from "./styles.module.css";

type SliderItem = {
  link: string;
  verticalImage: StaticImageData;
  horizontalImage: StaticImageData;
};

const IslerContent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderItems = [
    {
      link: "https://www.tuzgolumotorluaraclar.com/",
      verticalImage: tuzgoluVertical,
      horizontalImage: tuzgoluHorizontal,
    },
    {
      link: "https://ryonetim-nuxtjs.vercel.app/",
      verticalImage: renatoVertical,
      horizontalImage: renatoHorizontal,
    },
  ];

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="islerContent" className="flex items-center gap-0 lg:gap-16">
      <div
        id="islerContentButtonLeft"
        className="w-6 h-6 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-BG1 text-White hover:bg-Grey transition-all cursor-pointer"
        onClick={handleClickLeft}
      >
        <IoIosArrowBack className="w-3 h-3 md:w-10 md:h-10" />
      </div>
      <div id="islerContentSlider">
        <div className="relative">
          {sliderItems.map((item, i) => (
            <div key={i} className={`w-full absolute top-0 left-0`}>
              <Link
                href={item.link}
                className={`absolute top-5 -right-3 md:top-11 md:right-12 lg:top-16 lg:right-16 flex items-end gap-1 md:gap-2 text-Brand1 code-m lg:menu-m underline underline-offset-8 decoration-White hover:text-Brand2 transition-colors ${
                  i === currentIndex ? "block" : "hidden"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Siteyi Görüntüle <RiExternalLinkLine className="w-4 h-4" />
              </Link>
              <div className="absolute top-[25px] left-[22px] w-[87px] h-[128px] md:top-[42px] md:left-[40px] md:w-[158px] md:h-[205px] lg:top-[55px] lg:left-[55px] lg:w-[213px] lg:h-[280px]">
                <Image
                  src={item.verticalImage}
                  alt="image"
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="absolute top-[60px] right-[19px] w-[121px] h-[79px] md:top-[97px] md:right-[35px] md:w-[222px] md:h-[125px] lg:top-[131px] lg:right-[49px] lg:w-[298px] lg:h-[171px]">
                <Image
                  src={item.horizontalImage}
                  alt="image"
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          ))}
          <Image
            src={dualScreen}
            alt="yapılan işler"
            className="w-[263px] h-[198px] md:w-[480px] md:h-[320px] lg:w-[650px] lg:h-[432px]"
          />
        </div>
      </div>
      <div
        id="islerContentButtonRight"
        className="w-6 h-6 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-BG1 text-White hover:bg-Grey transition-all cursor-pointer"
        onClick={handleClickRight}
      >
        <IoIosArrowForward className="w-3 h-3 md:w-10 md:h-10" />
      </div>
    </div>
  );
};

export default IslerContent;
