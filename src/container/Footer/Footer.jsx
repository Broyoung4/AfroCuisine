import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images, images2 } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">10 Adetokunbo Ademola Street, Lagos state</p>
        <p className="p__opensans">+1 123-456-7777</p>
        <p className="p__opensans">+234 812-251-9445</p>
      </div>

      <div className="app__footer-links_logo">
        <div className='app__footer_logo-leaf flex__center'>
          <img src={images2.Leaf} alt="app__logo" />
          <a href='#' className='p__cormorant'>AfroCuisine</a>
        </div>
        <p className="p__opensans">&quot;A pinch of passion in every dish.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Afrocuisine. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
