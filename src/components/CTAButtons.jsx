import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './CTAButtons.css';

const CTAButtons = ({ variant = 'default', size = 'medium', onBookService }) => {
  const handleCallNow = () => {
    window.location.href = `tel:${BUSINESS_PHONE.replace('+', '')}`;
  };

  const handleWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hello, I have an inquiry.');
  };

  const buttonClass = `btn-cta btn-${size}`;

  if (variant === 'callwhatsapp') {
    return (
      <div className="cta-buttons-group">
        <button onClick={handleCallNow} className={`${buttonClass} btn-call btn-hover-lift btn-press`}>
          <Phone size={size === 'large' ? 20 : 18} />
          <span>Call Now</span>
        </button>
        <button onClick={handleWhatsApp} className={`${buttonClass} btn-whatsapp btn-hover-lift btn-press`}>
          <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="icon-whatsapp" />
          <span>WhatsApp Us</span>
        </button>
      </div>
    );
  }

  // Default variant - Call and WhatsApp buttons only
  return (
    <div className="cta-buttons-group">
      <button onClick={handleCallNow} className={`${buttonClass} btn-call btn-hover-lift btn-press`}>
        <Phone size={size === 'large' ? 20 : 18} />
        <span>Call Now</span>
      </button>
      <button onClick={handleWhatsApp} className={`${buttonClass} btn-whatsapp btn-hover-lift btn-press`}>
        <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="icon-whatsapp" />
        <span>WhatsApp Now</span>
      </button>
    </div>
  );
};

export default CTAButtons;
