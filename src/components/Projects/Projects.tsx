import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSection from '../ProjectSection/ProjectSection'

function Projects(){

    return (
        <>
            <div className='ProjectsDiv'>
                <div className='ProjectsDivText'>
                    <SectionTitle SectionName="Some of my projects" SectionNumber="010"/>
                    <p>Here are some of my projects</p>
                </div>
                <ProjectSection projectNumber="1" projectTitle="This website!"
                    projectLink="https://github.com/pchagas72/personal_website"
                    projectDesc="This website is one of my biggest projects, it's my portifolio and my code sandbox! It's made with react but some twists (It's background is made with Golang!) and it has full support for markdown display."/>
                <ProjectSection projectNumber="2" projectTitle="My Dotfiles"
                    projectLink="https://github.com/pchagas72/pchagas72-dots"
                    projectDesc="Configuration files for my day-to-day linux enviroment."
                />

                <ProjectSection projectNumber="3" projectTitle="My project euler solutions"
                    projectLink="https://github.com/pchagas72/projectEuler"
                    projectDesc="Minhas soluções para desafios do site Project Euler em diversas linguagens de programação!"/>
            </div>
        </>
    )
}

export default Projects
