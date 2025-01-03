import React from 'react'
import './About.css'
import SahanaShri from '../../assets/SahanaShri.jpg';
import LinkedIn from '../../assets/LinkedIn.png'
import GitHub from '../../assets/GitHub.png';
import Gmail from '../../assets/Gmail.png';

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1><span>About me</span></h1>
            <hr/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={SahanaShri} alt='profilePic'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an <b>Electronics and Communication Engineering</b> undergraduate from <b>National Engineering College, Kovilpatti</b>. Though I am an Electronics student, I have a strong desire to excel in the field of <b>Software and Frontend Development</b>. To achieve this goal, I have been working sincerely to enrich my knowledge and soft skills through coding platforms, academic courses, projects & internships. I strongly believe that <q>Practice makes a man perfect</q> and continue to strive towards my goals.</p>
                    <p>Being aware of the rapidly evolving tech landscape, I am eager to contribute my skills in creating intuitive and reliable applications. I aspire to work in a collaborative and challenging environment where I can learn from experienced professionals, improve my skills and achieve both personal and professional growth by contributing to successful projects and delivering high-quality results.</p>
                </div>
                <div className="about-links">
                    <a href='https://www.linkedin.com/in/sahana-shri-t-a592bb27a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2Wm1nvWESfeLFfIfWVVcig%3D%3D' target='_blank'><img src={LinkedIn}/></a>
                    <a href='https://github.com/SAHANASHRI-T' target='_blank'><img src={GitHub}/></a>
                    <a href='mailto:sahanashrit@gmail.com' target='_blank'><img src={Gmail}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;