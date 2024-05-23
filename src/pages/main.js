import { useEffect, useState } from 'react';
import './AllPages.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Project3 } from './project3';
import { Project4 } from './project4';
import { Project5 } from './project5';
import { Project6 } from './project6';
import { Project7 } from './project7';
import { Project8 } from './project8';
import { Project9 } from './project9';
import { Project10 } from './project10';

export const Main=()=>{
  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
    const words = [
        'I am Azmatulla.',
        "I have completed some projects.",
        "Need an overview?",
        'If so scroll down👇.',
      ];
      
      
      const WordAnimation = () => {
        const [offset, setOffset] = useState(0);
        const [forwards, setForwards] = useState(true);
        const [skipCount, setSkipCount] = useState(0);
        const [wordIndex, setWordIndex] = useState(0);
        const skip_delay = 15;
        const speed = 90; 
        useEffect(() => {
          const interval = setInterval(() => {
            if (forwards) {
              if (offset >= words[wordIndex].length) {
                setSkipCount((prevCount) => prevCount + 1);
                if (skipCount === skip_delay) {
                  setForwards(false);
                  setSkipCount(0);
                }
              }
            } else {
              if (offset === 0) {
                setForwards(true);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
              }
            }
      
            if (skipCount === 0) {
              setOffset((prevOffset) => (forwards ? prevOffset + 1 : prevOffset - 1));
            }
          }, speed);
      
          return () => clearInterval(interval);
        }, [forwards, offset, skipCount, wordIndex]);
      
        const part = words[wordIndex].substr(0, offset);
      
        return <div className="main-word-animation-container"><h1>{part}</h1></div>;
      };
    return(
        <div className='main-background'>
          <div className='main-background-one'>
              <WordAnimation/>
          </div>
          <div className='main-background-project' id='main_background_two' data-aos="fade-left" data-aos-offset="300">
            <Project1 />
          </div>
          <div className='main-background-project' id='main_background_three' data-aos="fade-right" data-aos-offset="300">
            <Project2 />
          </div>
          <div className='main-background-project' id='main_background_four' data-aos="fade-left" data-aos-offset="300">
            <Project3 />
          </div>
          <div className='main-background-project' id='main_background_five' data-aos="fade-right" data-aos-offset="300">
            <Project4 />
          </div>
          <div className='main-background-project' id='main_background_six' data-aos="fade-left" data-aos-offset="300">
            <Project5 />
          </div>
          <div className='main-background-project' id='main_background_seven' data-aos="fade-right" data-aos-offset="300">
            <Project6 />
          </div>
          <div className='main-background-project' id='main_background_eight' data-aos="fade-left" data-aos-offset="300">
            <Project7 />
          </div>
          <div className='main-background-project' id='main_background_nine' data-aos="fade-right" data-aos-offset="300">
            <Project8 />
          </div>
          <div className='main-background-project' id='main_background_ten' data-aos="fade-left" data-aos-offset="300">
            <Project9 />
          </div>
          <div className='main-background-project' id='main_background_eleven' data-aos="fade-right" data-aos-offset="300">
            <Project10 />
          </div>
          <footer className='footer'>
            <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
          </footer>
        </div>
    )
}