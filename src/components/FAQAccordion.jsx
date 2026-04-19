import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={faq.id} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-toggle">
              {openIndex === index ? (
                <Minus size={18} className="faq-toggle-icon open" />
              ) : (
                <Plus size={18} className="faq-toggle-icon" />
              )}
            </span>
          </button>

          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`} aria-hidden={openIndex !== index}>
            {faq.answer.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
