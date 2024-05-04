"use client";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import OpenSearch from "./OpenSearch";
import { motion } from "framer-motion";

const Search = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!document.body.classList.contains("searchTime")) {
      document.body.classList.add("searchTime");
    } else {
      document.body.classList.remove("searchTime");
    }
  }, [openSearch]);

  const toggleSearch = (): void => {
    setOpenSearch((prev) => !prev);
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <IoSearchSharp
          onClick={toggleSearch}
          className="text-White w-4 h-4 sm:w-6 sm:h-6 font-bold cursor-pointer"
        />
        <OpenSearch openSearch={openSearch} toggleSearch={toggleSearch} />
      </motion.div>
    </>
  );
};

export default Search;
