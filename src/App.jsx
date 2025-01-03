import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;