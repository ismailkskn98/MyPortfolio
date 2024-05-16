"use client";
import AdminContainer from "@/containers/adminContainer";
import { AuthFromClient } from "@/hooks/AuthFromClient";
import React from "react";

const page = () => {
  const data = AuthFromClient();
  console.log(data);
  return <AdminContainer />;
};

export default page;
