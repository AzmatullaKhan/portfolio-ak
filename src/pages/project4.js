export const Project4=()=>{
    return(
        <>
            <h1 className="project-head">Weather Forecast</h1>
            <p className="project-desc">
                -The Weather Forecasting Application is a sleek and user-friendly single-page application (SPA) 
                built using React. It provides real-time weather updates and forecasts for locations worldwide. 
                The application integrates with the OpenWeatherMap API to fetch and display current weather conditions, 
                hourly forecasts, and seven-day'forecasts..
            </p>
            <p className="project-technologies"><span>Used Technnologies</span>:-  Reactjs, CSS and HTML</p>
            <a rel="noreferrer" target={"_blank"} href="https://github.com/AzmatullaKhan/Weather_Forecast">👉Github👈</a>
            <div className="project-images">
                <div style={{display:"flex", overflow:"scroll"}}>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview4-img1.png')}><img src={require('../images/preview4-img1.png')} alt='preview1-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview4-img2.png')}><img src={require('../images/preview4-img2.png')} alt='preview2-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview4-img3.png')}><img src={require('../images/preview4-img3.png')} alt='preview3-img' className='project-each-image'/></a>
                    <a rel="noreferrer" target={"_blank"} href={require('../images/preview4-img4.png')}><img src={require('../images/preview4-img4.png')} alt='preview4-img' className='project-each-image'/></a>
                </div>
            </div>
        </>
    )
}