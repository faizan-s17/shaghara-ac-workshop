import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './StickyBar.css';

const StickyBar = () => {
  const callNow = () => {
    window.location.href = `tel:${BUSINESS_PHONE.replace('+', '')}`;
  };

  const openWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hello, I need service.');
  };

  return (
    <div className="sticky-bar" role="navigation" aria-label="Quick actions">
      <button className="sticky-btn sticky-call" onClick={callNow} aria-label="Call now">
        <Phone size={18} />
        <span>Call</span>
      </button>

      <button className="sticky-btn sticky-whatsapp" onClick={openWhatsApp} aria-label="WhatsApp">
        <img src="/assets/whatsappicon.svg" alt="WhatsApp" />
        <span>WhatsApp</span>
      </button>

      <Link to="/contact" className="sticky-btn sticky-book" aria-label="Book service">
        <span>Book</span>
      </Link>
    </div>
  );
};

export default StickyBar;
