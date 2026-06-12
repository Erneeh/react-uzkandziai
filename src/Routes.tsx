import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Kontaktai from './pages/Kontaktai';
import Galerija from './pages/Galerija';
import Paslaugos from './pages/Paslaugos';
import Paslauga from './pages/Paslauga';
import PuslapisNerastas from './pages/PuslapisNerastas';
import { services } from './data/services';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        {services.map((service) => (
          <Route
            key={service.slug}
            path={`/${service.slug}`}
            element={<Paslauga service={service} />}
          />
        ))}
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="*" element={<PuslapisNerastas />} />
      </Routes>
  );
};

export default AppRoutes;
