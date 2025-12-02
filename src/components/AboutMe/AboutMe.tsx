import './AboutMe.css'
import picture from '../../assets/eu.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'
import { FaDiscord, FaInstagram, FaLinkedin, FaAddressCard } from 'react-icons/fa'

function AboutMe(){
    return (
        <>
            <div className="aboutMeSection">
                <div className='aboutMeSectionText'>
                <SectionTitle SectionName="About Me" SectionNumber="001"/>

                <p> Hi, my name is Pedro and this is my little place on the internet.</p>

                <p> I'm a brazilian electronics engineering major at UFPE with a strong programmer background.</p>

                <p> As of now, my focus is redirected to being a member of the Mangue Baja team. </p>

                <h2>What am I working on?</h2>

                <p>I'm always working on some projects, varying from AI to bare-metal embedded programming. 
                    More about that on my <a href='https://github.com/pchagas72' className='prettyLink'>GitHub</a> or in the 
                projects section.</p>

                <h3> Reach me at: </h3>
                    <ul className='socials'>
                        <li><FaDiscord className='icon'/> <a className='prettyLink'>Pchagas</a></li>
                        <li><FaInstagram className='icon'/><a className='prettyLink'>@pchagas.s</a></li>
                        <li><FaLinkedin className='icon'/> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                        <li><FaAddressCard className='icon'/> <a className='prettyLink'>pedro.pcsilva@ufpe.br</a></li>
                    </ul>
                </div>
                <div className='aboutMePicture'>
                    <img src={picture}/>
                </div>
            </div>
        </>
    )
}

export default AboutMe
