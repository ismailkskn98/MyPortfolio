import React from "react";
import styles from "./styles.module.css";

const LoadingComponents = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
};

export default LoadingComponents;
