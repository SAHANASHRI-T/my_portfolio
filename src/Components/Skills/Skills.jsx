import React from 'react'
import './Skills.css';
import C from '../../assets/C.png';
import Cpp from '../../assets/Cpp.png';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/JS.png';
import Mysql from '../../assets/Mysql.png';
import Sql from '../../assets/Sql.png';
import VScode from '../../assets/VScode.png';
import GITimg from '../../assets/GITimg.png';
import GitHub from '../../assets/GitHub.png';

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="skills-title">
            <h1><span>Skills</span></h1>
            <hr/>
        </div>
        <div className="skills-section">
          <div className="ski">
            <h2><strong>Languages</strong></h2>
            <hr/>
            <ul>
              <li><img src={C} alt='C logo'/></li>
              <li><img src={Cpp} alt='C++ logo'/></li>
              <li><img src={HTML} alt='HTML5 logo'/></li>
              <li><img src={CSS} alt='CSS3 logo'/></li>
              <li><img src={JS} alt='JS logo'/></li>
            </ul>
          </div>
          <div className="ski">
            <h2><strong>DataBase</strong></h2>
            <hr/>
            <ul>
              <li><img src={Mysql} alt='CSS3 logo'/></li>
              <li><img src={Sql} alt='JS logo'/></li>
            </ul>
          </div>
          <div className="ski">
            <h2><strong>Tools</strong></h2>
            <hr/>
            <ul>
              <li><img src={VScode} alt='CSS3 logo'/></li>
              <li><img src={GITimg} alt='JS logo'/></li>
              <li><img src={GitHub} alt='JS logo'/></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Skills;