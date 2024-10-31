import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import social media icons


function Footer() {
  return (
    <footer className="footer-container">
      <div className="appointment-section">
        <h1>Make an appointment</h1>
        <p>Take care of your body. Come by and enjoy our soothing treatments.</p>
        <Link to="/booknow" className="nav-link">
          <button className="contact-button">Book now</button>
        </Link>
      </div>
      
      <div className="info-section">

        <div className="info-item">
          <h1>Adres</h1>
          <p>jacques urlusplein 44<br />3122 EJ Schiedam<br />+31657871751<br /></p>   <p><a href="mailto:cecilcosmetics@gmail.com">cecilcosmetics@gmail.com</a></p>
        </div>
        <div className="info-item">
          <h1>Openingstijden</h1>
          <table>
            <tbody>
              <tr><td>Maandag</td><td>12:00 - 20:00</td></tr>
              <tr><td>Dinsdag</td><td>10:00 - 20:00</td></tr>
              <tr><td>Woensdag</td><td>10:00 - 18:00</td></tr>
              <tr><td>Donderdag</td><td>10:00 - 21:00</td></tr>
              <tr><td>Vrijdag</td><td>10:00 - 20:00</td></tr>
              <tr><td>Zaterdag</td><td>10:00 - 18:00</td></tr>
              <tr><td>Zondag</td><td>Gesloten</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-item">
        <h1>Social Media</h1>
        <p>Follow us on</p>
        <p>
          <FontAwesomeIcon className="icon" icon={faTiktok} /> TikTok /cecilcosmetics</p>
       
          <p><FontAwesomeIcon className="icon" icon={faInstagram} /> Instagram /cecil.cosmetics</p>
         
          <p><FontAwesomeIcon className="icon" icon={faFacebook} /> Facebook /cecilcosmetics</p>

        </div>
        <div className="info-item">
        <img className="grid-item footer" src="images/gill-FINALB.png" alt="Me" />
      </div>

      </div>

      <div className="disclaimer">
        <p>Copyright © 2024 Cécil Cosmetics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
