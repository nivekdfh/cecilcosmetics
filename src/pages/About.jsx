import React from 'react';
import './gridabout.css';

function About() {
  return (
      <main className="grid-item main3">
        <img className="grid-item slider" src="images/zink-slider-1.jpg" alt="Me" />
        <img className="grid-item slider-mobile" src="images/zink-slider-1-mobile.jpg" alt="Me" />
        <div className="grid-item left-column">
        <h1>Welcome to My World of Beauty</h1>

<p>Hello, I’m Gillanne Cecilia, a passionate and dedicated <em>schoonheidsspecialiste</em> with over four years of hands-on experience in the beauty industry. My journey began in esteemed beauty salons, where I had the privilege to learn, grow, and refine my skills. Each experience served as a stepping stone, offering unique insights and inspiration that have shaped me into the professional I am today.</p>

<p>Driven by my love for beauty and well-being, I am now taking the exciting step of becoming my own boss. I’m bringing all the knowledge and expertise I've gathered to create a space that truly reflects my passion. My goal is to provide you with exceptional care and personalized treatments, ensuring you feel confident and radiant in your own skin.</p>

<p><strong>Welcome to my world of beauty—where your satisfaction is my top priority.</strong></p>

        </div>
        <div className="grid-item right-kolom">
          <img className="grid-item me" src="images/gill-FINALB.png" alt="Me" />
        </div>  
        <div className="grid-item reclame1">
          <img className="grid-item reclame1" src="images/zink-slider-2.jpg" alt="Me" />
          </div>
      </main>
  );
}

export default About;
