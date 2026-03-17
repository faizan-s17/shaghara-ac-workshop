import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import CTAButtons from '../components/CTAButtons';
import { BUSINESS_WHATSAPP, formatBookingMessage, sendToWhatsApp } from '../utils/whatsapp';
import './BookService.css';

const BookService = () => {
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
      const message = formatBookingMessage(formData);
      sendToWhatsApp(BUSINESS_WHATSAPP, message);
    }
  };

  return (
    <div className="book-service-page">
      {/* Banner Section */}
      <section className="book-banner">
        <div className="book-banner-container">
          <h1>Book a Service</h1>
          <p>Schedule your appliance repair service at your convenience</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="book-intro-section">
        <div className="book-intro-container">
          <p>
            Fill out the form below and send your service request directly to us on WhatsApp. 
            We'll respond quickly to confirm your appointment and arrange a technician visit 
            at your preferred time.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-form-section alt-bg">
        <div className="booking-form-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
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

            <div className="form-group">
              <label htmlFor="problem">Problem Description *</label>
              <textarea
                id="problem"
                name="problem"
                rows="5"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Please describe the issue you're facing..."
                className={errors.problem ? 'error' : ''}
              ></textarea>
              {errors.problem && <span className="error-message">{errors.problem}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time (Optional)</label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                placeholder="e.g., Morning, Afternoon, Evening, or Specific Date/Time"
              />
            </div>

            <button type="submit" className="btn-submit-whatsapp">
              <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="btn-icon-whatsapp" />
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="quick-action-section">
        <div className="quick-action-container">
          <h2>Prefer to Contact Us Directly?</h2>
          
          <div className="quick-action-buttons">
            <a href="tel:+971507971172" className="btn-call-now">
              <Phone size={20} />
              Call Now
            </a>
            
            <a 
              href={`https://wa.me/${BUSINESS_WHATSAPP.replace('+', '')}?text=Hello,%20I%20want%20to%20book%20a%20service.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-now"
            >
              <img src="/assets/whatsappicon.svg" alt="WhatsApp" className="btn-icon-whatsapp" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="working-hours-section alt-bg">
        <div className="working-hours-container">
          <div className="hours-content">
            <Calendar size={48} />
            <h2>Working Hours</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="days">Working Hours</span>
                <span className="time">9:00 AM to 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="book-final-cta">
        <div className="book-final-cta-container">
          <h2>Need Immediate Assistance?</h2>
          <p>Our team is ready to help you with your appliance repair needs.</p>
          <CTAButtons variant="all" size="large" />
        </div>
      </section>
    </div>
  );
};

export default BookService;
