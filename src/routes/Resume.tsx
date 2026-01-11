import { useEffect } from 'react'
import './css/Resume.css'
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import resumePDF from '../assets/CV_Pedro_Chagas_Estagio_Engenharia.pdf'

function Resume(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="resume_container">
            
            {/* HEADER */}
            <header className="resume_header">
                <div className="header_info">
                    <Link to={'/'}><h1>Pedro Chagas</h1></Link>
                    <h2>Electronic Engineering Student | Automotive Systems</h2>
                </div>
                <div className="download_btn_container">
                    <a className="download_btn" href={resumePDF} download target="_blank" rel="noopener noreferrer">
                        <FaDownload /> Download PDF
                    </a>
                </div>
            </header>

            {/* SUMMARY */}
            <section className="resume_section">
                <h3 className="section_title">Professional Objective</h3>
                <div className="entry_content">
                    <p>
                        Electronic Engineering student with practical expertise in <strong>Embedded Systems</strong>, <strong>Telemetry</strong>, and <strong>IoT</strong> tailored for automotive applications. 
                        Currently applying Industry 4.0 concepts at <strong>Mangue Baja SAE</strong> to enhance vehicle performance and reliability. 
                        Driven by a passion for mobility and innovation, I am seeking an internship at <strong>Mercedes-Benz</strong> to contribute to the future of connected and intelligent vehicles with discipline and technical excellence.
                    </p>
                </div>
            </section>

            {/* EXPERIENCE - O CORAÇÃO DO CURRÍCULO */}
            <section className="resume_section">
                <h3 className="section_title">Engineering Experience</h3>
                
                <div className="resume_entry">
                    <div className="entry_header">
                        <div>
                            <h4 className="entry_title">Mangue Baja SAE</h4>
                            <p className="entry_subtitle">Systems Engineer (Embedded & Telemetry)</p>
                        </div>
                        <span className="entry_date">Mar 2025 - Present</span>
                    </div>
                    <div className="entry_content">
                        <p>
                            Lead developer for the vehicle's electronic architecture, focusing on data acquisition and reliability in harsh off-road environments.
                        </p>
                        <ul>
                            <li>
                                <strong>Telemetry System Development:</strong> Engineered a full-stack telemetry solution using <strong>Python</strong> and <strong>MQTT</strong> over <strong>LoRa</strong>. The system provides real-time visualization of vehicle parameters (speed, CVT temperature, suspension travel) to the pit crew, enabling data-driven strategy adjustments during races.
                            </li>
                            <li>
                                <strong>Embedded Firmware (ECUs):</strong> Developed efficient C++ firmware for <strong>ESP32</strong> microcontrollers using <strong>ESP-IDF</strong> and <strong>FreeRTOS</strong> concepts. Implemented interrupt-driven sensor reading to ensure zero data loss at high speeds.
                            </li>
                            <li>
                                <strong>Automotive Protocols:</strong> Implemented <strong>CAN Bus (ISO 11898)</strong> communication between modules, reducing wiring harness weight by 30% and increasing signal integrity compared to analog connections.
                            </li>
                            <li>
                                <strong>Legacy Code Modernization:</strong> Refactored legacy codebases from PlatformIO to standardized ESP-IDF, improving maintainability and reducing build times by 40%.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="resume_entry">
                    <div className="entry_header">
                        <div>
                            <h4 className="entry_title">Scientific Initiation (PIBIC - UFPE)</h4>
                            <p className="entry_subtitle">AI Researcher (Computer Vision)</p>
                        </div>
                        <span className="entry_date">2022 - 2023</span>
                    </div>
                    <div className="entry_content">
                        <ul>
                            <li>
                                Conducted research on <strong>Convolutional Neural Networks (CNNs)</strong> and Quantum Machine Learning models.
                            </li>
                            <li>
                                Developed Python scripts (TensorFlow/PyTorch) for image classification and analysis, achieving a "Best Research" award for technical depth and documentation.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SKILLS - FORMATO DE FICHA TÉCNICA */}
            <section className="resume_section">
                <h3 className="section_title">Technical Proficiency</h3>
                <div className="skills_grid">
                    <div className="skill_category">
                        <h3>Embedded Systems</h3>
                        <div className="skill_list">
                            <span className="skill_chip">C / C++</span>
                            <span className="skill_chip">ESP32 (ESP-IDF)</span>
                            <span className="skill_chip">Arduino</span>
                            <span className="skill_chip">CAN Bus</span>
                            <span className="skill_chip">UART / SPI / I2C</span>
                            <span className="skill_chip">FreeRTOS</span>
                        </div>
                    </div>

                    <div className="skill_category">
                        <h3>Software & Data</h3>
                        <div className="skill_list">
                            <span className="skill_chip">Python (Advanced)</span>
                            <span className="skill_chip">React / TypeScript</span>
                            <span className="skill_chip">MQTT / IoT</span>
                            <span className="skill_chip">Linux / Bash</span>
                            <span className="skill_chip">Docker</span>
                            <span className="skill_chip">Git / GitHub</span>
                        </div>
                    </div>

                    <div className="skill_category">
                        <h3>Languages & Tools</h3>
                        <div className="skill_list">
                            <span className="skill_chip">Portuguese (Native)</span>
                            <span className="skill_chip">English (Advanced/Fluent)</span>
                            <span className="skill_chip">VS Code</span>
                            <span className="skill_chip">PlatformIO</span>
                            <span className="skill_chip">Oscilloscopes</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* AWARDS */}
            <section className="resume_section">
                <h3 className="section_title">Awards & Honors</h3>
                <div className="resume_entry">
                    <div className="entry_header">
                        <h4 className="entry_title">Hackathon Globo Challenge - Winner</h4>
                        <span className="entry_date">2023</span>
                    </div>
                    <div className="entry_content">
                        <p>Developed an AI-powered WhatsApp bot for news verification using NLP, beating 50+ teams.</p>
                    </div>
                </div>
                <div className="resume_entry">
                    <div className="entry_header">
                        <h4 className="entry_title">NASA Space Apps Challenge - Global Nominee</h4>
                        <span className="entry_date">2022</span>
                    </div>
                </div>
            </section>

             {/* EDUCATION */}
             <section className="resume_section">
                <h3 className="section_title">Education</h3>
                <div className="resume_entry">
                    <div className="entry_header">
                        <div>
                            <h4 className="entry_title">Federal University of Pernambuco (UFPE)</h4>
                            <p className="entry_subtitle">B.S. in Electronic Engineering</p>
                        </div>
                        <span className="entry_date">Graduation: Dec 2028</span>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Resume
