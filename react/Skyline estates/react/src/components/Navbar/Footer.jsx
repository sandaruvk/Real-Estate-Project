import React, { useRef } from "react";
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const footerWidth = footerRef.current.offsetWidth;
    const footerHeight = footerRef.current.offsetHeight;
    const xPos = (clientX / footerWidth) * 100;
    const yPos = (clientY / footerHeight) * 100;
    footerRef.current.style.backgroundPosition = `${xPos}% ${yPos}%`;
  };

  return (
    <div className="footer d-flex flex-column justify-content-center align-items-center mt-5 bg-dark" style={{ fontFamily: 'Roboto' }} ref={footerRef} onMouseMove={handleMouseMove}>
      <div className="w-75 text-center text-white dark-text">
        <p>&copy; 2024 Skyline Estates</p>
        <a href="#" className="text-white">Privacy Policy</a> | <a href="#" className="text-white">Terms of Service</a>
      </div>
      <div className="w-75 d-flex justify-content-between align-items-center mt-5 dark-text">
        <div className="Resources">
          <h5 className="text-white">Resources</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Blog</a></li>
            <li><a href="#" className="text-white">FAQ</a></li>
            <li><a href="#" className="text-white">Help Center</a></li>
          </ul>
        </div>
        <div className="Skyline Estates">
          <h5 className="text-white">Skyline Estates</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Search Homes for sale</a></li>
            <li><a href="#" className="text-white">Search homes for rent</a></li>
            <li><a href="#" className="text-white">Commercial for sale</a></li>
            <li><a href="#" className="text-white">Sign in/Create account</a></li>
          </ul> </div>

          <div className="Popualr Locations">
          <h5 className="text-white">Popular Locations in Dubai</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Burj Khalifa and Downtown</a></li>
            <li><a href="#" className="text-white">Dubai Marina</a></li>
            <li><a href="#" className="text-white">Palm Jumeirah</a></li>
          </ul> </div>

        <div className="Quick-links">
          <h5 className="text-white">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Contact Us</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="w-75 text-center social-media-links mt-5 d-flex justify-content-center dark-text">
        <a href="https://www.facebook.com/" className="text-white mx-2">Facebook</a>
        <a href="https://twitter.com/?lang=en" className="text-white mx-2">Twitter</a>
        <a href="https://www.instagram.com/" className="text-white mx-2">Instagram</a>
        <a href="https://lk.linkedin.com/" className="text-white mx-2">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;