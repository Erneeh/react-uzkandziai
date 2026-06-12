import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { TfiAlignJustify } from 'react-icons/tfi';
import { Dialog, DialogPanel } from '@headlessui/react';
import { RiCloseFill } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { PHONE_HREF } from '../data/services';

interface NavbarProps {
  navbarLinks: { id: number; name: string; path: string; icon: JSX.Element }[];
  navbarContacts: { id: number; name: string; icon: JSX.Element; path: string }[];
  logoName: string;
  location: Location;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
}

function Header({ navbarLinks, logoName, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className={`font-sans sticky top-0 z-10 bg-headerColor text-headerFooterText duration-300 ${isScrolled ? 'shadow-sm border-b border-black/10' : ''}`}>
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between px-6 py-3 max-w-6xl lg:px-8"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shrink-0 text-xl font-semibold tracking-tight"
        >
          {logoName}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navbarLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-1.5 text-lg px-1 py-1 transition-all duration-200 ${
                location.pathname === item.path
                  ? 'font-semibold underline underline-offset-8 decoration-buttonColor'
                  : 'hover:text-buttonColor'
              }`}
            >
              <span className="text-base opacity-70">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={PHONE_HREF}
          className="hidden lg:inline-flex items-center gap-2 bg-buttonColor text-textColor font-semibold text-base px-5 py-2.5 rounded-full shadow border border-footerColor hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-textColor shrink-0"
        >
          <FiPhone className="h-4 w-4" />
          Užsisakykite
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden -m-2 p-2 rounded-md"
          aria-label="Atidaryti meniu"
        >
          <TfiAlignJustify className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-headerColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-headerFooterText/10 sm:border-l-2 sm:border-black/20">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-xl font-semibold tracking-tight" onClick={() => setMobileMenuOpen(false)}>
              {logoName}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2 p-2 rounded-lg"
              aria-label="Uždaryti meniu"
            >
              <RiCloseFill className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navbarLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex items-center gap-2 text-2xl py-3 px-2 rounded-xl transition-all ${
                  location.pathname === item.path
                    ? 'font-semibold underline underline-offset-8 decoration-buttonColor'
                    : 'hover:bg-black/5'
                }`}
              >
                <span className="opacity-60">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-black/10">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-buttonColor text-textColor font-semibold text-xl px-6 py-4 rounded-full shadow border border-footerColor hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-textColor"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiPhone className="h-5 w-5" />
              Užsisakykite
            </a>
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
