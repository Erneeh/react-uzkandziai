import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import React, { useState } from 'react'
import { GrLinkedin } from 'react-icons/gr';
import { PiMonitorArrowUp } from 'react-icons/pi';
import { RiCloseFill } from 'react-icons/ri';
import { TfiAlignJustify } from 'react-icons/tfi'
import { useLocation, Location, Link } from 'react-router-dom';


interface NavbarProps {
  navbarLinks: { id: number; name: string; path: string; icon: JSX.Element }[];
  navbarContacts: { id: number; name: string; icon: JSX.Element; path: string }[];
  logoName: string;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
}

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className='lg:w-full w-1/4 flex justify-center items-center gap-2 text-gray-800 font-semibold text-xl px-4 py-3 
                 bg-gradient-to-r from-rose-400 to-rose-500 hover:bg-gradient-to-l 
                 hover:from-rose-500 hover:to-rose-400 rounded-full shadow lg 
                 border border-rose-100 cursor-pointer transform 
                 hover:scale-110 transition-transform duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-rose-500'
      aria-label="Scroll to top"
      type="button"
    >
      <PiMonitorArrowUp className='w-6 h-6' />
    </button>
  );
};

const Footer = ({ navbarLinks, logoName, navbarContacts, mobileMenuOpen, setMobileMenuOpen}: NavbarProps) => {
  const location = useLocation();

  return (
    <>
    <footer className='bg-rose-400 font-sans bottom-0 py-6 border-rose-200 border-t'>
      <nav className='mx-auto lg:flex lg:flex-row flex flex-col max-w-3xl items-center justify-between text-center pt-4 lg:px-8'
      aria-label="Global">
        <div className='flex-row w-full  lg:w-auto items-center justify-center p-6 lg:border-none border-rose-100 border-t border-b'>
        <Link to='/' className='-m-1.5 p-1.5'>
          <span className='text-2xl text-gray-800'>{logoName}</span>
        </Link>
        </div>

        <div className='flex-row w-auto lg:flex lg:w-auto items-center justify-center lg:p-6 p-2'>
          <div className='bg-rose-200 shadow lg border flex border-rose-100 rounded-3xl p-3'>
          {navbarLinks.map((item) => (
          <Link to={item.path}
          className={ location.pathname === item.path 
            ? 'text-rose-500 font-semibold hover:text-rose-300 transition duration-500 decoration-rose-500 hover:decoration-rose-300 text-auto lg:text-2xl px-3 cursor-pointer' 
            : 'hover:text-rose-300  transition duration-500 text-gray-800 text-xl lg:text-2xl px-3 cursor-pointer'}
          key={item.name}           
          >
          <span className='flex items-center gap-1 rounded-2xl p-2.5 '>
            {item.name}
          </span>
          </Link>
        ))}
          </div>
        </div>

        <div className='flex-row w-full lg:flex lg:w-auto items-center flex justify-center lg:p-6 '>
        <ScrollToTopButton />
        </div>
      </nav>
      <div className='mx-auto lg:flex lg:flex-row flex flex-col max-w-3xl items-center justify-center text-center p-2 lg:px-8'>
        <a href="https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/"
        className='flex items-center space-x-3 text-gray-800 hover:text-rose-200 transition duration-300 pt-5'>
        <span>Sukurta:  </span><GrLinkedin/>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer