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
          <p>On‑site AC and appliance repair across Sharjah and Ajman</p>
          <div className="location-chips" aria-hidden>
            <button className="location-chip"><MapPin size={16} />Sharjah</button>
            <button className="location-chip"><MapPin size={16} />Ajman</button>
            <button className="location-chip"><MapPin size={16} />Dubai</button>
          </div>

          <Link to="#main-areas" className="btn-view-areas">View Service Areas</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="areas-intro-section">
        <div className="areas-intro-container">
          <p>
            Shaghara AC Workshop delivers on‑site AC and appliance repair across
            Sharjah and Ajman. Our technicians serve homes and businesses with
            prompt response and professional workmanship.
          </p>
        </div>
      </section>

      {/* Main Service Areas */}
      <section id="main-areas" className="main-areas-section">
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
            We cover Sharjah and Ajman. If you are unsure about your location,
            contact us via WhatsApp or call and we will confirm availability.
          </p>
          
          <div className="coverage-cta">
            <a 
              href="https://wa.me/971507971172?text=Hi,%20I%20want%20to%20check%20if%20you%20provide%20service%20in%20my%20area." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-check-availability"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="areas-final-cta">
        <div className="areas-final-cta-container">
          <h2>Need Appliance Repair Service?</h2>
          <p className="areas-final-subtext">Typical response within minutes</p>
          <div className="areas-final-cta-buttons">
            <CTAButtons variant="callwhatsapp" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
