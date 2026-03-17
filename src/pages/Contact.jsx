import { useState } from 'react';
import { Phone, Clock } from 'lucide-react';
import CTAButtons from '../components/CTAButtons';
import FloatingElements from '../components/FloatingElements';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, formatContactMessage, sendToWhatsApp } from '../utils/whatsapp';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    appliance: '',
    problem: '',
    preferredTime: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.appliance.trim()) {
      newErrors.appliance = 'Appliance type is required';
    }

    if (!formData.problem.trim()) {
      newErrors.problem = 'Problem description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const message = formatContactMessage(formData);
      sendToWhatsApp(BUSINESS_WHATSAPP, message);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="contact-banner-container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for reliable appliance repair service</p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        <div className="contact-details-container">
          {/* Floating Decorative Elements */}
          <FloatingElements variant="minimal" />
          
          <div className="contact-split-layout">
            {/* Left Side - Contact Info & Map */}
            <div className="contact-info-side">
              <h2>Get in Touch</h2>
              <p className="contact-intro-text">We're here to help! Reach out to us for reliable AC and home appliance repair services.</p>
              
              <div className="contact-cards-grid">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="contact-whatsapp-icon" />
                  </div>
                  <h3>WhatsApp</h3>
                  <a
                    href={`https://wa.me/${BUSINESS_WHATSAPP.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: {BUSINESS_WHATSAPP}
                  </a>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <img src="/assets/googlemapsicon.svg" alt="Map" className="contact-map-icon" />
                  </div>
                  <h3>Our Location</h3>
                  <p>
                    <a href="https://www.google.com/maps/search/Abu+Shagara,+Sharjah,+UAE" target="_blank" rel="noopener noreferrer">
                      Abu Shagara, Sharjah, UAE
                    </a>
                  </p>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Clock size={32} />
                  </div>
                  <h3>Working Hours</h3>
                  <p>9:00 AM to 10:00 PM<br/>All Days</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-side">
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you on WhatsApp.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Area / Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Abu Shagara, Al Majaz, etc."
                      className={errors.location ? 'error' : ''}
                    />
                    {errors.location && <span className="error-message">{errors.location}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="appliance">Appliance Type *</label>
                    <select
                      id="appliance"
                      name="appliance"
                      value={formData.appliance}
                      onChange={handleChange}
                      className={errors.appliance ? 'error' : ''}
                    >
                      <option value="">Select Appliance</option>
                      <option value="Split AC">Split AC</option>
                      <option value="Window AC">Window AC</option>
                      <option value="Top Load Washing Machine">Top Load Washing Machine</option>
                      <option value="Front Load Washing Machine">Front Load Washing Machine</option>
                      <option value="Refrigerator">Refrigerator</option>
                      <option value="Water Dispenser">Water Dispenser</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.appliance && <span className="error-message">{errors.appliance}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="Morning or Evening"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="serviceType">Service Type</label>
                      <select id="serviceType" name="serviceType">
                        <option value="">Select Service</option>
                        <option value="Repair">Repair</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Installation">Installation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="problem">Problem Description *</label>
                    <textarea
                      id="problem"
                      name="problem"
                      rows="4"
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Please describe the issue you're facing..."
                      className={errors.problem ? 'error' : ''}
                    ></textarea>
                    {errors.problem && <span className="error-message">{errors.problem}</span>}
                  </div>

                  <button type="submit" className="btn-submit-whatsapp">
                    <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="btn-icon-whatsapp" />
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
