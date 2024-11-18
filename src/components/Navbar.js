import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import your custom styles

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // Check if you're on the homepage
    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If you're not on the homepage, navigate to the correct route
      navigate(`/${id}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ISP Service</Link>
      </div>
      <div className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li>
          <button onClick={() => { scrollToSection('packages'); toggleMenu(); }}>
            Packages
          </button>
        </li>
        {/* <li>
          <button onClick={() => { scrollToSection('products'); toggleMenu(); }}>
            Products
          </button>
        </li> */}
        {/* <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li> */}
        {/* <li><Link to="/payment" onClick={toggleMenu}>Payment</Link></li> */}
        {/* <li><Link to="/admin" onClick={toggleMenu}>Admin Dashboard</Link></li> */}
        <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
        <li><Link to="/coverage" onClick={toggleMenu}>Coverage</Link></li> {/* Added Coverage link */}
        <li><Link to="/installationprocess" onClick={toggleMenu}>Installation</Link></li> {/* Added Coverage link */}
        <li><Link to="/login" onClick={toggleMenu}>LogIn</Link></li> {/* Added Coverage link */}
        {/* <li><Link to="/profile" onClick={toggleMenu}>profile</Link></li> */}

      </ul>
    </nav>
  );
}

export default Navbar;
