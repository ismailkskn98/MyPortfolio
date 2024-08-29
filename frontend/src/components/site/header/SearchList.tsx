import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingComponents from "../loading";
// types
import type { SearchBlog } from "@/types";

// http://localhost:3000/api
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;

const SearchList = ({ search, toggleSearch }: { search: string; toggleSearch: () => void }) => {
  const [blogs, setBlogs] = useState<SearchBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/search?query=${search}`);
        const result = await response.json();
        setLoading(false);

        return setBlogs(result.data);
      } catch (error) {
        console.log("Veri çekme hatası:", error);
      }
    };
    if (search.length >= 2) {
      fetchBlogs();
    }
  }, [search]);

  if (loading) {
    return <LoadingComponents />;
  }

  if (blogs.length === 0) {
    return (
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          Sonuç bulunamadı.
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      id="list"
      className="w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.ul
        className="w-full flex flex-col gap-[1px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {blogs?.map((blog: SearchBlog) => (
            <motion.li
              key={blog._id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full py-4 list-none hover:bg-BG1/5"
            >
              <Link href={"/blogs/" + blog.slug} onClick={toggleSearch}>
                <div className="flex flex-col overflow-hidden gap-1">
                  <h3 className="truncate search-list-h3-u text-BG1">{blog.title}</h3>
                  <p className="truncate search-list-p-u text-BG1/40">{blog.subtitle}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
};

export default SearchList;
