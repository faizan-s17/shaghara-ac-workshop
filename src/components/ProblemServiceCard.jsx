import { BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import { ChevronRight } from 'lucide-react';
import './ProblemServiceCard.css';

const ProblemServiceCard = ({ title, problems, ctaText, whatsappMessage }) => {
  const handleCTA = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, whatsappMessage);
  };

  return (
    <div className="problem-service-card card-hover-lift">
      <h3 className="problem-card-title">{title}</h3>
      
      <div className="problem-list">
        {problems.map((problem, index) => (
          <div key={index} className="problem-item">
            <span className="problem-bullet">✓</span>
            <span className="problem-text">{problem}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={handleCTA}
        className="btn-problem-cta btn-hover-lift btn-press"
        aria-label={ctaText}
      >
        {ctaText}
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default ProblemServiceCard;
