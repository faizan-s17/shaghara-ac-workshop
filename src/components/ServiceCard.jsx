import { Wrench } from 'lucide-react';
import * as CustomIcons from './icons';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, image, onBookNow }) => {
  const IconComponent = (icon && (CustomIcons[icon])) || Wrench;

  return (
    <div className="service-card card-hover-lift">
      <div className="service-card-icon icon-hover-scale">
        {icon && (CustomIcons[icon] || Icons[icon]) ? (
          <IconComponent size={40} />
        ) : image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <IconComponent size={40} />
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-card-actions">
        {onBookNow ? (
          <button onClick={onBookNow} className="btn-book-now btn-hover-lift btn-press">
            Book Now
          </button>
        ) : (
          <Link to="/contact" className="btn-learn-more btn-hover-lift btn-press">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
