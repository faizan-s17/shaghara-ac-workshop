import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Clock, Award, Users, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import CTAButtons from '../components/CTAButtons';
import FloatingElements from '../components/FloatingElements';
import { services } from '../data/services';
import { faqs } from '../data/faqs';
import { serviceAreas } from '../data/areas';
import './Home.css';

const Home = () => {
  

  return (
    <div className="home">
      {/* Section 1: Hero Section */}
      <section className="hero-section">
        {/* Radial Light Overlay */}
        <div className="hero-radial-overlay" aria-hidden="true"></div>
        
        <div className="hero-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="hero" />
          
          <div className="hero-content">
            {/* Premium Label */}
            <div className="hero-label animate-fadeInDown">
              <span>✓</span>
              <span>Premier AC & Appliance Care — Sharjah</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title animate-hero-reveal">
              Expert AC & Home Appliance Repair
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle animate-fadeInUp delay-200">
              On‑site service in Abu Shagara. 25+ years of proven expertise.
              Fast repairs for major appliances and AC systems.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-section animate-fadeInUp delay-300">
              <div className="hero-cta-buttons">
                <Link to="/contact" className="btn-hero-primary btn-hover-lift btn-press">
                  Schedule Service
                </Link>
                <a 
                  href="https://wa.me/971507971172?text=Hello,%20I%20have%20an%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero-secondary btn-hover-lift btn-press"
                >
                  Message on WhatsApp
                </a>
                <a href="tel:+971507971172" className="btn-hero-tertiary btn-hover-lift btn-press">
                  Call Us
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges animate-fadeInUp delay-400">
              <div className="trust-badge">
                <span className="badge-icon">⭐</span>
                <span>25+ Years Experience</span>
              </div>
              <div className="trust-badge">
                <span className="badge-icon">⚡</span>
                <span>Rapid Response</span>
              </div>
              <div className="trust-badge">
                <span className="badge-icon">✓</span>
                <span>Certified Technicians</span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="hero-image animate-scaleIn delay-200">
            <div className="hero-image-card parallax-subtle">
              <img src="/landingpage.webp" alt="Professional HVAC & Appliance Repair Service" className="hero-landing-image" loading="lazy" />
              <div className="hero-image-overlay" aria-hidden="true"></div>
              
              {/* Floating Emergency Badge */}
              <div className="hero-floating-badge">
                <div className="badge-content">
                  <div className="badge-dot"></div>
                  <span>24/7 Emergency<br/>Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Section 3: About Preview */}
      <section className="about-preview-section">
        <div className="about-preview-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="section" />
          
          <div className="about-preview-content">
            {/* Left Column - Text */}
            <div className="about-text-column animate-fadeInLeft">
              <h2>Welcome to Shaghara AC Workshop</h2>
              <div className="about-divider"></div>
              <p>
                Shaghara AC Workshop delivers professional on‑site repair and maintenance for
                household appliances. Based in Abu Shagara, we combine technical skill with
                dependable service backed by over 25 years' experience.
              </p>
              <Link to="/about" className="btn-read-more-text btn-hover-lift btn-press">
                Read More <span className="arrow">→</span>
              </Link>
            </div>

            {/* Right Column - Real Image */}
            <div className="about-image-column animate-scaleIn delay-200">
              <div className="about-image-wrapper">
                <img src="/landingpage.webp" alt="Professional AC repair technician at work" className="about-real-image" loading="lazy" />
                <div className="about-image-badge">
                  <span className="badge-number">25+</span>
                  <span className="badge-text">Years of<br/>Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section className="services-section">
        <div className="services-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="section" />
          
            <div className="section-header animate-fadeInUp">
            <h2>Our Services</h2>
            <p>Comprehensive repair and maintenance for all major home appliances</p>
          </div>
          
          <div className="services-grid animate-stagger">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                className={`animate-card-entrance`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="animate-fadeInUp">Why Customers Choose Us</h2>
          
          <div className="why-choose-grid animate-stagger-fast">
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="choose-icon">
                <Award size={36} />
              </div>
              <h3>25+ Years Experience</h3>
              <p>Decades of hands‑on expertise in AC and appliance repair</p>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="choose-icon">
                <MapPin size={36} />
              </div>
              <h3>On‑Site Service</h3>
              <p>Professional repairs performed at your home, on your schedule</p>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="choose-icon">
                <CheckCircle size={36} />
              </div>
              <h3>AC Specialists</h3>
              <p>Certified technicians focused on precise, lasting repairs</p>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="choose-icon">
                <Users size={36} />
              </div>
              <h3>Reliable & Honest</h3>
              <p>Transparent pricing and service you can trust</p>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="choose-icon">
                <MapPin size={36} />
              </div>
              <h3>Local in Abu Shagara</h3>
              <p>A community-focused workshop serving Sharjah with integrity</p>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.6s' }}>
              <div className="choose-icon">
                <Zap size={36} />
              </div>
              <h3>Multiple Appliances</h3>
              <p>Complete repair support for ACs, washers, fridges, and water dispensers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: AC Specialty Section */}
      {/* AC Specialty section removed to streamline homepage */}

      {/* Section 7: Service Areas Preview */}
      <section className="service-areas-preview-section">
        <div className="service-areas-preview-container">
          <h2 className="animate-fadeInUp">Areas We Serve</h2>
          <p className="animate-fadeInUp delay-100">On‑site appliance and AC repair across Sharjah and Ajman.</p>
          
          <div className="areas-tags animate-stagger-fast">
            {serviceAreas.slice(0, 5).map((area, index) => (
              <span key={index} className="area-tag animate-item-reveal" style={{ animationDelay: `${index * 0.08}s` }}>{area.name}</span>
            ))}
          </div>
          
          <Link to="/about" className="btn-view-areas btn-hover-lift btn-press animate-fadeInUp delay-300">View Service Areas</Link>
        </div>
      </section>

      {/* Section 8: FAQ Preview */}
      <section className="faq-preview-section">
        <div className="faq-preview-container">
          <h2 className="animate-fadeInUp">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs.slice(0, 4)} />
          <Link to="/faq" className="btn-view-faq btn-hover-lift btn-press animate-fadeInUp delay-200">View All FAQs</Link>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="final-cta-section animate-fadeInUp">
        <div className="final-cta-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="minimal" />
          
          <h2>Need On‑site Repair?</h2>
          <p>Contact Shaghara AC Workshop for prompt, professional service across Sharjah.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default Home;
