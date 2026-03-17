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
  const trustHighlights = [
    { icon: Award, title: '25+ Years Experience', description: 'Decades of expertise in appliance repair' },
    { icon: MapPin, title: 'Door-to-Door Service', description: 'Convenient doorstep repair service' },
    { icon: Users, title: 'AC Repair Specialists', description: 'Expert technicians for AC solutions' },
    { icon: Zap, title: 'Fast Response', description: 'Quick and reliable service' },
    { icon: MapPin, title: 'Trusted Local Service', description: 'Trusted local business in Abu Shagara' }
  ];

  return (
    <div className="home">
      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="hero" />
          
          <div className="hero-content">
            <h1 className="animate-hero-reveal">Professional AC & Home Appliance Repair</h1>
            <p className="hero-subtitle animate-fadeInUp delay-200">
              Trusted door-to-door service in Abu Shagara, Sharjah, UAE with 25+ years of experience.
            </p>
            
            <ul className="hero-services-list animate-stagger-fast">
              <li><CheckCircle size={20} /> Split AC Repair</li>
              <li><CheckCircle size={20} /> Window AC Repair</li>
              <li><CheckCircle size={20} /> Washing Machine Repair</li>
              <li><CheckCircle size={20} /> Refrigerator Repair</li>
              <li><CheckCircle size={20} /> Water Dispenser Repair</li>
            </ul>

            <div className="hero-cta animate-fadeInUp delay-300">
              <Link to="/contact" className="btn-hero-primary btn-hover-lift btn-press">Book Service</Link>
              <a 
                href="https://wa.me/971507971172?text=Hello,%20I%20have%20an%20inquiry." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero-secondary btn-hover-lift btn-press"
              >
                WhatsApp Now
              </a>
              <a href="tel:+971507971172" className="btn-hero-tertiary btn-hover-lift btn-press">Call Now</a>
            </div>
          </div>

          <div className="hero-image animate-scaleIn delay-200">
            <div className="hero-image-card parallax-subtle">
              <img src="/landingpage.png" alt="Professional HVAC & Appliance Repair Service" className="hero-landing-image" loading="lazy" />
              <div className="hero-image-overlay" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Highlights */}
      <section className="trust-section">
        <div className="trust-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="minimal" />
          
          <div className="trust-grid animate-stagger-fast">
            {trustHighlights.map((item, index) => (
              <div key={index} className="trust-card card-hover-lift animate-item-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="trust-icon icon-hover-scale">
                  <item.icon size={40} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About Preview */}
      <section className="about-preview-section">
        <div className="about-preview-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="section" />
          
          <div className="about-preview-content animate-fadeInUp">
            <h2>Welcome to Shaghara AC Workshop</h2>
            <p className="delay-100">
              Shaghara AC Workshop is a trusted home appliance repair and AC service business 
              located in Abu Shagara, Sharjah, UAE. With over 25 years of experience, we provide 
              reliable door-to-door repair services for AC units, washing machines, refrigerators, 
              and water dispensers.
            </p>
            <Link to="/about" className="btn-read-more btn-hover-lift btn-press delay-200">Read More</Link>
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
            <p>Professional repair services for all major home appliances</p>
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
              <Award size={32} className="icon-hover-scale" />
              <h3>More than 25 years of experience</h3>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.2s' }}>
              <MapPin size={32} className="icon-hover-scale" />
              <h3>Door-to-door home service</h3>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.3s' }}>
              <CheckCircle size={32} className="icon-hover-scale" />
              <h3>Main focus on AC repair and servicing</h3>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.4s' }}>
              <Users size={32} className="icon-hover-scale" />
              <h3>Reliable and honest work</h3>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.5s' }}>
              <MapPin size={32} className="icon-hover-scale" />
              <h3>Local business in Abu Shagara, Sharjah</h3>
            </div>
            <div className="choose-item card-hover-lift animate-item-reveal" style={{ animationDelay: '0.6s' }}>
              <Zap size={32} className="icon-hover-scale" />
              <h3>Support for multiple appliances</h3>
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
          <p className="animate-fadeInUp delay-100">We provide doorstep repair service across all areas of Sharjah and Ajman.</p>
          
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
          
          <h2>Need AC or Appliance Repair at Home?</h2>
          <p>Contact Shaghara AC Workshop today for reliable doorstep service in Sharjah.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default Home;
