"use client";
import React, { useEffect, useState } from "react";

const Copyright = () => {
  const [date, setDate] = useState<number>(0);
  useEffect(() => {
    const newDate = new Date().getFullYear();
    setDate(newDate);
  }, [date]);

  return <div id="copyright">© {date} İsmailKeskin. Tüm hakları saklıdır.</div>;
};

export default Copyright;
