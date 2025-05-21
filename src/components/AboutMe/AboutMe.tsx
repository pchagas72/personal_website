import './AboutMe.css'
import picture from '../../assets/eu.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'
import { FaDiscord, FaInstagram, FaLinkedin, FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutMe(){
    return (
        <>
            <div className="aboutMeSection">
                <div className='aboutMeSectionText'>
                <SectionTitle SectionName="About Me" SectionNumber="001"/>

                <p> Hi, my name is Pedro Chagas and I am: </p>
                    <ul className='iam'>
                        <li><a className='prettyLink'>Systems developer</a></li>
                        <li><a className='prettyLink'>Classical Musician</a></li>
                        <li><a className='prettyLink'>Engineering student</a></li>
                    </ul>
                    <p> I love writing code, check this on my <a className='prettyLink' href="https://github.com/pchagas72">github profile</a>. I'm also a classical musician at the Pernambuco Conservatoire of Music. </p>

                <h2>What am I working on?</h2>
                <p>I'm one of those people that are always working on something.
                    I'm currently a <a>Electronics engineering</a> student at UFPE, I have research in the fields of AI, embedded systems, compSec and low-level systems programming.</p>

                    <p> For agents that want to hire me for programming-only jobs, I'm NOT applying to them anymore.</p>
                    <p> I'm looking for <prettyLink>engineering specific</prettyLink> jobs.</p>

                    <p> For professional contact, reach me at <a className="prettyLink">pedro.pcsilva@ufpe.br</a></p>

                    <p> Or check my other contacts below: </p>

                    <h3> My contact: </h3>
                    <ul className='socials'>
                        <li><FaDiscord className='icon'/> <a className='prettyLink'>Pchagas</a></li>
                        <li><FaInstagram className='icon'/><a className='prettyLink'>@pchagas.s</a></li>
                        <li><FaLinkedin className='icon'/> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                    </ul>
                    <h2> Interested in hiring me? </h2>
                    <ul className='socials'>

                    <li className='resume'><FaAddressCard className='icon'/> <Link className='prettyLink' to={"/background"}>Life Story</Link></li>
                    <li className='resume'><FaAddressCard className='icon'/> <Link className='prettyLink' to={"/resume"}>Resume</Link></li>
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
