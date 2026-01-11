import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSection from '../ProjectSection/ProjectSection'

function Projects(){

    return (
        <>
            <div className='ProjectsDiv'>
                <div className='ProjectsDivText'>
                    <SectionTitle SectionName="Key Engineering Projects" SectionNumber="010"/>
                    <p>Featured work focused on Automotive Systems, IoT, and AI. See full source code on <a href='https://github.com/pchagas72' className='prettyLink'>GitHub</a>.</p>
                </div>
                
                <ProjectSection projectNumber="1" projectTitle="Mangue Baja Telemetry System (IoT & Data Analysis)"
                    projectLink="https://github.com/pchagas72/mangue-telemetry"
                    projectDesc="A professional-grade bespoke telemetry solution inspired by MoTeC/McLaren ATLAS. Features real-time data acquisition via MQTT/LoRa, dynamic React dashboards for track engineers, and SQLite storage for post-run analysis. Enables Data-Driven Decision Making."
                    tech="Python, MQTT, React, SQLite, LoRa"
                />
                
                <ProjectSection projectNumber="2" projectTitle="Vehicle ECUs Firmware (Connected Car)"
                    projectLink="https://github.com/pchagas72/Mangue-Baja-ECUs"
                    projectDesc="Developed firmware for vehicle Control Units (SCU/MPU) using ESP32. Implemented CAN Bus communication (ISO 11898 standard) and Over-The-Air (OTA) updates, aligning the vehicle with Industry 4.0 standards while ensuring safety-critical reliability in harsh off-road environments."
                    tech="C++, ESP-IDF, CAN Bus, PlatformIO"
                />

                <ProjectSection projectNumber="3" projectTitle="AI News Validation Bot (Globo Challenge Winner)"
                    projectLink="https://github.com/pchagas72/Projeto-constela"
                    projectDesc="Winner of the Hackathon Globo Challenge. An NLP and AI-driven WhatsApp bot that receives, transcribes, and validates news reports using Convolutional Neural Networks, streamlining journalistic workflows."
                    tech="Python, TensorFlow, NLP, Audio Processing"
                />

                <ProjectSection projectNumber="4" projectTitle="Radio Telescope Firmware"
                    projectLink="https://github.com/pchagas72/telescope-server-firmware"
                    projectDesc="Firmware implementation for a radio telescope array, focusing on precise control and data acquisition from astronomical sensors."
                    tech="C, ESP-IDF, Hardware Control"
                />
            </div>
        </>
    )
}

export default Projects
