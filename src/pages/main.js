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

  let clicks_project=Number(1)

  useEffect(()=>{
    AOS.init({duration:1000})
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

      const handleProjectOneClick=()=>{
        document.getElementById('project-animation-one').className='hidden'
        document.getElementById('main_background_two').className='main-background-project-left'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectTwoClick=()=>{
        document.getElementById('project-animation-two').className='hidden'
        document.getElementById('main_background_three').className='main-background-project-right'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectThreeClick=()=>{
        document.getElementById('project-animation-three').className='hidden'
        document.getElementById('main_background_four').className='main-background-project-left'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectFourClick=()=>{
        document.getElementById('project-animation-four').className='hidden'
        document.getElementById('main_background_five').className='main-background-project-right'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectFiveClick=()=>{
        document.getElementById('project-animation-five').className='hidden'
        document.getElementById('main_background_six').className='main-background-project-left'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectSixClick=()=>{
        document.getElementById('project-animation-six').className='hidden'
        document.getElementById('main_background_seven').className='main-background-project-right'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectSevenClick=()=>{
        document.getElementById('project-animation-seven').className='hidden'
        document.getElementById('main_background_eight').className='main-background-project-left'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectEightClick=()=>{
        document.getElementById('project-animation-eight').className='hidden'
        document.getElementById('main_background_nine').className='main-background-project-right'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectNineClick=()=>{
        document.getElementById('project-animation-nine').className='hidden'
        document.getElementById('main_background_ten').className='main-background-project-left'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectTenClick=()=>{
        document.getElementById('project-animation-ten').className='hidden'
        document.getElementById('main_background_eleven').className='main-background-project-right'
        document.getElementById('main_background_line').style.height=3300+(clicks_project*560)+'px'
        clicks_project+=1
      }
    return(
        <div className='main-background'>
          <div className='main-background-one'>
              <WordAnimation/>
              <div className='main-background-line' id='main_background_line'></div>
          </div>
          <div className='project-animation-left' id='project-animation-one' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectOneClick} style={{marginTop:"10rig0px"}}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>1.Movie TV Show Recommendation</p>
            <img className='animation-each-image-left' src={require('../images/animation-preview1.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_two'>
            <Project1 />
          </div>
          <div className='project-animation-right' id='project-animation-two' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectTwoClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>2.Todo List</p>
            <img className='animation-each-image-right' src={require('../images/animation-preview2.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_three'>
            <Project2 />
          </div>
          <div className='project-animation-left' id='project-animation-three' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectThreeClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>3.Product Adverstising</p>
            <img className='animation-each-image-left' src={require('../images/animation-preview3.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_four'>
            <Project3 />
          </div>
          <div className='project-animation-right' id='project-animation-four' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectFourClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>4.Weather Forecast</p>
            <img className='animation-each-image-right' src={require('../images/animation-preview4.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_five'>
            <Project4 />
          </div>
          <div className='project-animation-left' id='project-animation-five' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectFiveClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>5.Chatting Bot</p>
            <img className='animation-each-image-left' src={require('../images/animation-preview5.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_six'>
            <Project5 />
          </div>
          <div className='project-animation-right' id='project-animation-six' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectSixClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>6.ATM</p>
            <img className='animation-each-image-right' src={require('../images/animation-preview6.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_seven'>
            <Project6 />
          </div>
          <div className='project-animation-left' id='project-animation-seven' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectSevenClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>7.SGPA/CGPA Calculator</p>
            <img className='animation-each-image-left' src={require('../images/animation-preview7.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_eight'>
            <Project7 />
          </div>
          <div className='project-animation-right' id='project-animation-eight' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectEightClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>8.CSEdge Internship</p>
            <img className='animation-each-image-right' src={require('../images/animation-preview8.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_nine'>
            <Project8 />
          </div>
          <div className='project-animation-left' id='project-animation-nine' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectNineClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>9.Tourism and Hospitality</p>
            <img className='animation-each-image-left' src={require('../images/animation-preview9.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_ten'>
            <Project9 />
          </div>
          <div className='project-animation-right' id='project-animation-ten' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectTenClick}>
            <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>10.Swecha Internship</p>
            <img className='animation-each-image-right' src={require('../images/animation-preview10.png')} alt='img'/>
          </div>
          <div className='hidden' id='main_background_eleven'>
            <Project10 />
          </div>

          <footer className='footer'>
            <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
          </footer>
        </div>
    )
}