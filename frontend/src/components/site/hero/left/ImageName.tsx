import Image from "next/image";
import React from "react";
import profilPhoto from "@/../public/images/Profile photo.png";
// types
import type { HeroType } from "@/types";

const ImageName = ({ hero }: { hero: HeroType[] }) => {
  return (
    <div id="photoName" className="w-full flex flex-col items-center gap-4 text-White">
      <Image src={profilPhoto} alt="profil fotoğrafı" />
      <div id="name" className="flex flex-col items-center">
        <h2 className="logo-m">{hero[0].name}</h2>
        <p className="code-m">{hero[0].job}</p>
      </div>
    </div>
  );
};

export default ImageName;
