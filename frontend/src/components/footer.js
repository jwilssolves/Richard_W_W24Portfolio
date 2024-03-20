import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;