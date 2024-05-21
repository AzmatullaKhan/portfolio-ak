import { useEffect, useState } from 'react';
import './AllPages.css'

export const Main=()=>{
  
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

      window.addEventListener('scroll',()=>{
        let y_scroll=window.pageYOffset;
        if(y_scroll>=450){
          document.getElementById('main_background_two').className='main-background-two'
        }
        else{
          document.getElementById('main_background_two').className='hidden'
        }
      })

    return(
        <div className='main-background'>
          <div className='main-background-two'>
              <WordAnimation/>
              <h1 className='main-background-one-name'>-Azmatulla Khan</h1>
          </div>
          <div className='hidden' id='main_background_two'>
            <h1>Hi</h1>
          </div>
        </div>
    )
}