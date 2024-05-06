import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const FooterMedia = () => {
  return (
    <div
      id="footerMedia"
      className="flex-grow flex items-center justify-end gap-8 order-1 lg:order-2"
    >
      <span className="p-2 rounded-full bg-Brand1">
        <Link href={"https://www.instagram.com/h.ismailkeskin/"}>
          <FaInstagram className="text-BG1" />
        </Link>
      </span>
      <span className="p-2 rounded-full bg-Brand1">
        <Link href={"https://www.linkedin.com/in/ismail-keskin-556538242/"}>
          <FaLinkedin className="text-BG1" />
        </Link>
      </span>
      <span className="p-2 rounded-full bg-Brand1">
        <Link href={"https://github.com/ismailkskn98"}>
          <FaGithub className="text-BG1" />
        </Link>
      </span>
    </div>
  );
};

export default FooterMedia;
