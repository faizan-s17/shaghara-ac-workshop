import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './StickyBar.css';

// Business location - Update with actual Google Maps link if available
const GOOGLE_MAPS_URL = 'https://maps.google.com/maps?q=Abu+Shagara,+Sharjah';

const StickyBar = () => {
  const callNow = () => {
    window.location.href = `tel:${BUSINESS_PHONE.replace('+', '')}`;
  };

  const openWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hi, my AC is not cooling. I am in Sharjah. Can you send a technician?');
  };

  const openDirections = () => {
    window.open(GOOGLE_MAPS_URL, '_blank');
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

      <button className="sticky-btn sticky-directions" onClick={openDirections} aria-label="View location">
        <MapPin size={18} />
        <span>Directions</span>
      </button>
    </div>
  );
};

export default StickyBar;
