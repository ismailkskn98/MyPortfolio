import React from "react";
import styles from "@/app/(admin)/admin/styles.module.css";
import Navbar from "./Navbar";

const Aside = () => {
  return (
    <aside id="adminAside" className={`${styles.adminAside} bg-BG2 text-White flex items-center pt-20 pb-5`}>
      <Navbar />
    </aside>
  );
};

export default Aside;
