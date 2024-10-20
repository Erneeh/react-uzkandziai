import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Kontaktai from './pages/Kontaktai';
import Galerija from './pages/Galerija';
import PuslapisNerastas from './pages/PuslapisNerastas';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="*" element={<PuslapisNerastas />} />
      </Routes>
  );
};

export default AppRoutes;