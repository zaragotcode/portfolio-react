import React from 'react';
import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';


function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Footer />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
