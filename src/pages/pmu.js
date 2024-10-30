import React, { useState } from 'react';
import './gridtreatment.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


function Treatments() {
  // const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // const toggleReadMore = () => {
  //   setShowMore(!showMore);
  // };

  const handleBookNow = () => {
    navigate('/booknow'); // Navigate to the BookNow page
  };

  const handleMoreInfo = () => {
    // Add your more info logic here
    console.log("More Info clicked");
  };

  return (
    
    <main2 className="grid-item main2">
      <img className="grid-item slider" src="images/zink-slider-1.jpg" alt="Me" />
      <div className="grid-item title">
      <h1>PMU</h1>
      <p>This is the PMU page.</p>
      </div>
<div className='grid-item grid-container '>

      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>
      
      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>

      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>

      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>

      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>

      <div className="grid-item treatment-card">
        <img className="treatment-image" src="/images/4.png" alt="High Intensives - Personalized Facials" />
        <h3 className="treatment-title">high intensives - personalized facials</h3>
        <p className="treatment-price">€84,00 - €114,00</p>
        <p className="treatment-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatment-buttons">
          <button className="treatment-button" onClick={handleBookNow}>book now</button>
          <button className="treatment-button" onClick={handleMoreInfo}>more info</button>
        </div>
      </div>


      </div>

    
    </main2>
  );
}

export default Treatments;
