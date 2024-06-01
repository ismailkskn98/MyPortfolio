import HomeContainer from "@/containers/homeContainer";
import { homeAPI } from "@/helper/homeAPI";
import React from "react";

const Home = async () => {
  const [resultGetSkills, resultLastBlog, resultGetHero, resultGetAbout] = await Promise.all([
    homeAPI("skills", undefined, "GET"),
    homeAPI("blogs/lastblog", undefined, "GET"),
    homeAPI("hero", undefined, "GET"),
    homeAPI("about", undefined, "GET"),
  ]);
  console.log(resultGetSkills);
  console.log(resultLastBlog);
  console.log(resultGetHero);
  console.log(resultGetAbout);
  if (
    typeof resultLastBlog === "string" ||
    typeof resultGetHero === "string" ||
    typeof resultGetAbout === "string" ||
    typeof resultGetSkills === "string"
  ) {
    throw new Error(
      "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun."
    );
  }
  return (
    <HomeContainer
      blog={resultLastBlog}
      hero={resultGetHero}
      about={resultGetAbout}
      skills={resultGetSkills}
    />
  );
};

export default Home;
