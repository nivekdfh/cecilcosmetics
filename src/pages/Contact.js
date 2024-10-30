import React from 'react';
import './gridcontact.css';


function Contact() {
  return (

    <main1 className="grid-item main1">
      <img className="grid-item slider" src="images/contact-slider.jpg" alt="Me" />
      <img className="grid-item slider-mobile" src="images/contact-slider-mobile.jpg" alt="Me" />
      <div className="grid-item contact-form">
        <h1>Send us a message</h1>
        <form id="contactForm" name="contact" method="POST" data-netlify="true">
          {/* Hidden input to enable form submission via Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">
            <h3>Naam:</h3>
          </label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">
            <h3>Email adres:</h3>
          </label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="subject">
            <h3>Onderwerp:</h3>
          </label>
          <input type="text" id="subject" name="subject" required />
          <br />
          <label htmlFor="description">
            <h3>Subject:</h3>
          </label>
          <textarea id="description" name="description" required></textarea>
          <br />
          <button type="submit">Sturen</button>
        </form>
        <p id="status"></p>
      {/* <img className="grid-item me2" src="images/gill-FINALB.png" alt="Me" /> */}
      </div> 
      <div className="grid-item right-column">
        <h1>Location</h1>
        <iframe title="map"  id="map-canvas" class="map_part" width="100%" height='40%' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=jacques urlusplein&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <br /><br />
        <h1>Adres</h1>
        <p>jacques urlusplein 44
          <br />3122 EJ Schiedam
          <br />+31657871751
          <br />cecilcosmetics@gmail.nl
        </p>
        <br />
        <h1>Openingstijden</h1>
      <table>
        <tr>
          <td>Maandag</td>
          <td>12:00 - 20:00</td>
        </tr>
        <tr>
          <td>Dinsdag</td>
          <td>10:00 - 20:00</td>
        </tr>
        <tr>
          <td>Woensdag</td>
          <td>10:00 - 18:00</td>
        </tr>
        <tr>
          <td>Donderdag</td>
          <td>10:00 - 21:00</td>
        </tr>
        <tr>
          <td>Vrijdag</td>
          <td>10:00 - 20:00</td>
        </tr>
        <tr>
          <td>Zaterdag</td>
          <td>10:00 - 18:00</td>
        </tr>
        <tr>
          <td>Zondag</td>
          <td>Gesloten</td>
        </tr>
      </table>     
    </div>  
    <div className="grid-item reclame1">
          <img className="grid-item reclame1" src="images/zink-slider-2.jpg" alt="Me" />
          </div>

    </main1>
  );
}

export default Contact;
