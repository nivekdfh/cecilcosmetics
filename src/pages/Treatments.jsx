import React, { useState } from 'react';
import './gridtreatments.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


function Treatments() {
  // const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // const toggleReadMore = () => {
  //   setShowMore(!showMore);
  // };

  const handleMoreInfo1 = () => {
    navigate('/pmu'); // Navigate to the BookNow page
    console.log("More Info clicked");
  };

  const handleMoreInfo2 = () => {
    navigate('/Facial'); // Navigate to the BookNow page
    console.log("More Info clicked");
  };

  const handleMoreInfo3 = () => {
    navigate('/Pedicure'); // Navigate to the BookNow page
    console.log("More Info clicked");
  };

  return (
    
    <main2 className="grid-item main2">
      <div className="grid-item title5">
      <h1>Treatments</h1>
      <p>This is the treatments page.</p>
      </div>

<div className='grid-item grid-container '>

      <div className="grid-item treatments-card">
        <img className="treatments-image" src="/images/pmu-slider.jpg" alt="PMU" />
        <h3 className="treatments-title">PMU</h3>
        <p className="treatments-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatments-buttons">
          <button className="treatments-button" onClick={handleMoreInfo1}>more info</button>
        </div>
      </div>

      <div className="grid-item treatments-card">
        <img className="treatments-image" src="/images/facial-slider.jpg" alt="Facial" />
        <h3 className="treatments-title">Facial</h3>
        <p className="treatments-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatments-buttons">
          <button className="treatments-button" onClick={handleMoreInfo2}>more info</button>
        </div>
      </div>

      <div className="grid-item treatments-card">
        <img className="treatments-image" src="/images/pedicure-slider.jpg" alt="Pedicure" />
        <h3 className="treatments-title">Pedicure</h3>
        <p className="treatments-description">
          The personalized facials that really work! (and are super relaxing).
        </p>
        <div className="treatments-buttons">
          <button className="treatments-button" onClick={handleMoreInfo3}>more info</button>
        </div>
      </div>




    </div>


    
    </main2>
  );
}

export default Treatments;
