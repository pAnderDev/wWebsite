import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const homeRef = useRef(Home);
  const aboutRef = useRef(About);
  const contactRef = useRef(Contact);
  const qualificationsRef = useRef(Qualifications);
  const servicesRef = useRef(Services);

  const scrollToSection = (section) => {
    if (section === 'home') homeRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'qualifications') qualificationsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'services') servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={qualificationsRef}><Qualifications /></div>
      <div ref={contactRef}><Contact /></div>
      <div><Footer /></div>
    </div>
  );
};

export default App;
