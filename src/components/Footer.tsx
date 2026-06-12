import React from 'react'
import { GrLinkedin } from 'react-icons/gr';
import { useLocation, Link } from 'react-router-dom';
import { services } from '../data/services';

interface NavbarProps {
  navbarLinks: { id: number; name: string; path: string; icon: JSX.Element }[];
  navbarContacts: { id: number; name: string; icon: JSX.Element; path: string }[];
  logoName: string;
  location: Location;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
}

const Footer = ({ logoName }: NavbarProps) => {
  const location = useLocation();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-footerColor font-sans border-t border-black/10 pt-10 pb-6 text-headerFooterText">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Top row: logo + service links */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={scrollTop} className="text-xl font-semibold tracking-tight">
              {logoName}
            </Link>
          </div>

          {/* Service links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-headerFooterText/60 mb-3">Paslaugos</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}`}
                    onClick={scrollTop}
                    className={`text-base transition hover:text-buttonColor ${
                      location.pathname === `/${service.slug}` ? 'font-semibold underline underline-offset-4 decoration-buttonColor' : ''
                    }`}
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-black/10" />

        {/* Bottom row: nav links + attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-headerFooterText/70">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {[
              { name: 'Pagrindinis', path: '/' },
              { name: 'Paslaugos', path: '/paslaugos' },
              { name: 'Galerija', path: '/galerija' },
              { name: 'Kontaktai', path: '/kontaktai' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollTop}
                className={`transition hover:text-headerFooterText ${
                  location.pathname === item.path ? 'font-semibold text-headerFooterText' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/"
            className="flex items-center gap-1.5 hover:text-headerFooterText transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sukurta: <GrLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
