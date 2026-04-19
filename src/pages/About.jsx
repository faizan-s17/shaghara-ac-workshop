import { Link } from 'react-router-dom';
import { Award, CheckCircle, Users, Shield } from 'lucide-react';
import CTAButtons from '../components/CTAButtons';
import { serviceAreas, nearbyAreas } from '../data/areas';
import './About.css';

const About = () => {

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-banner-container">
          <h1>About Us</h1>
          <p>Premium AC and appliance repair specialists serving Sharjah</p>
        </div>
      </section>

      {/* About Shaghara AC Workshop */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <h2>About Shaghara AC Workshop</h2>
          <p>
            Shaghara AC Workshop delivers professional on‑site appliance and AC repair
            services in Sharjah. With over 25 years of experience, we deliver reliable
            technical solutions with a focus on quality and customer care.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <div className="content-block">
            <h2>Who We Are</h2>
            <p>
              A skilled team of technicians delivering dependable repairs, clear
              guidance, and timely service. We prioritise lasting results and a
              straightforward customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="experience-section">
        <div className="experience-container">
          <div className="experience-content">
            <Award size={64} />
            <h2>Our Experience</h2>
            <p>
              With over 25 years of service, we are recognised for dependable workmanship,
              technical accuracy, and consistent customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Main Expertise */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Our Main Expertise</h2>
          <p>
            Specialised AC repair and comprehensive appliance servicing for homes and
            businesses. We support washing machines, refrigerators, and water dispensers.
          </p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>AC Repair & Service</h3>
              <p>Complete diagnostics and repair for split and window AC systems</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Washing Machines</h3>
              <p>Efficient repairs for top and front load machines</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Refrigerators</h3>
              <p>Comprehensive refrigerator repair and maintenance</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Water Dispensers</h3>
              <p>Reliable servicing and repairs for water dispensers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="trust-reasons-section">
        <div className="trust-reasons-container">
          <h2>Why Customers Trust Us</h2>
          <p>
            Our reputation is built on expert workmanship, clear communication, and
            reliable outcomes. We aim for long‑term value and transparent pricing.
          </p>
          
          <div className="trust-points">
            <div className="trust-point">
              <Users size={32} />
              <h3>Experienced Technicians</h3>
              <p>Highly trained technicians with proven skills</p>
            </div>
            <div className="trust-point">
              <CheckCircle size={32} />
              <h3>On‑Site Service</h3>
              <p>Convenient, scheduled service at your location</p>
            </div>
            <div className="trust-point">
              <Shield size={32} />
              <h3>Honest Work</h3>
              <p>Clear estimates and practical recommendations</p>
            </div>
            <div className="trust-point">
              <Award size={32} />
              <h3>Quality Assurance</h3>
              <p>Durable repairs backed by professional standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas (merged from ServiceAreas page) */}
      <section className="about-service-areas">
        <div className="about-service-areas-container">
          <h2>Areas We Serve</h2>
          <p>On‑site appliance and AC repair services across Sharjah and Ajman.</p>

          <div className="areas-grid-compact">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="area-item-compact">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>

          <h3 className="nearby-heading">Nearby Areas</h3>
          <div className="nearby-list-compact">
            {nearbyAreas.map((a, i) => (
              <span key={i} className="nearby-tag">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2>Ready to Experience Our Service?</h2>
          <p>Contact us to arrange professional on‑site appliance repair in Sharjah.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default About;
