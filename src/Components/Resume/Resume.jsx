import React from 'react'
import './Resume.css';
import Myresume from '../../assets/Myresume.jpeg';
import SAHANASHRIT from '../../assets/SAHANASHRIT.pdf';

const Resume = () => {
  return (
    <div id='resume' className='resume'>
        <div className="resume-title">
            <h1><span>Resume</span></h1>
            <hr/>
        </div>
        <div className="resume-section">
            <div className="resume-left">
                <img src={Myresume} alt='My resume'/>
            </div>
            <div className='resume-right'>
                <div className="resume-download">
                    <a href={SAHANASHRIT} target='_blank' rel="noreferrer">Download my resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume;