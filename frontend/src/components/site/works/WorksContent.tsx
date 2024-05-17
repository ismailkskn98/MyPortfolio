"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import tuzgoluHorizontal from "@/../public/images/works/tuzgolumotorhorizontal.png";
import tuzgoluVertical from "@/../public/images/works/tuzgolumotorvertical.png";
import renatoHorizontal from "@/../public/images/works/renatohorizontal.png";
import renatoVertical from "@/../public/images/works/renatovertical.png";
import styles from "./styles.module.css";
import WorksSlider from "./WorksSlider";

export type SliderItem = {
  href: string;
  verticalImage: StaticImageData;
  horizontalImage: StaticImageData;
};

const WorksContent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderItems: SliderItem[] = [
    {
      href: "https://www.tuzgolumotorluaraclar.com/",
      verticalImage: tuzgoluVertical,
      horizontalImage: tuzgoluHorizontal,
    },
    {
      href: "https://ryonetim-nuxtjs.vercel.app/",
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
      <div id="islerContentButtonLeft" className={styles.sliderBtnLeft} onClick={handleClickLeft}>
        <IoIosArrowBack className="w-3 h-3 md:w-10 md:h-10" />
      </div>
      <WorksSlider sliderItems={sliderItems} currentIndex={currentIndex} />
      <div
        id="islerContentButtonRight"
        className={styles.sliderBtnRight}
        onClick={handleClickRight}
      >
        <IoIosArrowForward className="w-3 h-3 md:w-10 md:h-10" />
      </div>
    </div>
  );
};

export default WorksContent;
