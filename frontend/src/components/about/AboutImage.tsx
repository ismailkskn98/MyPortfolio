import React from "react";
import Image from "next/image";
import image from "@/../public/images/about/Image.png";

const AboutImage = () => {
  return (
    <span>
      <Image src={image} alt="about resim" />
    </span>
  );
};

export default AboutImage;
