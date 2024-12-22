import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <h3 className='name'>Sahana Shri</h3>
        <ul className='menu'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Education</a></li>
            <li><a>Experience</a></li>
            <li><a>Skills</a></li>
            <li><a>Resume</a></li>
        </ul>
        <div className='contact'>Contact Me</div>
    </div>
  )
}
