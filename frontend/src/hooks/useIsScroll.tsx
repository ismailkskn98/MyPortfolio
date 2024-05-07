import { useEffect, useState } from "react";

export const useIsScroll = (): boolean => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 1) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScroll;
};
