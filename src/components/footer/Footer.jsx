import React from 'react'
import './footer.css'
import Logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <a href="#" className="footer_logo">
                    <img src={Logo} alt="Logo" className="footer_image" />
            </a>
            
           
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>
                <li>
                    <a href="#certificates" className="footer__link">Certificates</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/oninjohnpaulbinuya/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.facebook.com/oninjohnpaul.binuya/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
            
                <a href="https://github.com/OninBinuya" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Onin Binuya. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
