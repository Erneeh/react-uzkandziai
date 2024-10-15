import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Kontaktai from './pages/Kontaktai';
import Paslaugos from './pages/Paslaugos';
import PuslapisNerastas from './pages/PuslapisNerastas';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="*" element={<PuslapisNerastas />} />
      </Routes>
  );
};

export default AppRoutes;