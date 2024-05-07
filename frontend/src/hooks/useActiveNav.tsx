import { useEffect, useState } from "react";

type ActiveNav = {
  handleNavLinkClick: (sectionId: string) => void;
  sectionId: string;
};

export const useActiveNav = (): ActiveNav => {
  const [sectionId, setSectionId] = useState<string>("anasayfa");

  // her scroll olduğunda çalışacak
  const handleScroll = (): void => {
    // sectionları seçiyoruz
    const sections = document.querySelectorAll("section");
    let currentSection: string;
    sections.forEach((section) => {
      const sectionOffsetTop = section.offsetTop; // section'nın üst kenarı window üst kenardan olan uzaklığı
      const sectionClientHight = section.clientHeight; // section'nın yüksekliği
      currentSection = section.id;
      if (
        window.scrollY >= sectionOffsetTop &&
        window.scrollY < sectionClientHight + sectionOffsetTop
      ) {
        // window scroll eğer section'nın topdan yüksekliğinden büyük ve section'nın yüksekliği + section'nın topdan yükseliği den küçük ise o section'nın içerisinde olmuş oluyoruz
        setSectionId(currentSection);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // scroll olduğunda
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // nav itemlardan hangisine tıklanırsa o section ıd'ye gidecek
  const handleNavLinkClick = (sectionId: string): void => {
    setSectionId(sectionId);
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  return { handleNavLinkClick, sectionId };
};
