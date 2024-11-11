import React from "react";
import Image from "next/image";
import image from "@/../public/images/about/Image.png";

const AboutImage = () => {
  return (
    <span>
      <Image src={image} alt="about resim" className="lg:min-w-[450px]" width={450} height={450} />
    </span>
  );
};

export default AboutImage;
