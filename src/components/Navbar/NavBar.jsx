import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
  <div>
    <header>
      <ul>
        <li>
          <Link to="/">PATRICK MAZARA</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>  
      </ul> 
    </header>
  </div>
  );
};

export default NavBar;