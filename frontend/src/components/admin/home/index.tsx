import React from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full flex flex-col gap-10 py-3 px-6">{children}</div>;
};

export default Home;
