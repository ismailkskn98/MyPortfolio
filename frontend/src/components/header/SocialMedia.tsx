import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { LiaDiscord } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
        <div className='items-center gap-8 media-m hidden sm:flex'>
            <Link href={''} className='flex items-center gap-2'><FaInstagram className='text-Brand1 w-5 h-5' /><p className='text-White hidden 2xl:inline-block'>Instagram</p></Link>
            <Link href={''} className='flex items-center gap-2'><LiaDiscord className='text-Brand1 w-5 h-5' /><p className='text-White hidden 2xl:inline-block'>Discord</p></Link>
            <Link href={''} className='flex items-center gap-2'><FaGithub className='text-Brand1 w-5 h-5' /><p className='text-White hidden 2xl:inline-block'>Github</p></Link>
        </div>
  )
}

export default SocialMedia