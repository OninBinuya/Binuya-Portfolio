import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/logo2.png'

const Header = () => {
  /* Change background header*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if(this.scrollY >= 80) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
});

const[Toggle, showMenu] = useState(false);
const [activeNav, setActiveNav] = useState('#home');

  /* Toggle menu */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    /* Function to load stylesheets only once */
    const loadStylesheet = (url) => {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
      }
    };

    /* Load icon libraries */
    loadStylesheet("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
    loadStylesheet("https://unicons.iconscout.com/release/v4.0.8/css/line.css");
  }, []);

  return (
    <header className="header"> 
      <nav className="nav container">
      <a href="#" className="nav_logo">
        <img src={Logo} alt="Logo" className="logo_image" />
      </a>


        {/* Navigation Menu */}
        <div className={`nav_menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-estate nav_icon"></i>
                Home
              </a> 
            </li>

            <li className="nav_item">
              <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-user nav_icon"></i>
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-wrench nav_icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-briefcase nav_icon"></i>
                Qualifications
              </a>
            </li>

            <li className="nav_item">
              <a href="#certificates" onClick={() => setActiveNav("#certificates")} className={activeNav === "#certificates" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-award nav_icon"></i>
                Certificates
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                <i className="uil uil-phone nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>

          {/* Close Button */}
          <button className="nav_close" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
            <i className="uil uil-times"></i>
          </button>
        </div>

        {/* Menu Toggle Button */}
        <button className="nav_toggle" aria-label="Open menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
