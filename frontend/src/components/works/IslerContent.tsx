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
    <div id="islerContent" className="flex items-center gap-16">
      <div
        id="islerContentButtonLeft"
        className="w-16 h-16 rounded-full flex items-center justify-center bg-BG1 text-White hover:bg-Grey transition-all cursor-pointer"
        onClick={handleClickLeft}
      >
        <IoIosArrowBack className="w-8 h-8" />
      </div>
      <div id="islerContentSlider">
        <div className="relative">
          {sliderItems.map((item, i) => (
            <div key={i} className={`w-full absolute top-0 left-0`}>
              <Link
                href={item.link}
                className={`absolute top-16 right-16 flex items-end gap-2 text-Brand1 menu-m underline underline-offset-8 decoration-White hover:text-Brand2 transition-colors ${
                  i === currentIndex ? "block" : "hidden"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Siteyi Görüntüle <RiExternalLinkLine className="w-4 h-4" />
              </Link>
              <div className="absolute top-[55px] left-[55px] w-[213px] h-[280px]">
                <Image
                  src={item.verticalImage}
                  alt="image"
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="absolute top-[131px] right-[49px] w-[298px] h-[171px]">
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
          <Image src={dualScreen} alt="yapılan işler" />
        </div>
      </div>
      <div
        id="islerContentButtonRight"
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-BG1 text-White hover:bg-Grey transition-all cursor-pointer"
        onClick={handleClickRight}
      >
        <IoIosArrowForward className="w-10 h-10" />
      </div>
    </div>
  );
};

export default IslerContent;
