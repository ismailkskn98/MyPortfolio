"use client";
import React from "react";
import SearchList from "./SearchList";
import { IoSearchSharp } from "react-icons/io5";
import { motion } from "framer-motion";

type Props = {
  openSearch: boolean;
  toggleSearch: () => void;
};

const OpenSearch: React.FC<Props> = ({ openSearch, toggleSearch }) => {
  return (
    <>
      {openSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          id="searchBodyWrapper"
          onClick={toggleSearch}
          className="w-full h-screen absolute top-0 left-0 z-10 bg-[#0000]/70 flex items-start justify-center pt-52"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            id="searchListWrapper"
            className="bg-White rounded-[32px] px-5 py-3 w-[35rem] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              id="search"
              className="w-full relative h-12 flex items-center justify-center gap-3"
            >
              <IoSearchSharp className="w-[23px] h-[23px] text-BG1/50 font-bold" />
              <input
                type="search"
                placeholder="Ara..."
                className="w-full border-none outline-none search-u text-BG1/70 tracking-wider"
              />
            </div>
            <div id="searchLine" className="w-full h-[1px] bg-BG1/5 px-5"></div>
            <SearchList />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default OpenSearch;
