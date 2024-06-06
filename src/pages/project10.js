export const Project10=()=>{
    return(
        <>
            <h1 className="project-head">Swecha Internship Project(Indian Map)</h1>
            <p className="project-desc">
                -During my SWECHA Internship, I developed an interactive Indian map using HTML, CSS, and JavaScript. 
                The project featured hover functionality, where each state's capital and popular local items are 
                displayed upon interaction. This engaging map provided users with an informative and visually appealing 
                way to learn about different states in India. The project highlighted my ability to create dynamic web 
                content that enhances user experience. This internship project demonstrated my proficiency in integrating 
                interactivity into web design.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  HTML and CSS</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/Internship_Swecha-Project">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview10/preview10-img1.png')}><img src={require('../images/preview10/preview10-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview10/preview10-img2.png')}><img src={require('../images/preview10/preview10-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview10/preview10-img3.png')}><img src={require('../images/preview10/preview10-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview10/preview10-img4.png')}><img src={require('../images/preview10/preview10-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}