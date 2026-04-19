import { CheckCircle } from 'lucide-react';
import CTAButtons from '../components/CTAButtons';
import { 
  acServices, 
  washingMachineServices, 
  refrigeratorServices, 
  waterDispenserServices 
} from '../data/services';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="services-banner">
        <div className="services-banner-container">
          <h1>Our Services</h1>
          <p>Professional repair for all major home appliances</p>
        </div>
      </section>

      {/* Service Section 1: AC Repair & Service */}
      <section className="service-detail-section">
        <div className="service-detail-container">
          <div className="service-header">
            <h2>AC Repair & Service</h2>
            <p>Complete air conditioning repair and maintenance solutions</p>
          </div>

          <div className="service-content-grid">
            {acServices.map((service, index) => (
              <div key={index} className="service-info-card">
                <h3>{service.title}</h3>
                <ul className="service-list">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Service Section 2: Washing Machine Repair */}
      <section className="service-detail-section alt-bg">
        <div className="service-detail-container">
          <div className="service-header">
            <h2>Washing Machine Repair</h2>
            <p>Expert repair for all types of washing machines</p>
          </div>

          <div className="service-content-grid">
            <div className="service-info-card">
              <h3>Top Load Washing Machine</h3>
              <ul className="service-list">
                {washingMachineServices.topLoad.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-info-card">
              <h3>Front Load Washing Machine</h3>
              <ul className="service-list">
                {washingMachineServices.frontLoad.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Service Section 3: Refrigerator Repair */}
      <section className="service-detail-section">
        <div className="service-detail-container">
          <div className="service-header">
            <h2>Refrigerator Repair</h2>
            <p>Complete refrigeration repair services for all brands</p>
          </div>

          <div className="service-single-column">
            <div className="service-info-card full-width">
              <ul className="service-list grid-list">
                {refrigeratorServices.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Service Section 4: Water Dispenser Repair */}
      <section className="service-detail-section alt-bg">
        <div className="service-detail-container">
          <div className="service-header">
            <h2>Water Dispenser Repair</h2>
            <p>Fast and reliable water dispenser repair and maintenance</p>
          </div>

          <div className="service-single-column">
            <div className="service-info-card full-width">
              <ul className="service-list grid-list">
                {waterDispenserServices.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="services-final-cta">
        <div className="services-final-cta-container">
          <h2>Need Professional Appliance Repair?</h2>
          <p>Contact Shaghara AC Workshop for reliable on‑site appliance repair across Sharjah.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default Services;
