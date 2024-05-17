import React from "react";
import dualScreen from "@/../public/images/works/Dual-screen.png";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import styles from "./styles.module.css";
import { SliderItem } from "./WorksContent";

type Props = {
  sliderItems: SliderItem[];
  currentIndex: number;
};

const WorksSlider: React.FC<Props> = ({ sliderItems, currentIndex }) => {
  return (
    <div id="islerContentSlider">
      <div className="relative">
        {sliderItems.map((item, i) => (
          <div key={i} className={`w-full absolute top-0 left-0`}>
            <Link
              href={item.href}
              className={`${styles.sliderLink} code-m lg:menu-m ${
                i === currentIndex ? "flex" : "hidden"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Siteyi Görüntüle <RiExternalLinkLine className="w-4 h-4" />
            </Link>
            <div className={styles.sliderVertical}>
              <Image
                src={item.verticalImage}
                alt="image"
                className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className={styles.sliderHorizontal}>
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
  );
};

export default WorksSlider;
