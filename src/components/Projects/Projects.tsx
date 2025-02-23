import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSection from '../ProjectSection/ProjectSection'

function Projects(){

    return (
        <>
            <div className='ProjectsDiv'>
                <div className='ProjectsDivText'>
                    <SectionTitle SectionName="Some of my projects" SectionNumber="010"/>
                    <p>Here are some of my projects, se all of them on <a href='https://github.com/pchagas72' className='prettyLink'>GitHub</a>!</p>
                </div>
                <ProjectSection projectNumber="1" projectTitle="This website!"
                    projectLink="https://github.com/pchagas72/personal_website"
                    projectDesc="This website is one of my biggest projects, it's my portifolio and my code sandbox! It's made with react but some twists (It's background is made with Golang!) and it has full support for markdown display."
                    tech="React, Typescript, CSS, Golang"
                />
                <ProjectSection projectNumber="2" projectTitle="My Dotfiles"
                    projectLink="https://github.com/pchagas72/pchagas72-dots"
                    projectDesc="Configuration files for my day-to-day linux enviroment."
                    tech="C, C++, Lua, Shell"
                />

                <ProjectSection projectNumber="3" projectTitle="Constela Colaborativo"
                    projectLink="https://github.com/pchagas72/Projeto-constela"
                    projectDesc="This is a news receiving whatsapp bot that also checks for fake news!"
                    tech="Python, Natural Language Processing, Convolutional Neural networks"
                />
            </div>
        </>
    )
}

export default Projects
