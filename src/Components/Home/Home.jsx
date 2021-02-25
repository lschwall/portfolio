import React from 'react'
import Nav from '../Nav/Nav.jsx';
import './home.scss'

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="home-content-container">
                    <div className="title">
                        Larry Schwall
                </div>
                    <div className="profession">
                        software_developer
                    </div>
                    <div className="description">
                        twenty_six<br />
                        avid_coder<br />
                        avid_gamer<br />
                        anime_junkie <br />
                        louisiana_native
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default Home
