import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Routes from './Routes' // Adjust the path if necessary
import Footer from './components/Footer'
import { GrContact } from 'react-icons/gr';
import { BiHome } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { LuMessagesSquare } from 'react-icons/lu';
import { SpeedInsights } from '@vercel/speed-insights/react';

const navbarProps = {
  logoName: 'Testinu.lt',
  
  navbarLinks: [
    { id: 1, name: 'Pagrindinis', path: '/', icon: <BiHome />},
    ///{ id: 1, name: 'Paslaugos', path: '/paslaugos', icon: <PiForkKnifeBold />},
    { id: 1, name: 'Kontaktai', path: '/kontaktai', icon: <GrContact />},
  ],

  navbarContacts: [
    {id: 1, name: 'Susisiekti', icon: <FiPhone />, path: 'tel:+37062699956'},
    {id: 2, name: 'Parašyti', icon: <LuMessagesSquare />, path: 'sms:++37062699956'},
  ]
}





function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <Router>
      <Header {...navbarProps} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} location={location}/>
      <Routes/>
      <Footer {...navbarProps} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} location={location}/>
      <SpeedInsights />
    </Router>
    </>
    
  )
}

export default App
