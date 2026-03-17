import { Link } from 'react-router-dom';
import { MapPin, CheckCircle } from 'lucide-react';
import { serviceAreas, nearbyAreas } from '../data/areas';
import CTAButtons from '../components/CTAButtons';
import './ServiceAreas.css';

const ServiceAreas = () => {
  return (
    <div className="service-areas-page">
      {/* Banner Section */}
      <section className="areas-banner">
        <div className="areas-banner-container">
          <h1>Areas We Serve</h1>
          <p>Door-to-door AC and home appliance repair service across Sharjah and Ajman</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="areas-intro-section">
        <div className="areas-intro-container">
          <p>
            Shaghara AC Workshop provides door-to-door AC and home appliance repair
            services across all areas of Sharjah and Ajman. Our experienced
            technicians serve residential, commercial, and industrial locations
            with quick response times and reliable workmanship.
          </p>
        </div>
      </section>

      {/* Main Service Areas */}
      <section className="main-areas-section">
        <div className="main-areas-container">
          <h2>Our Primary Service Areas</h2>
          
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-card-icon">
                  <MapPin size={32} />
                </div>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="nearby-areas-section alt-bg">
        <div className="nearby-areas-container">
          <h2>Nearby Areas We Cover</h2>
          
          <div className="nearby-areas-list">
            {nearbyAreas.map((area, index) => (
              <div key={index} className="nearby-area-item">
                <CheckCircle size={20} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="coverage-info-section">
        <div className="coverage-info-container">
          <h2>Not Sure If We Cover Your Area?</h2>
          <p>
            We service all areas across Sharjah and Ajman. If you're unsure whether
            we cover your specific location, contact us on WhatsApp or call to
            confirm availability.
          </p>
          
          <div className="coverage-cta">
            <a 
              href="https://wa.me/971507971172?text=Hi,%20I%20want%20to%20check%20if%20you%20provide%20service%20in%20my%20area." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-check-availability"
            >
              Check Availability on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="areas-final-cta">
        <div className="areas-final-cta-container">
          <h2>Need Appliance Repair Service?</h2>
          <p>Contact us today for reliable doorstep service in your area.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
