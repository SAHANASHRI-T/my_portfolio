import React from 'react'
import './Home.css'
import Profile from '../../assets/Profile.png';

export const Home = () => {
  return (
    <div id='home' className='homePage'>
        <img src={Profile} alt='profilePic'/>
        <h1><span>I'm Sahana Shri,</span> pre-final year undergraduate</h1>
        <p>I am a Software & Frontend Developer passionate about creating eficient and reliable applications.</p>
    </div>
  )
}
