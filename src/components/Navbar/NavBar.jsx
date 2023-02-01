import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <header>
      <Link to="/">PATRICK MAZARA</Link>
      <Link to="/contact"></Link>
      <Link to="/resume"></Link>
			<Link to="/projects"></Link>
    </header>
  );
};

export default NavBar;