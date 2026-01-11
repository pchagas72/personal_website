import './css/Home.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import bajaTeamPic from '../assets/team_now.png' 

function Home() { 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page_body'>
            {/* --- HERO SECTION: AUTOMOTIVE FOCUS --- */}
            <div className="hero_section">
                <div className="hero_content">
                    <span className="highlight_tag">AUTOMOTIVE SYSTEMS ENGINEERING</span>
                    <h1>Engineering the Future of Mobility</h1>
                    <p className="hero_description">
                        My name is <strong>Pedro Chagas</strong>, and I am an Electronics Engineering student specializing in <strong>Embedded Systems</strong>, <strong>Telemetry</strong>, and <strong>IoT Solutions</strong> for high-performance vehicles.
                        <br/><br/>
                        Currently developing data-driven technologies for <strong>Mangue Baja SAE</strong>, focusing on Industry 4.0 concepts to optimize decision-making on the track.
                    </p>
                    
                    <div className="tech_stack">
                        <span>Embedded C/C++</span>
                        <span>CAN Bus (ISO 11898 + ISO j1939)</span>
                        <span>IoT & MQTT</span>
                        <span>Python Telemetry</span>
                        <span>React Dashboards</span>
                    </div>

                    <div className="hero_links">
                        <a className="primary_btn" href="https://github.com/pchagas72" target="_blank" rel="noreferrer">
                            View GitHub Portfolio
                        </a>
                        {/* AQUI: Texto ajustado para maior impacto */}
                        <Link className="secondary_btn" to="/resume">
                            View Engineering CV
                        </Link>
                    </div>
                </div>
                
                <div className="hero_image_container">
                    <img src={bajaTeamPic} alt="Mangue Baja Telemetry and Vehicle" className="hero_image" />
                </div>
            </div>
            {/* ----------------------------------- */}

            <AboutMe />
            <Projects />
            
            <div className='insideLinks'>
                <h1>Engineering Journal & Resources</h1>
                <p>Documenting the journey from bare-metal code to race-ready systems.</p>
                
                <div className="link_grid">
                    <Link className='link_button' to={"/resume"}>Resume / CV</Link>
                    <Link className='link_button' to={"/blog"}>Technical Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
