import React from "react";
import styles from "./styles.module.css";

const Left = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="left"
      // className="min-w-[320px] h-[520px] p-6 flex flex-col items-start gap-8 border-4 border-solid border-White rounded-tl-[160px] rounded-br-[160px] animate-pulseShadow"
      className={styles.left}
    >
      {children}
    </div>
  );
};

export default Left;
