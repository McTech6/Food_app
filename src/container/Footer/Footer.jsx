import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter,FiInstagram} from 'react-icons/fi'
import {images } from '../../constants'
import './Footer.css';


const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
     <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Buea-Cameroon, New York, USA</p>
        <p className="p__opensans">+237 682 762 507</p>
        <p className="p__opensans"> +237 677 313 864</p>

     </div>
     <div className="app__footer-links_logo">
      <img src={images.gericht} alt="" />
      <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others</p>
      <img src={images.spoon} style={{marginTop: 15}} className='spoon__img' alt="" />
      <div className="app__footer-links_icons">
      <FiFacebook />
      <FiInstagram />
      <FiTwitter />
    </div>
     </div>
     <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday- Friday:</p>
      <p className="p__opensans">08: 00 am - 12:00 am</p>
      <p className="p__opensans"> Saturday-Sunday:</p>
      <p className="p__opensans">08: 00 am - 10:00 pm</p>
     </div>
    </div>

    <div className="footer__copyright">
     <p className="p__opensans">2021 Gericht. All Rights reserved</p>
    
    </div>
  </div>
);

export default Footer;
