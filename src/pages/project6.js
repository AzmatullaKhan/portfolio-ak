export const Project6=()=>{
    return(
        <>
            <h1 className="project-head">ATM Demo</h1>
            <p className="project-desc">
                -The ATM demo project built with React JS is a sleek, user-friendly interface that simulates basic ATM 
                functionalities. It allows users to perform actions such as checking their balance, making deposits, and 
                withdrawing funds, all within a secure and responsive environment. The project utilizes React's state 
                management to track user input and financial transactions dynamically. Additionally, it features a 
                clean, modern design, enhancing the user experience. The demo also integrates basic validation to 
                ensure realistic and error-free interactions.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/ATM">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img1.png')}><img src={require('../images/preview6/preview6-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img2.png')}><img src={require('../images/preview6/preview6-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img3.png')}><img src={require('../images/preview6/preview6-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img4.png')}><img src={require('../images/preview6/preview6-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img8.png')}><img src={require('../images/preview6/preview6-img8.png')} alt='preview8-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img5.png')}><img src={require('../images/preview6/preview6-img5.png')} alt='preview5-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img6.png')}><img src={require('../images/preview6/preview6-img6.png')} alt='preview6-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview6/preview6-img7.png')}><img src={require('../images/preview6/preview6-img7.png')} alt='preview7-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}