import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <>
        <div className='relative hidden lg:block'>
            <input type='search' name='search' id='search' className='outline-none rounded-3xl max-w-[204px] max-h-8 py-2 px-9' />
            <IoSearchOutline className='absolute left-4 top-1/2 -translate-y-[50%] w-5 h-5' />
        </div>
        <div className='relative block lg:hidden'>
            <IoSearchSharp className='text-White w-5 h-5 font-bold cursor-pointer' />
        </div>
    </>
  )
}

export default Search