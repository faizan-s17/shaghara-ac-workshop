import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, MapPin, Clock, Award, Users, Zap, AlertCircle } from 'lucide-react';
import ProblemServiceCard from '../components/ProblemServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import CTAButtons from '../components/CTAButtons';
import FloatingElements from '../components/FloatingElements';
import { problemBasedServices } from '../data/services';
import { faqs } from '../data/faqs';
import { serviceAreaChips, serviceAreasDescription } from '../data/areas';
import { BUSINESS_WHATSAPP, sendToWhatsApp } from '../utils/whatsapp';
import './Home.css';

const Home = () => {
  const handleAvailabilityWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hi, I need appliance repair in Sharjah. Can you help today?');
  };

  const handleAreaCheckWhatsApp = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, serviceAreasDescription.ctaMessage);
  };

  const handleFinalCTA = () => {
    sendToWhatsApp(BUSINESS_WHATSAPP, 'Hi, I need AC, fridge or washing machine repair in Sharjah. Are you available?');
  };

  return (
    <div className="home">
      <Helmet>
        <title>AC Repair in Abu Shagara Sharjah | Shaghara AC Workshop</title>
        <meta name="description" content="Fast AC, fridge, washing machine and home appliance repair service in Abu Shagara, Sharjah. Call or WhatsApp Shaghara AC Workshop for quick repair support." />
        <meta name="keywords" content="AC repair Abu Shagara, AC repair Sharjah, fridge repair Sharjah, washing machine repair Sharjah, home appliance repair Sharjah, AC not cooling Sharjah" />
        <meta property="og:title" content="AC Repair in Abu Shagara Sharjah | Shaghara AC Workshop" />
        <meta property="og:description" content="Fast AC, fridge, washing machine and home appliance repair service in Abu Shagara, Sharjah. Get same-day service." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://shaghara-ac-workshop.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>
      
      {/* Section 1: Hero Section - Emergency Focused */}
      <section className="hero-section hero-section-cro">
        <div className="hero-radial-overlay" aria-hidden="true"></div>
        
        <div className="hero-container hero-container-cro">
          <FloatingElements variant="hero" />
          
          <div className="hero-content hero-content-cro">
            {/* Emergency Label */}
            <div className="hero-label hero-label-urgent animate-fadeInDown">
              <span>⚡</span>
              <span>Fast Emergency Repair Service</span>
            </div>

            {/* Main Heading - Problem-Focused */}
            <h1 className="hero-title hero-title-cro animate-hero-reveal">
              AC Not Cooling in Abu Shagara? Get Same-Day Repair in Sharjah
            </h1>

            {/* Supporting Text - Local and Conversion Focused */}
            <p className="hero-subtitle hero-subtitle-cro animate-fadeInUp delay-200">
              Local AC, fridge, washing machine and home appliance repair service in Abu Shagara, Sharjah. Call or WhatsApp now and get quick help from a technician.
            </p>

            {/* Primary CTAs - WhatsApp First */}
            <div className="hero-cta-section hero-cta-section-cro animate-fadeInUp delay-300">
              <div className="hero-cta-buttons hero-cta-buttons-cro">
                <button
                  onClick={() => sendToWhatsApp(BUSINESS_WHATSAPP, 'Hi, my AC is not cooling. I am in Sharjah. Can you send a technician?')}
                  className="btn-hero-primary btn-hover-lift btn-press btn-whatsapp-large"
                >
                  💬 WhatsApp Technician Now
                </button>
                <a 
                  href="tel:+971507971172" 
                  className="btn-hero-secondary btn-hover-lift btn-press btn-call-large"
                >
                  📱 Call Now
                </a>
              </div>
            </div>

            {/* Trust Badges - Problem & Solution Focused */}
            <div className="hero-trust-badges hero-trust-badges-cro animate-fadeInUp delay-400">
              <div className="trust-badge trust-badge-cro">
                <span className="badge-icon">📍</span>
                <span>Abu Shagara, Sharjah</span>
              </div>
              <div className="trust-badge trust-badge-cro">
                <span className="badge-icon">⚡</span>
                <span>Same-Day Visit Available</span>
              </div>
              <div className="trust-badge trust-badge-cro">
                <span className="badge-icon">💬</span>
                <span>WhatsApp Support</span>
              </div>
              <div className="trust-badge trust-badge-cro">
                <span className="badge-icon">🛠</span>
                <span>AC, Fridge & Washer Repair</span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="hero-image animate-scaleIn delay-200">
            <div className="hero-image-card parallax-subtle">
              <img src="/landingpage.webp" alt="Professional AC repair technician in Abu Shagara, Sharjah" className="hero-landing-image" loading="lazy" />
              <div className="hero-image-overlay" aria-hidden="true"></div>
              
              <div className="hero-floating-badge">
                <div className="badge-content">
                  <div className="badge-dot"></div>
                  <span>Same-Day<br/>Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Today's Availability - Urgency Box */}
      <section className="availability-section availability-urgency">
        <div className="availability-container">
          <FloatingElements variant="section" />
          
          <div className="availability-card availability-card-urgent">
            <div className="availability-header">
              <AlertCircle size={32} className="availability-icon" />
              <h2>Technicians Available Today</h2>
            </div>

            <div className="availability-list">
              <div className="availability-item">
                <span className="availability-check">✓</span>
                <span>AC not cooling, gas refill, water leakage and noise issues</span>
              </div>
              <div className="availability-item">
                <span className="availability-check">✓</span>
                <span>Fridge and freezer cooling problems</span>
              </div>
              <div className="availability-item">
                <span className="availability-check">✓</span>
                <span>Washing machine drainage, spinning and leakage problems</span>
              </div>
              <div className="availability-item">
                <span className="availability-check">✓</span>
                <span>Quick service in Abu Shagara and nearby Sharjah areas</span>
              </div>
            </div>

            <button 
              onClick={handleAvailabilityWhatsApp}
              className="btn-availability-cta btn-hover-lift btn-press"
            >
              Send Your Problem on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Problem-Based Services */}
      <section className="problem-services-section">
        <div className="problem-services-container">
          <FloatingElements variant="section" />
          
          <div className="section-header section-header-cro animate-fadeInUp">
            <h2>What Problems Do We Solve?</h2>
            <p>Select your appliance issue and we'll send a technician to fix it</p>
          </div>
          
          <div className="problem-services-grid animate-stagger">
            {problemBasedServices.map((service, index) => (
              <ProblemServiceCard 
                key={service.id}
                title={service.title}
                problems={service.problems}
                ctaText={service.ctaText}
                whatsappMessage={service.whatsappMessage}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Shaghara - Local Trust Focused */}
      <section className="why-choose-section why-choose-local">
        <div className="why-choose-container">
          <h2 className="animate-fadeInUp">Why Customers in Sharjah Call Shaghara AC Workshop</h2>
          
          <div className="why-choose-grid why-choose-grid-large animate-stagger-fast">
            <div className="choose-item choose-item-trust card-hover-lift animate-item-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="choose-icon choose-icon-large">
                <MapPin size={40} />
              </div>
              <h3>Local Abu Shagara Workshop</h3>
              <p>We are based in Abu Shagara, Sharjah, so customers nearby can reach us quickly.</p>
            </div>
            <div className="choose-item choose-item-trust card-hover-lift animate-item-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="choose-icon choose-icon-large">
                <Zap size={40} />
              </div>
              <h3>Fast Help for Urgent Repairs</h3>
              <p>AC not cooling, fridge stopped working, or washer leaking? Message us and explain the issue.</p>
            </div>
            <div className="choose-item choose-item-trust card-hover-lift animate-item-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="choose-icon choose-icon-large">
                <CheckCircle size={40} />
              </div>
              <h3>Clear Repair Advice</h3>
              <p>We check the problem properly and explain what needs fixing before repair.</p>
            </div>
            <div className="choose-item choose-item-trust card-hover-lift animate-item-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="choose-icon choose-icon-large">
                <Users size={40} />
              </div>
              <h3>Multiple Appliance Services</h3>
              <p>AC, fridge, washing machine, dishwasher and other home appliance repair support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Don't Call Us If - Trust Building */}
      <section className="trust-section trust-section-bold">
        <div className="trust-container trust-container-bold">
          <div className="trust-card trust-card-bold">
            <h2 className="trust-heading">Don't Call Us If You Want Guesswork</h2>
            
            <p className="trust-description">
              We do not believe in random part changing or confusing repair talk. We check the appliance properly, explain the issue clearly, and repair only what needs fixing.
            </p>

            <div className="trust-divider"></div>

            <p className="trust-callout">
              <strong>Call us if you want straight repair advice and quick help in Sharjah.</strong>
            </p>

            <button 
              onClick={() => sendToWhatsApp(BUSINESS_WHATSAPP, 'Hi, I need honest repair advice for my appliance. Can we talk?')}
              className="btn-trust-cta btn-hover-lift btn-press"
            >
              Talk to a Technician
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Service Areas */}
      <section className="service-areas-section service-areas-cro">
        <div className="service-areas-container">
          <FloatingElements variant="section" />
          
          <h2 className="animate-fadeInUp">Areas We Serve in Sharjah</h2>
          <p className="animate-fadeInUp delay-100">{serviceAreasDescription.text}</p>
          
          <div className="areas-chips animate-stagger-fast">
            {serviceAreaChips.map((area, index) => (
              <span 
                key={index} 
                className="area-chip animate-item-reveal" 
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {area}
              </span>
            ))}
          </div>
          
          <button 
            onClick={handleAreaCheckWhatsApp}
            className="btn-area-check btn-hover-lift btn-press animate-fadeInUp delay-300"
          >
            Check Availability in Your Area
          </button>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="faq-section faq-section-cro">
        <div className="faq-container">
          <h2 className="animate-fadeInUp">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs.slice(0, 5)} />
        </div>
      </section>

      {/* Section 8: Final Strong CTA */}
      <section className="final-cta-section final-cta-section-bold animate-fadeInUp">
        <div className="final-cta-container final-cta-bold">
          <FloatingElements variant="minimal" />
          
          <h2>Need Appliance Repair in Sharjah Today?</h2>
          <p>Send your AC, fridge or washing machine problem on WhatsApp and get quick repair guidance from Shaghara AC Workshop.</p>
          
          <div className="final-cta-buttons">
            <button 
              onClick={handleFinalCTA}
              className="btn-final-primary btn-hover-lift btn-press"
            >
              💬 WhatsApp Now
            </button>
            <a 
              href="tel:+971507971172"
              className="btn-final-secondary btn-hover-lift btn-press"
            >
              📱 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
