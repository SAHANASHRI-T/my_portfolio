import React from 'react'
import './Contact.css';
import Mail from '../../assets/Mail.png';
import Call from '../../assets/Call.png';
import Location from '../../assets/Location.png';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d132e264-9477-40d1-939d-d0753f2b6685");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='cont'>
      <div className="cont-title">
        <h1><span>Get in Touch</span></h1>
        <hr/>
      </div>
      <div className="cont-section">
        <div className="cont-left">
          <h1>Let's talk...</h1>
          <p>I'm currently available to work on new projects. So feel free to contact me at anytime to discuss about it.</p>
          <div className="cont-details">
            <div className="cont-detail">
              <img src={Mail} alt='Gmail Icon' className='Mail-pic'/>
              <p>sahanashrit@gmail.com</p>
            </div>
            <div className="cont-detail">
              <img src={Call} alt='Call Icon' className='Phone-pic'/>
              <p>+91 8667689391</p>
            </div>
            <div className="cont-detail">
              <img src={Location} alt='Location Icon' className='location-pic'/>
              <p>11/234 A115, Ramana Nagar, Rajapalayam, Pincode - 626108</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="cont-right">
          <label htmlFor='Name'>Your Name</label>
          <input type='text' placeholder='Enter Your Name' id='Name' name='name' required/>
          <label htmlFor='Email'>Your Email</label>
          <input type='email' placeholder='Enter Your Email' id='Email' name='email' required/>
          <label htmlFor='Message'>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Type your message' id='Message' required></textarea>
          <button type='submit' className='cont-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;