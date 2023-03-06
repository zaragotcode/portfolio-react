import React from 'react';
import './App.css';

// import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Resume from './pages/Resume/Resume';
// import Projects from './pages/Projects/Projects';
// import NavBar from './components/Navbar/NavBar';
// import ProjectDetails from './components/Project/ProjectDetails';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
    </main>
    {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
