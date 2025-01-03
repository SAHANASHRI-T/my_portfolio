import React from 'react'
import './Education.css';
import NEC from '../../assets/NEC.jpg';
import SRV from '../../assets/SRV.jpg';

const Education = () => {
  return (
    <div id='Education' className='Education'>
      <div className='Education-title'>
        <h1><span>Education</span></h1>
        <hr/>
      </div>
      <div className="Education-container">
        <div className='Edu' title='Click on the banner to view the institute website'>
          <h3><div className='UG'>Bachelor of Engineering - Electronics and Communication Engineering</div></h3>
          <hr/>
          <h4><span>Institute:</span>National Engineering College</h4>
          <br/>
          <h4><span>Loation:</span> K.R.Nagar, Kovilpatti</h4>
          <br/>
          <h4><span>Percentage:</span> 89.6</h4>
          <br/>
          <a href='https://nec.edu.in/' target='_blank' title='Click on the banner to view the institute website'><img src={NEC} className='necpic'/></a>
        </div>
        <div className='Edu' title='Click on the banner to view the institute website'>
          <h3><div className='HSC'>Higher Secondary Education (12<sup>th</sup> Grade)</div></h3>
          <hr/>
          <h4><span>Institute:</span>Sri Ramana Vidyalaya Montessori Matric Higher Secondary School</h4>
          <br/>
          <h4><span>Loation:</span> Ramana Nagar, Rajapalayam</h4>
          <br/>
          <h4><span>Percentage:</span> 92.66</h4>
          <br/>
          <a href='http://sriramanavidyalaya.org/' target='_blank'><img src={SRV} className='srvpic' title='Click on the banner to view the institute website'/></a>
        </div>
        <div className='Edu' title='Click on the banner to view the institute website'>
          <h3><div className='SSC'>Secondary Education (10<sup>th</sup> Grade)</div></h3>
          <hr/>
          <h4><span>Institute:</span>Sri Ramana Vidyalaya Montessori Matric Higher Secondary School</h4>
          <br/>
          <h4><span>Loation:</span> Ramana Nagar, Rajapalayam</h4>
          <br/>
          <h4><span>Percentage:</span> 91.2</h4>
          <br/>
          <a href='http://sriramanavidyalaya.org/' target='_blank'><img src={SRV} className='srvpic' title='Click on the banner to view the institute website'/></a>
        </div>
      </div>
    </div>
  )
}

export default Education