import React, { useState, useEffect, useRef} from 'react';
import '../css/projects.css';

import giullya from '../images/giullya.jpg';
import album from '../images/album.jpeg';
import bibleChurch from '../images/biblechurch.jpg';
import htw from '../images/heaventheway.jpg';
import pwmd from '../images/pwmd.jpg';
import wedding from '../images/wedding.jpg';
import rainbow from '../images/rainbow.jpg';
import sensei from '../images/sensei.jpg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleHover = (image) => {
    const projectPreview = document.querySelector('.projectPreview');
    projectPreview.style.backgroundImage = `url(${image})`;
    projectPreview.classList.add('active'); // Add the 'active' class to show the background image
  };

  const handleLeave = () => {
    const projectPreview = document.querySelector('.projectPreview');
    projectPreview.classList.remove('active'); // Remove the 'active' class to hide the background image
  };

  const themeClass = isDarkMode ? 'darkMode' : 'lightMode';

  return (
    <div className={`app ${themeClass}`}>
    <div className= 'navBar'>
           <label class='toggle' for='switch'>
        <input onClick={toggleTheme} id='switch' className='input' type='checkbox'/>
        <div className='icon icon--moon'>
          <svg height='32' width='32' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path clip-rule='evenodd' d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z' fill-rule='evenodd'></path>
          </svg>
        </div>
        <div className='icon icon--sun'>
          <svg height='32' width='32' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z'></path>
          </svg>
        </div>
      </label>
    </div>
      <div className='content'>
        <div id='work' className='section'>
        <h1>My Work</h1>
          <div className='projectPreview'></div>
          <div className='bottom'>
            <div className='projects'>
                <button id='pwmd' className='project' onMouseEnter={() => handleHover(pwmd)} onMouseLeave={handleLeave}>
                  <h3>People Who Make A Difference</h3>
                  <p>Design + Development</p>
                </button>
                <button id='rainbow' className='project' onMouseEnter={() => handleHover(rainbow)} onMouseLeave={handleLeave}>
                  <h3>Rainbow Real Painting</h3>
                  <p>Design + Development</p>
                </button>
                <button id='bibleChurch' className='project' onMouseEnter={() => handleHover(bibleChurch)} onMouseLeave={handleLeave}>
                  <h3>Bible Church</h3>
                  <p>Design + Development</p>
                </button>
                <button id='wedding' className='project' onMouseEnter={() => handleHover(wedding)} onMouseLeave={handleLeave}>
                  <h3>Damaris And Sidiclei</h3>
                  <p>Design + Development</p>
                </button>
                <button id='sensei' className='project' onMouseEnter={() => handleHover(sensei)} onMouseLeave={handleLeave}>
                  <h3>Syntax Sensei</h3>
                  <p>Design + Development</p>
                </button>
                <button id='heavenTheWay' className='project' onMouseEnter={() => handleHover(htw)} onMouseLeave={handleLeave}>
                  <h3>Heaven The Way</h3>
                  <p>Web Design</p>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;