import { NavLink } from 'react-router-dom';

import logo from '../../assets/branding/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="navbar__brand" to="/" aria-label="Home">
        <img src={logo} alt="Rowe Hessler Logo" />
      </NavLink>

      <nav className="navbar__links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/speedcubing">Speedcubing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
