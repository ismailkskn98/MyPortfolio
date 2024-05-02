import Link from "next/link";
import React from "react";

const SearchList = () => {
  return (
    <div id="list" className="w-full overflow-hidden">
      <ul className="w-full flex flex-col gap-[1px]">
        <li className="w-full py-4 list-none hover:bg-BG1/5">
          <Link href="#">
            <div className="flex flex-col overflow-hidden gap-1">
              <h3 className="truncate search-list-h3-u text-BG1">Lorem ipsum dolor sit amet.</h3>
              <p className="truncate search-list-p-u text-BG1/40">Lorem, ipsum dolor.</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchList;
