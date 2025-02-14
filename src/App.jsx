import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualifications/Qualification';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <main className="main" >
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
