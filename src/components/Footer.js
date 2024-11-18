import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Our ISP Service. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
