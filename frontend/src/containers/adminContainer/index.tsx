import Home from "@/components/admin/home";
import HomeHeader from "@/components/admin/home/HomeHeader";
import HomeMain from "@/components/admin/home/HomeMain";
import React from "react";

const AdminContainer = () => {
  return (
    <Home>
      <HomeHeader />
      <HomeMain />
    </Home>
  );
};

export default AdminContainer;
