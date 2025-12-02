import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSection from '../ProjectSection/ProjectSection'

function Projects(){

    return (
        <>
            <div className='ProjectsDiv'>
                <div className='ProjectsDivText'>
                    <SectionTitle SectionName="Some of my projects" SectionNumber="010"/>
                    <p>Here are some of my lastest big projects, se all of them on <a href='https://github.com/pchagas72' className='prettyLink'>GitHub</a></p>
                </div>
                <ProjectSection projectNumber="1" projectTitle="Fullstack Radio and Mqtt Telemetry"
                    projectLink="https://github.com/pchagas72/mangue-telemetry"
                    projectDesc="The telemetry interface I created for the Mangue Baja team."
                    tech="Typescript, Python, FastAPI"
                />
                <ProjectSection projectNumber="2" projectTitle="Mangue Baja ECUs"
                    projectLink="https://github.com/pchagas72/Mangue-Baja-ECUs"
                    projectDesc="The firmware I made/edited for the ECUs to a baja-SAE car."
                    tech="C, C++, ESP-IDF, PlatformIO"
                />
                <ProjectSection projectNumber="3" projectTitle="Radio Telescope Firmware/Software"
                    projectLink="https://github.com/pchagas72/telescope-server-firmware"
                    projectDesc="Firmware and software for my radio telescope array!."
                    tech="C, ESP-IDF"
                />
                <ProjectSection projectNumber="4" projectTitle="Cryptography and Ransomware research"
                    projectLink="https://github.com/pchagas72/ES502"
                    projectDesc="This is a research program that I started to learn more about viruses and malwares, my end goal is to develop an AI-driven antivirus or high-grade malware."
                    tech="C, Assembly, Python"
                />
                <ProjectSection projectNumber="5" projectTitle="Constela Colaborativo"
                    projectLink="https://github.com/pchagas72/Projeto-constela"
                    projectDesc="This is a report receiving whatsapp bot that also checks for fake news, fully AI and NLP driven project."
                    tech="Python, Natural Language Processing, Convolutional Neural networks, audio and image processing"
                />
            </div>
        </>
    )
}

export default Projects
