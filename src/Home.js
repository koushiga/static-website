function Home(){
    return(
        <div>
            <div id="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="logo">
                                <h1>REGNA</h1>
                            </div>
                        </div>
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <div className="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#banner-section">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#about">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">PORTFOLIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">DROP DOWN</a>
</li>               
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home">CONTACT</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner">
                                <h1>WELCOME TO REGNA</h1>
                                <p>We are team of talented designers making websites with Bootstrap</p>
                                <a className="getbtn" href="#header-section">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    )
}
export default Home;