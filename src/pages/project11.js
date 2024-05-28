export const Project11=()=>{
    return(
        <>
            <h1 className="project-head">Calculator</h1>
            <p className="project-desc">
                -I developed a fully functional calculator using React.js, HTML, and CSS, showcasing my skills in modern web development. 
                The calculator features a clean and intuitive user interface, providing basic arithmetic operations with seamless 
                interactivity. Utilizing React.js, I ensured efficient state management and a responsive design. This project 
                highlighted my ability to build interactive applications with a focus on user experience. Through this, I 
                demonstrated proficiency in front-end development and component-based architecture.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  React JS, HTML and CSS</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/calculator">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview11-img1.png')}><img src={require('../images/preview11-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview11-img2.png')}><img src={require('../images/preview11-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview11-img3.png')}><img src={require('../images/preview11-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview11-img4.png')}><img src={require('../images/preview11-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}