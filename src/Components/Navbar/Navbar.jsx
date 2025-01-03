import React, { useState, useRef } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavbarIcon from '../../assets/NavbarIcon.png';
import CloseIcon from '../../assets/CloseIcon.png';

export const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <h3 className='name'><a href=''>Sahana Shri</a></h3>
        <img src={NavbarIcon} alt='Menu-Icon' className='nav-open' onClick={openMenu}/>
        <ul ref={menuRef} className='menu'>
            <img src={CloseIcon} alt='Close' className='nav-close' onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Education'><p onClick={()=>setMenu("Education")}>Education</p></AnchorLink>{menu==="Education"?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Experience'><p onClick={()=>setMenu("Experience")}>Experience</p></AnchorLink>{menu==="Experience"?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#resume'><p onClick={()=>setMenu("resume")}>Resume</p></AnchorLink>{menu==="resume"?<hr/>:<></>}</li>
        </ul>
        <div className='contact'><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
    </div>
  )
}
