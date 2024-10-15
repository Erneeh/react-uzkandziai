import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { TfiAlignJustify } from 'react-icons/tfi';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { RiCloseFill } from 'react-icons/ri';


interface NavbarProps {
  navbarLinks: { id: number; name: string; path: string; icon: JSX.Element }[];
  navbarContacts: { id: number; name: string; icon: JSX.Element; path: string }[];
  logoName: string;
  location: Location;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
}

function Header({ navbarLinks, logoName, navbarContacts, mobileMenuOpen, setMobileMenuOpen}: NavbarProps) {
  const location = useLocation();
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     <>
     <header className={`font-sans sticky top-0 scroll-smooth z-10 bg-headerColor text-headerFooterText transform duration-100 lg:border-none border-b border-black ${ isScrolled ? "bg-inherit " : " p-2 lg:border-none" }`}>
      <nav aria-label='Global' className={`mx-auto flex items-center justify-evenly p-6 max-w-6xl lg:px-8  lg:border-black  ${ isScrolled ? "bg-headerColor lg:rounded-b-3xl lg:border-b lg:border-x" : "bg-headerColor lg:rounded-3xl lg:border"}`}>
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
          <span className='text-2xl'>{logoName}</span>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button 
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
          >
          <span className='sr-only'>Atidaryti</span>
          <TfiAlignJustify aria-hidden="true" className='h-6 w-6'/>
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:space-x-12">
        {navbarLinks.map((item) => (
          <Link to={item.path}
          className={ location.pathname === item.path 
            ? 'text-headerFooterText font-semibold  underline underline-offset-8 decoration-buttonColor  text-2xl px-3 cursor-pointer' 
            : 'hover:scale-105 transition  text-2xl px-3 cursor-pointer'}
          key={item.name}           
          >
          <span className='lg:flex items-center gap-1'>
            {item.icon}
            {item.name}
          </span>
          </Link>
        ))}
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-3'>
          {navbarContacts.map((item) => (
            <a href={item.path}
            >
              <button 
              className='flex justify-center items-center gap-2 font-semibold text-textColor hover:text-headerFooterText text-xl px-4 py-4 bg-buttonColor rounded-full shadow lg 
                 border border-footerColor cursor-pointer transform
                 hover:scale-110 transition-transform duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-textColor'
              key={item.name}
              type="button"
              >
              {item.icon}
              </button>
            </a>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className='fixed inset-0 z-10 ' />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-headerColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-headerFooterText/10 sm:border-black sm:border-l-2 ">
            <div className='flex items-center justify-around'>
              <Link to='/' className='-m-1.5 p-1.5'>
              <span className='text-2xl'>{logoName}</span>
              </Link>
              <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-lg p-2.5 '
              >
                <span className='sr-only'>Uždaryti</span>
                <RiCloseFill aria-hidden='true' className='h-6 w-6' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-800/30'> 
                <div className='space-y-2 py-12 sm:py-6 items-center justify-center flex flex-col sm:flex sm:flex-col sm:items-start'>
                  {navbarLinks.map((item) => (
                    <Link to={item.path}
                    className={ location.pathname === item.path 
                      ? 'text-headerFooterText font-semibold  text-3xl  py-3 sm:text-2xl px-3 cursor-pointer  underline underline-offset-8 decoration-buttonColor' 
                      : 'hover:scale-105  transition  text-3xl py-3 sm:text-2xl px-3 cursor-pointer'}
                    key={item.name}           
                    >
                      <span className='flex items-center gap-1'>{item.icon}{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className='py-6 flex flex-row justify-between '>
                {navbarContacts.map((item) => (
                  <a href={item.path}
                  className='w-1/2 text-center items-center justify-center flex'>
                    <button
                    className='flex justify-center items-center gap-2  font-semibold text-textColor hover:text-headerFooterText text-xl px-4 py-4 bg-buttonColor rounded-full shadow lg 
                 border border-footerColor cursor-pointer transform 
                 hover:scale-110 transition-transform duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-gray-400 w-3/4'
                    key={item.name}
                    type="button"
                    >{item.icon}
                    </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
      </Dialog>
     </header>
     
     </>
  )
}

export default Header

//daugumos dalyku nemoku, bet gebu surinkti informacija kurios man reikia internetu ir ja iterpti tinkamai. Sugeba skaityti koda
// pradejau kurti savo sablona, bet paskui suvokiau, kad tai uzims per daug laiko vien headerio componentui, viska buvau irases, visus kintamuosius ir t.t, gaudamas draugo patarima, kad geriau ne paciam bandyti konstruoti, o imti is interneto ir analizuoti, suprasti kaip viskas vyksta , daug geresnis mokymosi/darbo procesas. Pasiemes tailwind headerio sablona ,viska perrasiau html pavidalu, paskui pridejau ir tailwind klasses, ziuredamas kaip kiekviena klase pritaikytam kiekvienam html elementui viska pakeicia. Viskas pavyko. Pagalvojau, kad reikia sukurti kazka panasaus i routes, kad paspaudus ant kiekvieno linko numesti i kazkoki tai puslapi, ir man nereiketu duplikuoti kodo, tai su chatgpt pagalba kuria labiausiai ir naudojausi, suzinojau kaip parasyti ir susieti su routes.tsx, man tai pavyko. Sugalvojau pakeisti kaip atrodo collapse meniu(dialog siuo atveju) ant mazesniu rezoliuciju nei SM (tailwind formoje), padariau, kad butu sucentruota, ir pridejau borderius po apacia, kad butu pazymetas(UX/UI puseje). Headeris kaip ir done, bet manau dar pridesiu kokia transitiona,animacija, kuri pagrazintu isejima is sono/atgal i ji. sugalvojau panaudoti useLocation funkcija kuri leistu man suzinoti esama vieta ir prilyginti esamai vietai su path.link is objekto/array ir jeigu tai atitinka (panasiai kaip active funkcija) - butu pakeista spalva. (gan basic, bet uztruko siek tiek laiko issiaiskint,bet nebuvo pernelyg sunku.)

//pradejus kurti footeri, pagalvojau, kaip apeit duplikacijos problema su const kintamaisiasi (objektais), kad nereiktu naudoti tu paciu tiek headerio/footerio tsx., tai juos ikeliau i app.tsx ir naudodamas props funkcija imeciau tiek i headeri tiek i footeri. kolkas footeris atrodo kaip headeris, kol dar neturiu ideju kaip padaryt. Bet svarbiausia kad linkai kiekviename kai yra aktyvi pasizymi tiek headeryje tiek footeryje. Toliau is eigos pakeisiu footeri. 

// footeris sutvarkytas, pereinu prie turinio home page ir kituose.