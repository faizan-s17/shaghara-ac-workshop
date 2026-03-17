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
          <p>Your trusted AC and home appliance repair experts in Sharjah</p>
        </div>
      </section>

      {/* About Shaghara AC Workshop */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <h2>About Shaghara AC Workshop</h2>
          <p>
            Shaghara AC Workshop is a trusted local AC and home appliance repair business 
            based in Abu Shagara, Sharjah, UAE. We have been serving customers for more 
            than 25 years with reliable repair, servicing, and maintenance solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <div className="content-block">
            <h2>Who We Are</h2>
            <p>
              Shaghara AC Workshop is a trusted local AC and home appliance repair business 
              based in Abu Shagara, Sharjah, UAE. We have been serving customers for more 
              than 25 years with reliable repair, servicing, and maintenance solutions.
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
              With over 25 years of hands-on experience, we have built a strong reputation 
              for dependable service, technical expertise, and customer satisfaction. Our 
              journey began with a simple mission: to provide honest and reliable appliance 
              repair services to the community of Sharjah.
            </p>
            <p>
              Over the decades, we have grown into a trusted name in home appliance repair, 
              known for our professionalism, quick response times, and quality workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Main Expertise */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Our Main Expertise</h2>
          <p>
            Our primary specialty is split AC and window AC repair and servicing. We also 
            provide repair services for washing machines, refrigerators, and water dispensers.
          </p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>AC Repair & Service</h3>
              <p>Split AC and Window AC specialists with complete diagnostic and repair capabilities</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Washing Machines</h3>
              <p>Expert repair for both top load and front load washing machines</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Refrigerators</h3>
              <p>Complete refrigerator repair services for all types and brands</p>
            </div>
            <div className="expertise-card">
              <CheckCircle size={40} />
              <h3>Water Dispensers</h3>
              <p>Fast and reliable water dispenser repair and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="trust-reasons-section">
        <div className="trust-reasons-container">
          <h2>Why Customers Trust Us</h2>
          <p>
            Customers trust Shaghara AC Workshop for our experience, practical solutions, 
            doorstep service, and commitment to honest work. We believe in building 
            long-term relationships with our customers through transparency, quality 
            service, and fair pricing.
          </p>
          
          <div className="trust-points">
            <div className="trust-point">
              <Users size={32} />
              <h3>Experienced Technicians</h3>
              <p>Skilled professionals with proven expertise</p>
            </div>
            <div className="trust-point">
              <CheckCircle size={32} />
              <h3>Doorstep Service</h3>
              <p>Convenient home service at your preferred time</p>
            </div>
            <div className="trust-point">
              <Shield size={32} />
              <h3>Honest Work</h3>
              <p>Transparent pricing and genuine advice</p>
            </div>
            <div className="trust-point">
              <Award size={32} />
              <h3>Quality Assurance</h3>
              <p>Reliable repairs that last</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas (merged from ServiceAreas page) */}
      <section className="about-service-areas">
        <div className="about-service-areas-container">
          <h2>Areas We Serve</h2>
          <p>We provide doorstep repair service across all areas of Sharjah and Ajman.</p>

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
          <p>Contact us today for reliable AC and appliance repair in Sharjah.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default About;
