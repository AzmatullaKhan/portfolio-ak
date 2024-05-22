export const Project2=()=>{
    return(
        <>
            <h1 className="project-head">Todo List</h1>
            <p className="project-desc">
                -This React To-Do List application empowers users to efficiently manage tasks, prioritize activities, 
                and enhance productivity. Seamlessly crafted with React, it offers a responsive and intuitive user interface, 
                enabling users to add, edit, and delete tasks effortlessly. With dynamic updating and intuitive design, this 
                application streamlines task management, helping users stay organized and focused. Experience the power of 
                React in task management with this versatile To-Do List'application.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/todo-list">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview2-img1.png')}><img src={require('../images/preview2-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview2-img2.png')}><img src={require('../images/preview2-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview2-img3.png')}><img src={require('../images/preview2-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview2-img4.png')}><img src={require('../images/preview2-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}