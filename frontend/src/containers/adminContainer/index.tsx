import Home from "@/components/admin/home";
import HomeHeader from "@/components/admin/home/HomeHeader";
import HomeMain, { BlogsCountType } from "@/components/admin/home/HomeMain";
import React from "react";

const AdminContainer = ({ blogsCount }: { blogsCount: BlogsCountType }) => {
  return (
    <Home>
      <HomeHeader />
      <HomeMain blogsCount={blogsCount} />
    </Home>
  );
};

export default AdminContainer;
