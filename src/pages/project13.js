export const Project13=()=>{
    return(
        <>
            <h1 className="project-head">Tic-Tac-Toe</h1>
            <p className="project-desc">
                -A Tic-Tac-Toe game developed using React offers a sleek and interactive interface where users can enjoy the 
                classic game with real-time updates and animations. The component-based architecture ensures easy maintenance and 
                modularity, with distinct components handling the board, cells, and game logic. State management in React is utilized 
                to track moves, player turns, and determine the winner, providing a responsive user experience. The game's design is 
                easily customizable with CSS, allowing developers to enhance the visual appeal effortlessly. Additionally, features 
                such as move history and game reset are seamlessly integrated, enhancing the overall gameplay.
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  React JS, HTML and CSS</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/tic-tac-toe">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview13/preview13-img1.png')}><img src={require('../images/preview13/preview13-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview13/preview13-img2.png')}><img src={require('../images/preview13/preview13-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview13/preview13-img3.png')}><img src={require('../images/preview13/preview13-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview13/preview13-img4.png')}><img src={require('../images/preview13/preview13-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}