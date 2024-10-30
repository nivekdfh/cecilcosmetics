
import './gridhome.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


function Home() {
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
      <main className="grid-item main4">
        <img className="grid-item slider" src="images/zink-slider-11.jpg" alt="Me" />
        <img className="grid-item slider-mobile" src="images/zink-slider-11-mobile.jpg" alt="Me" />
        <div className="grid-item left-column">
        <h1>Welcome to Cécil Cosmetics</h1>

<p>Hello, I’m Gillanne Cecilia, a passionate and dedicated <em>schoonheidsspecialiste</em> with over four years of hands-on experience in the beauty industry. My journey began in esteemed beauty salons, where I had the privilege to learn, grow, and refine my skills. Each experience served as a stepping stone, offering unique insights and inspiration that have shaped me into the professional I am today.</p>

<p><strong>Welcome to my world of beauty—where your satisfaction is my top priority.</strong></p>

        </div>
        <div className="grid-item right-kolom">
          <img className="grid-item me" src="images/ad-right-img.jpg" alt="Me" />
        </div>  

        {/* <div className="grid-item reclame">
          <img className="grid-item reclame" src="images/zink-slider-3.jpg" alt="Me" />
          </div> */}
      
          <div className='grid-item grid-container '>

<div className="grid-item treatment-card">
  <img className="treatment-image" src="/images/pmu-slider.jpg" alt="PMU" />
  <h3 className="treatment-title">PMU</h3>
  <p className="treatment-description">
    The personalized facials that really work! (and are super relaxing).
  </p>
  <div className="treatment-buttons">
    <button className="treatment-button" onClick={handleMoreInfo1}>more info</button>
  </div>
</div>

<div className="grid-item treatment-card">
  <img className="treatment-image" src="/images/facial-slider.jpg" alt="PMU" />
  <h3 className="treatment-title">Facial</h3>
  <p className="treatment-description">
    The personalized facials that really work! (and are super relaxing).
  </p>
  <div className="treatment-buttons">
    <button className="treatment-button" onClick={handleMoreInfo2}>more info</button>
  </div>
</div>

<div className="grid-item treatment-card">
  <img className="treatment-image" src="/images/pedicure-slider.jpg" alt="PMU" />
  <h3 className="treatment-title">Pedicure</h3>
  <p className="treatment-description">
    The personalized facials that really work! (and are super relaxing).
  </p>
  <div className="treatment-buttons">
    <button className="treatment-button" onClick={handleMoreInfo3}>more info</button>
  </div>
</div>

      </div>
      <div className="grid-item reclame1">
          <img className="grid-item reclame1" src="images/zink-slider-2.jpg" alt="Me" />
          </div>
      
      </main>
  );
}

export default Home;
