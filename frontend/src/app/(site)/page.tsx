import HomeContainer from "@/containers/homeContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

export const revalidate = 60 * 5; // 5 dakika

const Home = async () => {
  const [resultGetSkills, resultLastBlog, resultGetHero, resultGetAbout, resultGetWorks] = await Promise.all([
    fetchApi("skills", undefined, "GET", "force-cache"),
    fetchApi("blogs/last-blog", undefined, "GET", "force-cache"),
    fetchApi("hero", undefined, "GET", "force-cache"),
    fetchApi("about", undefined, "GET", "force-cache"),
    fetchApi("works", undefined, "GET", "force-cache"),
  ]);

  if (
    typeof resultLastBlog === "string" ||
    typeof resultGetHero === "string" ||
    typeof resultGetAbout === "string" ||
    typeof resultGetSkills === "string" ||
    typeof resultGetWorks === "string"
  ) {
    throw new Error("Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.");
  }

  return (
    <HomeContainer
      blog={resultLastBlog}
      hero={resultGetHero}
      about={resultGetAbout}
      skills={resultGetSkills}
      works={resultGetWorks}
    />
  );
};

export default Home;
