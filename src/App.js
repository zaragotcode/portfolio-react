import React from 'react';
import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
