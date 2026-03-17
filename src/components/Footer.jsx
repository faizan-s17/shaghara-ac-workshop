import { Link } from 'react-router-dom';
import ClockIcon from './icons/ClockIcon';
import PhoneCallIcon from './icons/PhoneCallIcon';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallNow = () => {
    window.location.href = `tel:${BUSINESS_PHONE.replace('+', '')}`;
  };

  const handleWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hello, I have an inquiry.');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Column 1: Business Info */}
          <div className="footer-column">
            <h3>Shaghara AC Workshop</h3>
            <p>
              Trusted home appliance repair and AC service in Abu Shagara, Sharjah.
              With over 25 years of experience, we provide reliable door-to-door
              repair services for all major home appliances.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <img src="/assets/googlemapsicon.svg" alt="Map" className="footer-map-icon" />
                <span>
                  <a href="https://www.google.com/maps/search/Abu+Shagara,+Sharjah,+UAE" target="_blank" rel="noopener noreferrer">Abu Shagara, Sharjah, UAE</a>
                </span>
              </li>

              <li>
                <PhoneCallIcon size={18} />
                <a href={`tel:${BUSINESS_PHONE.replace('+', '')}`}>Call: {BUSINESS_PHONE}</a>
              </li>

              <li>
                <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="footer-whatsapp-icon" />
                <a href={`https://wa.me/${BUSINESS_WHATSAPP.replace('+', '')}`} target="_blank" rel="noopener noreferrer">WhatsApp: {BUSINESS_WHATSAPP}</a>
              </li>

              <li>
                <ClockIcon size={18} />
                <span>Working Hours: 9:00 AM to 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Shaghara AC Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
