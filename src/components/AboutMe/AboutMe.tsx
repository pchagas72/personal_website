import './AboutMe.css'
import picture from '../../assets/eu.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'
import { FaDiscord, FaInstagram, FaLinkedin, FaMailBulk, FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutMe(){
    return (
        <>
            <div className="aboutMeSection">
                <div className='aboutMeSectionText'>
                <SectionTitle SectionName="About Me" SectionNumber="001"/>

                <p> Hi, my name is Pedro Chagas and I am: </p>
                    <ul className='iam'>
                        <li><a className='prettyLink'>Your dream developer</a></li>
                        <li><a className='prettyLink'>Classical Musician</a></li>
                        <li><a className='prettyLink'>Engineering student</a></li>
                        <li><a className='prettyLink'>Fullstack developer</a></li>
                    </ul>
                    <p> I love writing code, check this on my <a className='prettyLink' href="https://github.com/pchagas72">github profile</a>. </p>

                <h2>What am I working on?</h2>
                <p>I'm one of those people that are always working on something.
                    So, I'm a <a>Computer engineering</a> student at UFPE, and I'm also majoring in <a>
                        Internet Systems</a> at UNICAP under the program <a href='https://www.portodigital.org/noticias/embarque-digital-abre-250-vagas-para-turma-2024-2' className='prettyLink'>"Embarque Digital"</a></p>

                    <p> I'm taking a break from one of my majors (internet systems), and looking for internships or jobs!</p>

                    <p> On top of all that, I'm a proud <a href='https://pedrochagas.com/repertoir' className='prettyLink'>musician</a> at the Pernambuco Music Conservatoire </p>

                    <h3> My contact: </h3>
                    <ul className='socials'>
                        <li><FaMailBulk className='icon'/> <a className='prettyLink'>pedrochagas.sh@gmail.com</a></li>
                        <li><FaDiscord className='icon'/> <a className='prettyLink'>Pchagas</a></li>
                        <li><FaInstagram className='icon'/><a className='prettyLink'>@pchagas.s</a></li>
                        <li><FaLinkedin className='icon'/> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                    </ul>
                    <h2> Interested in hiring me? </h2>
                    <ul className='socials'>

                    <li className='resume'><FaAddressCard className='icon'/> <Link className='prettyLink' routes to={"/background"}>Background</Link></li>
                    <li className='resume'><FaAddressCard className='icon'/> <Link className='prettyLink' routes to={"/resume"}>My Resume</Link></li>
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
