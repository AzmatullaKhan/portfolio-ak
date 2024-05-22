export const Project7=()=>{
    return(
        <>
            <h1 className="project-head">SGPA/CGPA Calculator</h1>
            <p className="project-desc">
                -The SGPA/CGPA Calculator project is a web application developed using React JS. It allows students 
                to input their semester grades and credits to calculate their Semester Grade Point Average (SGPA) and 
                Cumulative Grade Point Average (CGPA). The user-friendly interface ensures easy navigation and accurate 
                computations, providing real-time results as inputs are updated. The project employs state management 
                and React hooks to efficiently handle data and enhance performance. Additionally, it features a responsive 
                design, ensuring compatibility across various devices.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/College_Calculations">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview7-img1.png')}><img src={require('../images/preview7-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview7-img2.png')}><img src={require('../images/preview7-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview7-img3.png')}><img src={require('../images/preview7-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview7-img4.png')}><img src={require('../images/preview7-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}