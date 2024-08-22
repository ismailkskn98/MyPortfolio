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

// "_id": "66c79b41fc433333b56ad9f0",
// "name": "Tuzgolu Motorlu Araçlar",
// "url": "https://tuzgolu-nextjs.vercel.app/",
// "verticalImage": "images/tuzgolumotorvertical-ik-1724357441514.png",
// "horizontalImage": "images/tuzgolumotorhorizontal-ik-1724357441550.png"

export type WorkType = {
  _id: string | number;
  name: string;
  url: string;
  verticalImage: string;
  horizontalImage: string;
};

const WorksContent = ({ works }: { works: WorkType[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? works.length - 1 : prevIndex - 1));
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === works.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="islerContent" className="flex items-center gap-0 lg:gap-16">
      <div id="islerContentButtonLeft" className={styles.sliderBtnLeft} onClick={handleClickLeft}>
        <IoIosArrowBack className="w-3 h-3 md:w-10 md:h-10" />
      </div>
      <WorksSlider sliderItems={works} currentIndex={currentIndex} />
      <div id="islerContentButtonRight" className={styles.sliderBtnRight} onClick={handleClickRight}>
        <IoIosArrowForward className="w-3 h-3 md:w-10 md:h-10" />
      </div>
    </div>
  );
};

export default WorksContent;
