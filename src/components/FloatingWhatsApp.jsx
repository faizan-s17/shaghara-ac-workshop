import { BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hello, I have an inquiry.');
  };

  return (
    <button 
      className="floating-whatsapp"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="floating-whatsapp-icon" />
    </button>
  );
};

export default FloatingWhatsApp;
