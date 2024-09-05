import './AboutMe.css'
import picture from '../../assets/eu.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'

function AboutMe(){
    return (
        <>
            <div className="aboutMeSection">
                <div className='aboutMeSectionText'>
                <SectionTitle SectionName="About Me" SectionNumber="001"/>
                <p>My name is Pedro Chagas, but call me Chagas, I'm a fullstack
                        developer currently residing in Brazil. I love writing 
                    the cleanest and most efficient code! You can check this 
                    on my <a className='prettyLink' href='https://github.com/pchagas72'>github</a> projects.</p>

                <h2>What am I working on?</h2>
                <p>I'm a very engaged and proactive person, I don't stand to not be doing anything.
                    So, I'm a <a>Computer engineering</a> student at UFPE, and I'm also majoring <a>
                    Internet Systems</a> at UNICAP with the program <a href='https://www.portodigital.org/noticias/embarque-digital-abre-250-vagas-para-turma-2024-2' className='prettyLink'>"Embarque Digital"</a></p>

                <p> On top of all that, I'm a proud <a href='https://personal-website-nine-murex.vercel.app/repertoir' className='prettyLink'>musician</a> at the Pernambuco Music Conservatoire </p>

                <h3> My contact: </h3>
                <ul>
                    <li>Email: <a className='prettyLink'>pedrochagas.sm@gmail.com</a></li>
                    <li>Discord: <a className='prettyLink'>Pchagas</a></li>
                    <li>Instagram: <a className='prettyLink'>@pchagas.s</a></li>
                    <li>Linkedin: <a href='' className='prettyLink'>Pedro Chagas</a></li>
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
