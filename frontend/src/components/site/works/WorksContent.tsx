"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.css";
import WorksSlider from "./WorksSlider";
// types
import type { WorkType } from "@/types";

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
