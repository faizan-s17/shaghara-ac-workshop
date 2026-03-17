import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import CTAButtons from '../components/CTAButtons';
import { faqs } from '../data/faqs';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Banner Section */}
      <section className="faq-banner">
        <div className="faq-banner-container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services</p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-accordion-section">
        <div className="faq-accordion-container">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="faq-help-section alt-bg">
        <div className="faq-help-container">
          <h2>Still Have Questions?</h2>
          <p>
            If you couldn't find the answer to your question, feel free to reach 
            out to us. We're here to help and provide you with the information you need.
          </p>
          
          <div className="help-cta">
            <a 
              href="https://wa.me/971507971172?text=Hi,%20I%20have%20a%20question." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-help"
            >
              Ask on WhatsApp
            </a>
            <a href="tel:+971507971172" className="btn-call-help">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
