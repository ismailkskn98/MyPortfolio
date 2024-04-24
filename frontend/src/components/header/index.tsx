import React from 'react'
import Navbar from './navbar';
import Search from './Search';
import SocialMedia from './SocialMedia';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='w-full'>
      <div className="container h-[68px] sm:h-[80px] lg:h-[170px] flex items-center justify-between">
        <Logo />
        <section className='flex items-center gap-16'>
          <Navbar />
          <div className='flex items-center gap-16'>
            <Search />
            <SocialMedia />
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header