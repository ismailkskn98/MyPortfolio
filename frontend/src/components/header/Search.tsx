"use client";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import OpenSearch from "./OpenSearch";

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
      <div>
        <IoSearchSharp
          onClick={toggleSearch}
          className="text-White w-6 h-6 font-bold cursor-pointer"
        />
        <OpenSearch openSearch={openSearch} toggleSearch={toggleSearch} />
      </div>
    </>
  );
};

export default Search;
