export const Project8=()=>{
    return(
        <>
            <h1 className="project-head">CSEdge Internship Tasks</h1>
            <p className="project-desc">
                -During my CSEdge Internship, I completed four dynamic projects using HTML, CSS, and JavaScript. 
                The first task involved creating an opening page featuring sections for home, features, testimonials, 
                and contact, providing a comprehensive overview of a web service. The second task was a sophisticated 
                lightbox gallery, allowing for interactive image viewing. The third project was the development of a 
                student enrollment form, incorporating responsive design for seamless user experience. Lastly, I 
                built a portfolio page that showcases all my previous tasks, offering a cohesive presentation of 
                my web development skills and accomplishments.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Html, CSS, JavaScript</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/CSEdge-Internship-Tasks">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img1.png')}><img src={require('../images/preview8-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img2.png')}><img src={require('../images/preview8-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img3.png')}><img src={require('../images/preview8-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img4.png')}><img src={require('../images/preview8-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img5.png')}><img src={require('../images/preview8-img5.png')} alt='preview5-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img6.png')}><img src={require('../images/preview8-img6.png')} alt='preview6-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img7.png')}><img src={require('../images/preview8-img7.png')} alt='preview7-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img8.png')}><img src={require('../images/preview8-img8.png')} alt='preview8-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img9.png')}><img src={require('../images/preview8-img9.png')} alt='preview9-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview8-img10.png')}><img src={require('../images/preview8-img10.png')} alt='preview10-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}