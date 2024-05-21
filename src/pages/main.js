import { useEffect, useState } from 'react';
import './AllPages.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Project1 } from './Project1';
import { Project2 } from './Project2';


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
              <h1 className='main-background-one-name'>-Azmatulla Khan</h1>
          </div>
          <div className='main-background-two' id='main_background_two' data-aos="fade-left" data-aos-offset="300">
            <Project1 />
          </div>
          <div className='main-background-three' id='main_background_three' data-aos="fade-right" data-aos-offset="300">
            <Project2 />
          </div>
        </div>
    )
}