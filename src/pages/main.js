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
import { Project11 } from './project11';
import { Project12 } from './project12';


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
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectTwoClick=()=>{
        document.getElementById('project-animation-two').className='hidden'
        document.getElementById('main_background_three').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectThreeClick=()=>{
        document.getElementById('project-animation-three').className='hidden'
        document.getElementById('main_background_four').className='main-background-project-left'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleProjectFourClick=()=>{
        document.getElementById('project-animation-four').className='hidden'
        document.getElementById('main_background_five').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectFiveClick=()=>{
        document.getElementById('project-animation-five').className='hidden'
        document.getElementById('main_background_six').className='main-background-project-left'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectSixClick=()=>{
        document.getElementById('project-animation-six').className='hidden'
        document.getElementById('main_background_seven').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectSevenClick=()=>{
        document.getElementById('project-animation-seven').className='hidden'
        document.getElementById('main_background_eight').className='main-background-project-left'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectEightClick=()=>{
        document.getElementById('project-animation-eight').className='hidden'
        document.getElementById('main_background_nine').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectNineClick=()=>{
        document.getElementById('project-animation-nine').className='hidden'
        document.getElementById('main_background_ten').className='main-background-project-left'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectTenClick=()=>{
        document.getElementById('project-animation-ten').className='hidden'
        document.getElementById('main_background_eleven').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectElevenClick=()=>{
        document.getElementById('project-animation-eleven').className='hidden'
        document.getElementById('main_background_twelve').className='main-background-project-left'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }
      const handleProjectTwelveClick=()=>{
        document.getElementById('project-animation-twelve').className='hidden'
        document.getElementById('main_background_thirteen').className='main-background-project-right'
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)+'px'
        clicks_project+=1
      }

      const handleCloseOne=()=>{
        document.getElementById('project-animation-one').className='project-animation-left'
        document.getElementById('main_background_two').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }

      const handleCloseTwo=()=>{
        document.getElementById('project-animation-two').className='project-animation-right'
        document.getElementById('main_background_three').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }

      const handleCloseThree=()=>{
        document.getElementById('project-animation-three').className='project-animation-left'
        document.getElementById('main_background_four').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseFour=()=>{
        document.getElementById('project-animation-four').className='project-animation-right'
        document.getElementById('main_background_five').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseFive=()=>{
        document.getElementById('project-animation-five').className='project-animation-left'
        document.getElementById('main_background_six').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseSix=()=>{
        document.getElementById('project-animation-six').className='project-animation-right'
        document.getElementById('main_background_seven').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseSeven=()=>{
        document.getElementById('project-animation-seven').className='project-animation-left'
        document.getElementById('main_background_eight').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseEight=()=>{
        document.getElementById('project-animation-eight').className='project-animation-right'
        document.getElementById('main_background_nine').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseNine=()=>{
        document.getElementById('project-animation-nine').className='project-animation-left'
        document.getElementById('main_background_ten').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseTen=()=>{
        document.getElementById('project-animation-ten').className='project-animation-right'
        document.getElementById('main_background_eleven').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseEleven=()=>{
        document.getElementById('project-animation-eleven').className='project-animation-left'
        document.getElementById('main_background_twelve').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
      const handleCloseTwelve=()=>{
        document.getElementById('project-animation-twelve').className='project-animation-right'
        document.getElementById('main_background_thirteen').className='hidden'
        clicks_project-=1
        document.getElementById('main_background_line').style.minHeight=3600+(clicks_project*560)-560+'px'
      }
    return(
        <div className='main-background'>
          <section id='homeSection'>
            <div className='main-background-one'>
              <div className='main-background-nav'>
                <a href='#homeSection'><button className='main-background-nav-button'>Home</button></a>
                <a href='#projectSection'><button className='main-background-nav-button'>Projects</button></a>
                <a href='#aboutSection'><button className='main-background-nav-button'>About</button></a>
                <a href='#resumeSection'><button className='main-background-nav-button'>Resume</button></a>
                <a href='#certificatesSection'><button className='main-background-nav-button'>Certificates</button></a>
              </div>
              <WordAnimation/>
              <div className='main-background-line' id='main_background_line'></div>
            </div>
          </section><br></br>

          <section id='projectSection'>
            <div><br></br><br></br><br></br><br></br><br></br></div>

            <h2 style={{margin:"0px 0px 0px 400px", textDecoration:"underline"}}  data-aos='fade-down' data-aos-offset="300">Projects</h2>

            <div className='project-animation-left' id='project-animation-one' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectOneClick} style={{marginTop:"0px"}}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>1.Movie TV Show Recommendation</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview1.png')} alt='img'/>
              {/* <div className='animation-each-image-left-white'>Used Technnologies:- Python, Django, PSQL, HTML, CSS and Javascript</div> */}
            </div>
            <div className='hidden' id='main_background_two'>
              <Project1 />
              <button className='project-close-button' onClick={handleCloseOne}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-two' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectTwoClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>2.Todo List</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview2.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_three'>
              <Project2 />
              <button className='project-close-button' onClick={handleCloseTwo}>Close</button>
            </div>

            <div className='project-animation-left' id='project-animation-three' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectThreeClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>3.Product Adverstising</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview3.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_four'>
              <Project3 />
              <button className='project-close-button' onClick={handleCloseThree}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-four' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectFourClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>4.Weather Forecast</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview4.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_five'>
              <Project4 />
              <button className='project-close-button' onClick={handleCloseFour}>Close</button>
            </div>

            <div className='project-animation-left' id='project-animation-five' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectFiveClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>5.Chatting Bot</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview5.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_six'>
              <Project5 />
              <button className='project-close-button' onClick={handleCloseFive}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-six' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectSixClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>6.ATM</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview6.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_seven'>
              <Project6 />
              <button className='project-close-button' onClick={handleCloseSix}>Close</button>
            </div>
            
            <div className='project-animation-left' id='project-animation-seven' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectSevenClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>7.SGPA/CGPA Calculator</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview7.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_eight'>
              <Project7 />
              <button className='project-close-button' onClick={handleCloseSeven}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-eight' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectEightClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>8.CSEdge Internship</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview8.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_nine'>
              <Project8 />
              <button className='project-close-button' onClick={handleCloseEight}>Close</button>
            </div>

            <div className='project-animation-left' id='project-animation-nine' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectNineClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>9.Tourism and Hospitality</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview9.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_ten'>
              <Project9 />
              <button className='project-close-button' onClick={handleCloseNine}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-ten' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectTenClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>10.Swecha Internship</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview10.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_eleven'>
              <Project10 />
              <button className='project-close-button' onClick={handleCloseTen}>Close</button>
            </div>

            <div className='project-animation-left' id='project-animation-eleven' data-aos='fade-left' data-aos-offset='300' onClick={handleProjectElevenClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>11. Calculator</p>
              <img className='animation-each-image-right' src={require('../images/animation_folder/animation-preview11.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_twelve'>
              <Project11 />
              <button className='project-close-button' onClick={handleCloseEleven}>Close</button>
            </div>

            <div className='project-animation-right' id='project-animation-twelve' data-aos='fade-right' data-aos-offset='300' onClick={handleProjectTwelveClick}>
              <p  style={{cursor:"pointer", fontSize:"22px"}} id='project-animation-idHolder'>12. Rock-Paper-Scissor</p>
              <img className='animation-each-image-left' src={require('../images/animation_folder/animation-preview12.png')} alt='img'/>
            </div>
            <div className='hidden' id='main_background_thirteen'>
              <Project12 />
              <button className='project-close-button' onClick={handleCloseTwelve}>Close</button>
            </div>

          </section><br></br>
          
          <section id='aboutSection'>
            <div className='aboutSection-container' data-aos='fade-down' data-aos-offset="500"><br></br><br></br><br></br>
                <strong style={{textDecoration:"underline"}}>Personal Info</strong>
                I am Azmatulla Khan, a passionate 20-year-old pursuing my
                academic(B.Tech Computer Science) journey at KL University, Vaddeswaram.
                With a burning enthusiasm for technology, I'm deeply immersed in the world
                of Full Stack Development and Software DevOps.
                Feel free to reach out to me and I'm always eager to connect, collaborate, and embark on new adventures
                within the vast realm of technology.<span style={{color:"gray", fontWeight:"bolder", textDecoration:"none"}}>2200031618cseh@gmail.com</span><br></br>
                <strong style={{textDecoration:"underline"}}>skills</strong>
                <p style={{margin:"0px", width:"550px", display:"flex", justifyContent:"space-between"}}><span style={{textDecoration:"none"}}>REACT JS, Node JS ,Express JS, Mongoose</span><span style={{textDecoration:"none"}}>⭐⭐⭐⭐</span></p>
                <p style={{margin:"0px", width:"550px", display:"flex", justifyContent:"space-between"}}><span style={{textDecoration:"none"}}>Python, Django, PSQL </span><span style={{textDecoration:"none"}}>⭐⭐⭐⭐</span></p>
                <p style={{margin:"0px", width:"550px", display:"flex", justifyContent:"space-between"}}><span style={{textDecoration:"none"}}>HTML, CSS, Java Script</span><span style={{textDecoration:"none"}}>⭐⭐⭐⭐⭐</span></p>
                <p style={{margin:"0px", width:"550px", display:"flex", justifyContent:"space-between"}}><span style={{textDecoration:"none"}}>Java and C Programming languages</span><span style={{textDecoration:"none"}}>⭐⭐⭐⭐</span></p><br></br>
                <strong style={{textDecoration:"underline"}}>Academic History</strong>
                X Class CBSE | 2019- 2020 | Percentage Scored: 79.9<br></br>
                Delhi Public School(INTERMEDIATE- MPC) | 2020- 2022 | Percentage Scored: 90.1%<br></br>
                KL University(Bachelors in Computer Science)| 2022 - 2026 | Current CGPA: 9.56<br></br><br></br>
                <strong style={{textDecoration:"underline"}}>Profiles</strong>
                <div style={{margin:"20px 0px", width:"300px", display:"flex", justifyContent:"center"}}>
                  <a rel="noreferrer" target={"_blank"} href='https://leetcode.com/u/klu_2200031618/'><img src={require('../images/logos/LeetCode.png')} alt='leetcode' style={{height:"60px", width:"60px", borderRadius:"30px", margin:"0px 12px"}}/></a>
                  <a rel="noreferrer" target={"_blank"} href='https://www.codechef.com/users/klu_2200031618'><img src={require('../images/logos/codechef.jpg')} alt='codechef' style={{height:"60px", width:"60px", borderRadius:"30px", margin:"0px 12px"}}/></a>
                  <a rel="noreferrer" target={"_blank"} href='https://www.hackerrank.com/profile/klu_2200031618'><img src={require('../images/logos/hackerrank.png')} alt='hackerrank' style={{height:"60px", width:"60px", borderRadius:"30px", margin:"0px 12px"}}/></a>
                  <a rel="noreferrer" target={"_blank"} href='https://www.hackerrank.com/profile/klu_2200031618'><img src={require('../images/logos/github.png')} alt='github' style={{height:"60px", width:"60px", borderRadius:"30px", margin:"0px 12px"}}/></a>
                  <a rel="noreferrer" target={"_blank"} href='https://github.com/AzmatullaKhan'><img src={require('../images/logos/linkedIn.png')} alt='linkedIn' style={{height:"60px", width:"60px", borderRadius:"30px", margin:"0px 12px"}}/></a>
                </div>
            </div>
          </section><br></br>

          <section id='resumeSection'>
            <div className='resumeSection-container' data-aos='fade-down' data-aos-offset="400"><br></br>
              <a rel='noreferrer' target={'_blank'} href={require('../files/resume.pdf')}><img src={require('../files/resume.png')} className='resumeSection-resume' alt='resume'/></a>
            </div>
          </section>

          <section id='certificatesSection'>
            <div className='certificateSection-container' data-aos='fade-down' data-aos-offset="400"><br></br>
              <a rel='noreferrer' target={'_blank'} href="https://api.accredible.com/v1/auth/invite?code=680eada31ffeccfc8424&credential_id=ada99758-285f-4b7e-91b5-14ba34f8e0f6&url=https%3A%2F%2Fcertificates.automationanywhere.com%2Fada99758-285f-4b7e-91b5-14ba34f8e0f6&ident=22787fea-920a-41ff-ae59-43cf0c079c8c">
                <img src={require('../files/rpa.png')} className='certificateSection-certificate' alt='resume'/>
              </a>
            </div>
          </section>

          <footer className='footer'>
            <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
          </footer>
        </div>
    )
}