import React from 'react';
import './Experience.css';
import Infosys from '../../assets/Infosys.png';
import TechnoHacks from '../../assets/TechnoHacks.jpg';
import CodSoft from '../../assets/CodSoft.png';

const Experience = () => {
  return (
    <div id='Experience' className='Experience'>
        <div className="Exp-title">
            <h1><span>Experience</span></h1>
            <hr/>
        </div>
        <div className="Exp-section">
          <div className='Exp' id='Infosys'>
            <a href='https://infyspringboard.onwingspan.com/web/en/login' target='_blank' title='Click on the banner to visit Infosys Springboard website'><img src={Infosys} alt='Infosys SpringBoard Banner' className='InfoPic'/></a>
            <h2><strong>Infosys SpringBoard</strong></h2>
            <h3>Oct 2024 - Dec 2024 | Remote</h3>
            <h3><em>FrontEnd Developer</em></h3>
            <hr/>
            <h4><strong>Projects: </strong></h4>
            <ul>
              <li>Collaborated with professionals at Infosys Springboard remotely and contributed in the development of the dashboards using <strong>ReactJS</strong> for the project <q>Learning and Development Management Application</q>.</li>
              <li>Designed Home page, Login & Sign-in pages and dashboards for respective user roles.</li>
            </ul>
          </div>
          <div className='Exp' id="Techno">
            <a href='https://technohacks.co.in/' target='_blank' title='Click on the banner to visit TechnoHack EduTech website'><img src={TechnoHacks} alt='TechnoHacks EduTech Banner' className='TechnoPic'/></a>
            <h2><strong>TechnoHacks EduTech</strong></h2>
            <h3>1 April 2024 - 30 April 2024 | Remote</h3>
            <h3><em>Web Developer</em></h3>
            <hr/>       
            <h4><strong>Projects: </strong></h4>
            <ul>
              <li>Designed a Currency Converter, Countdown Timer & Login page using <strong>HTML, CSS & JavaScript</strong> with attractive user interface.</li>
              <li>Gained proficiency in creating user-friendly and responsive webpages.</li>
            </ul>
          </div>
          <div className='Exp' id='CodSoft'>
            <a href='https://www.codsoft.in/' target='_blank' title='Click on the banner to visit CodSoft website'><img src={CodSoft} alt='CodSoft Banner' className='Codpic'/></a>
            <h2><strong>CodSoft</strong></h2>
            <h3>March 2024 - April 2024 | Remote</h3>
            <h3><em>Web Developer</em></h3>
            <hr/>  
            <h4><strong>Projects: </strong></h4>
            <ul>
              <li>Contributed on designing an attractive Calculator, Landing Page & Portfolio using <strong>HTML, CSS & JavaScript</strong>.</li>
              <li>Kickstarted my web development journey and gained knowledge about the basics of webpage creation.</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Experience;