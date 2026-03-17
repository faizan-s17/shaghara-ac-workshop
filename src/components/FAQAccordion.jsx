import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <ChevronDown 
              size={20} 
              className={`faq-icon ${openIndex === index ? 'open' : ''}`} 
            />
          </button>
          
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
