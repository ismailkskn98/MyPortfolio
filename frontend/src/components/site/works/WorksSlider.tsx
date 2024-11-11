import React from "react";
import dualScreen from "@/../public/images/works/Dual-screen.png";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import styles from "./styles.module.css";
// types
import type { WorkType } from "@/types";

type Props = {
  sliderItems: WorkType[];
  currentIndex: number;
};

// http://localhost:8080
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const WorksSlider: React.FC<Props> = ({ sliderItems, currentIndex }) => {
  return (
    <div id="islerContentSlider">
      <div className="relative">
        {sliderItems.map((item, i) => (
          <div key={i} className={`w-full absolute top-0 left-0`}>
            <Link href={item.url} className={`${styles.sliderLink} code-m lg:menu-m ${i === currentIndex ? "flex" : "hidden"}`} target="_blank" rel="noopener noreferrer">
              Siteyi Görüntüle <RiExternalLinkLine className="w-4 h-4" />
            </Link>
            <div className={styles.sliderVertical}>
              <Image
                crossOrigin="anonymous"
                src={`${BASE_URL}/${item.verticalImage}`}
                alt="image"
                className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
                width={400}
                height={400}
                quality={100}
              />
            </div>
            <div className={styles.sliderHorizontal}>
              <Image
                src={`${BASE_URL}/${item.horizontalImage}`}
                alt="image"
                className={`w-full h-full object-cover absolute -top-[1px] left-0 transition-opacity ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
                width={400}
                height={400}
                quality={100}
              />
            </div>
          </div>
        ))}
        <Image src={dualScreen} alt="yapılan işler" className="w-[263px] h-[198px] md:w-[480px] md:h-[320px] lg:w-[650px] lg:h-[432px]" width={650} height={432} />
      </div>
    </div>
  );
};

export default WorksSlider;
