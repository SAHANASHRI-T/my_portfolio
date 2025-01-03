import React from 'react';
import './Footer.css';
import UserIcon from '../../assets/UserIcon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h3 className='name'><a href=''>Sahana Shri</a></h3>
                <p>I am a Software & Frontend Developer passionate about creating eficient and reliable applications.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={UserIcon} alt='User Icon' className='user-logo'/>
                <input type='email' placeholder='Enter your email'/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
          <p className="footer-bottom-left">&copy; 2024 Sahana Shri. All rights reserved</p>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;