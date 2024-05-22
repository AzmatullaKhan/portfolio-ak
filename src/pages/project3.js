export const Project3=()=>{
    return(
        <>
            <h1 className="project-head">Product Adverstising</h1>
            <p className="project-desc">
                -The Product Advertising Website is a robust and dynamic single-page application (SPA) 
                built using React. This platform allows businesses to showcase their products and advertisements 
                effectively to potential customers. The application includes user authentication, product listings, 
                and advertisement management, all aimed at providing a seamless user'experience.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/Product_Advertising">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview3-img1.png')}><img src={require('../images/preview3-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview3-img2.png')}><img src={require('../images/preview3-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview3-img3.png')}><img src={require('../images/preview3-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview3-img4.png')}><img src={require('../images/preview3-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}