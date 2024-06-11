export const Project12=()=>{
    return(
        <>
            <h1 className="project-head">Rock Paper Scissor</h1>
            <p className="project-desc">
                -A Rock Paper Scissors game built using React JS features an interactive interface with real-time feedback and smooth 
                animations. The component-based architecture ensures the game is modular and easy to maintain, with distinct components 
                for game logic, user input, and result display. Utilizing React's state management, it tracks user choices, computer 
                choices, and the game's outcome for a seamless experience. The design is highly customizable with CSS, allowing for easy 
                visual enhancements. Additionally, simple AI logic generates computer moves and determines the winner, providing an 
                engaging challenge for users.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/rock-paper-scissor">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview12/preview12-img1.png')}><img src={require('../images/preview12/preview12-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview12/preview12-img2.png')}><img src={require('../images/preview12/preview12-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview12/preview12-img3.png')}><img src={require('../images/preview12/preview12-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}