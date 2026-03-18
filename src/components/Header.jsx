import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Page load animation trigger
    setTimeout(() => setPageLoaded(true), 100);
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 100; // Only apply after scrolling past this point
          
          // Update scrolled state for styling
          setIsScrolled(currentScrollY > 20);
          
          // Show/hide logic based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // Scrolling down - hide navbar
            setIsVisible(false);
            setIsMenuOpen(false); // Close mobile menu if open
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/faq', label: 'FAQ' }
  ];

  const handleCallNow = () => {
    window.location.href = `tel:${BUSINESS_PHONE.replace('+', '')}`;
  };

  const handleWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hello, I have an inquiry.');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'header-hidden' : ''} ${pageLoaded ? 'loaded' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <Link to="/">
            <img src="/websitelogo.webp" alt="Shaghara AC Workshop" className="header-logo-image" loading="lazy" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.path} style={{ transitionDelay: `${150 + (index * 50)}ms` }}>
                <Link 
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="header-cta desktop-cta">
          <button onClick={handleCallNow} className="btn-call">
            <Phone size={18} />
            <span>Call Now</span>
          </button>
          <button onClick={handleWhatsApp} className="btn-whatsapp">
            <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="header-whatsapp-icon" loading="lazy" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile CTA Buttons */}
          <div className="header-cta mobile-cta">
            <button onClick={handleCallNow} className="btn-call">
              <Phone size={18} />
              <span>Call Now</span>
            </button>
            <button onClick={handleWhatsApp} className="btn-whatsapp">
              <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="header-whatsapp-icon" loading="lazy" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
