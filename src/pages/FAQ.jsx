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
          <p>Answers to common questions about our services and process</p>
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
          <h2>Need more help?</h2>
          <p>
            If you need further assistance, contact us directly. We are ready to help.
          </p>
          
          <div className="help-cta">
            <a 
              href="https://wa.me/971507971172?text=Hi,%20I%20have%20a%20question." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-help"
            >
              Message on WhatsApp
            </a>
            <a href="tel:+971507971172" className="btn-call-help">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
