import './AboutMe.css'
import picture from '../../assets/eu.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function AboutMe(){
    return (
        <>
            <div className="aboutMeSection">
                <div className='aboutMeSectionText'>
                <SectionTitle SectionName="About Me" SectionNumber="001"/>

                <p> 
                    I am an Electronics Engineering student at UFPE (Federal University of Pernambuco) driven by the challenge of moving the world forward through technology.
                </p>

                <p> 
                    Currently, I serve as a Systems Engineer at <strong>Mangue Baja SAE</strong>, where I apply <strong>Industry 4.0</strong> concepts to motorsport. My work bridges the gap between hardware and software, developing robust embedded systems and real-time telemetry solutions that empower the team to make data-driven decisions.
                </p>

                <p> 
                    I am seeking an opportunity at <strong>Mercedes-Benz</strong> to apply my passion for automotive engineering, discipline in problem-solving, and continuous drive for innovation.
                </p>

                <h3> Connect with me: </h3>
                    <ul className='socials'>
                        <li><FaGithub className='icon'/> <a href='https://github.com/pchagas72' className='prettyLink'>pchagas72</a></li>
                        <li><FaLinkedin className='icon'/> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                        <li><FaEnvelope className='icon'/> <a href='mailto:pedro.pcsilva@ufpe.br' className='prettyLink'>pedro.pcsilva@ufpe.br</a></li>
                    </ul>
                </div>
                <div className='aboutMePicture'>
                    <img src={picture} alt="Pedro Chagas"/>
                </div>
            </div>
        </>
    )
}

export default AboutMe
