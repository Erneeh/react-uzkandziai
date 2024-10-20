import React from 'react'
import { GrLinkedin } from 'react-icons/gr';
import { PiMonitorArrowUp } from 'react-icons/pi';
import { useLocation, Link } from 'react-router-dom';


interface NavbarProps {
  navbarLinks: { id: number; name: string; path: string; icon: JSX.Element }[];
  navbarContacts: { id: number; name: string; icon: JSX.Element; path: string }[];
  logoName: string;
  location: Location;
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
      className='lg:w-full w-1/4 flex justify-center items-center gap-2 text-textColor hover:text-headerFooterText font-semibold text-xl px-4 py-3 bg-buttonColor rounded-full shadow lg 
      border border-footerColor cursor-pointer transform 
      hover:scale-110 transition-transform duration-300 ease-in-out 
      focus:outline-none focus:ring-2 focus:ring-textColor'
      aria-label="Scroll to top"
      type="button"
    >
      <PiMonitorArrowUp className='w-6 h-6' />
    </button>
  );
};

const Footer = ({ navbarLinks, logoName}: NavbarProps) => {
  const location = useLocation();

  return (
    <>
    <footer className='bg-footerColor font-sans bottom-0 py-6 border-buttonRingColor border-t text-textColor'>
      <nav className='mx-auto lg:flex lg:flex-row flex flex-col max-w-3xl items-center justify-between text-center pt-4 lg:px-8'
      aria-label="Global">
        <div className='flex-row w-full  lg:w-auto items-center justify-center p-6 lg:border-none border-textColor/30 border-t border-b'>
        <Link to='/' 
        className='-m-1.5 p-1.5'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className='text-2xl text-buttonTextColor'>{logoName}</span>
        </Link>
        </div>

        <div className='flex-row flex w-auto lg:flex lg:w-auto items-center justify-center lg:p-6 p-2'>
          
          {navbarLinks.map((item) => (
          <Link to={item.path}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={ location.pathname === item.path 
            ? 'text-textColor font-semibold transition  text-xl lg:text-2xl px-3 cursor-pointer' 
            : 'hover:scale-105 transition  text-xl lg:text-2xl px-3 cursor-pointer'}
          key={item.name}           
          >
          <span className='flex items-center gap-1 rounded-2xl p-2.5 '>
            {item.name}
          </span>
          </Link>
        ))}
          
        </div>

        <div className='flex-row w-full lg:flex lg:w-auto items-center flex justify-center lg:p-6 '>
        <ScrollToTopButton />
        </div>
      </nav>
      <div className='mx-auto lg:flex lg:flex-row flex flex-col max-w-3xl items-center justify-center text-center p-2 lg:px-8'>
        <a href="https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/"
        className='flex items-center space-x-3 text-headerFooterText hover:text-textColor hover:scale-105 transition duration-300 pt-5'>
        <span>Sukurta:  </span><GrLinkedin/>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer