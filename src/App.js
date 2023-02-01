import './App.css';

import { Routes, Route } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import ProjectList from './pages/Projects/ProjectList';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App;
