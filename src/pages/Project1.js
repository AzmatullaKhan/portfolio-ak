export const Project1=()=>{
    return(
        <>
            <h1 className="project-head">Movie TV Show Recommendation System</h1>
            <p className="project-desc">
                -Our Movie and TV Show Recommendation System empowers users to seamlessly 
                access information on specific movies, createpersonalized watchlists, and enjoy a smooth user experience.Offering a 
                curated selection of content, our system enhancesentertainment discovery, making it easy for users to find their 
                favorite movies and TV shows.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Python, Django, PSQL, HTML, CSS and Javascript</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/Movie_TV_Show_Recommendation_System">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img1.png')}><img src={require('../images/preview1-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img2.png')}><img src={require('../images/preview1-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img3.png')}><img src={require('../images/preview1-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img4.png')}><img src={require('../images/preview1-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img5.png')}><img src={require('../images/preview1-img5.png')} alt='preview5-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img6.png')}><img src={require('../images/preview1-img6.png')} alt='preview6-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img7.png')}><img src={require('../images/preview1-img7.png')} alt='preview7-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview1-img8.png')}><img src={require('../images/preview1-img8.png')} alt='preview8-img' className='project-each-image'/></a>
                    
                </div>
            </div>
        </>
    )
}