import React from 'react';
import './TreatmentCard.css'; // Assuming you'll create a CSS file for styling

function TreatmentCard({ imageSrc, title, priceRange, description, onBookNow, onMoreInfo }) {
  return (
    <div className="treatment-card">
      <img src={imageSrc} alt={title} className="treatment-image" />
      <h3 className="treatment-title">{title}</h3>
      <p className="treatment-price">{priceRange}</p>
      <p className="treatment-description">{description}</p>
      <div className="treatment-buttons">
        <button className="treatment-button" onClick={onBookNow}>book now</button>
        <button className="treatment-button" onClick={onMoreInfo}>more info</button>
      </div>
    </div>
  );
}

export default TreatmentCard;
