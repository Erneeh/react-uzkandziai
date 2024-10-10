import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Routes from './Routes' // Adjust the path if necessary
import Footer from './components/Footer'
import { ImSpoonKnife } from 'react-icons/im';
import { GrContact } from 'react-icons/gr';
import { BiHome } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { LuMessagesSquare } from 'react-icons/lu';
import { PiForkKnife, PiForkKnifeBold } from 'react-icons/pi';

const navbarProps = {
  logoName: 'Testinu.lt',
  
  navbarLinks: [
    { id: 1, name: 'Pagrindinis', path: '/', icon: <BiHome />},
    { id: 1, name: 'Paslaugos', path: '/paslaugos', icon: <PiForkKnifeBold />},
    { id: 1, name: 'Kontaktai', path: '/kontaktai', icon: <GrContact />},
  ],

  navbarContacts: [
    {id: 1, name: 'Susisiekti', icon: <FiPhone />, path: 'tel:+862929558'},
    {id: 2, name: 'Parašyti', icon: <LuMessagesSquare />, path: 'sms:+862929558'},
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
    </Router>
    </>
    
  )
}

export default App
