export const Project5=()=>{
    return(
        <>
            <h1 className="project-head">Chatting Bot</h1>
            <p className="project-desc">
                -This React-based chat bot application provides users with an interactive and seamless chatting experience. 
                Built with a modern front-end framework, the application ensures high performance, scalability, 
                and a user-friendly interface.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/chatting-bot">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview5/preview5-img1.png')}><img src={require('../images/preview5/preview5-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview5/preview5-img2.png')}><img src={require('../images/preview5/preview5-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview5/preview5-img3.png')}><img src={require('../images/preview5/preview5-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}