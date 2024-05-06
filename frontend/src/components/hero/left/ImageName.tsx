import Image from "next/image";
import React from "react";
import profilPhoto from "@/../public/images/Profile photo.png";

const ImageName = () => {
  return (
    <div id="photoName" className="w-full flex flex-col items-center gap-4 text-White">
      <Image src={profilPhoto} alt="profil fotoğrafı" />
      <div id="name" className="flex flex-col items-center">
        <h2 className="logo-m">İsmail</h2>
        <p className="code-m">Front-End Developer</p>
      </div>
    </div>
  );
};

export default ImageName;
