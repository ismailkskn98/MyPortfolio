import Image from "next/image";
import React from "react";
import profilPhoto from "@/../public/images/profile.webp";
// import profilPhoto from "@/../public/images/Profile photo.png";
// types
import type { HeroType } from "@/types";

const ImageName = ({ hero }: { hero: HeroType[] }) => {
  return (
    <div id="photoName" className="w-full flex flex-col items-center gap-4 text-White">
      <div className="relative w-[102px] h-[102px] rounded-full overflow-hidden">
        <Image src={profilPhoto} alt="profil fotoğrafı" fill sizes="102px" />
      </div>
      <div id="name" className="flex flex-col items-center">
        <h2 className="logo-m">{hero[0].name}</h2>
        <p className="code-m">{hero[0].job}</p>
      </div>
    </div>
  );
};

export default ImageName;
