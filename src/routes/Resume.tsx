import { useEffect } from 'react'
import './css/Resume.css'

function Resume(){

    useEffect(() => {
         //Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1>Resume</h1>

            <div class="resume_entry">
                <h2 class="resume_title">Profile</h2>
                <section>
                    <p>
                        Passionate about technology, music, and innovation, I’m currently pursuing Electronic Engineering at UFPE while expanding my expertise in AI, software development, and classical music. I thrive in challenging environments and am eager to contribute to impactful projects.
                    </p>
                    <p>
                        I'm a strong team worker, with a gift for leadership and always working for the best of my team and project.
                    </p>
                </section>
            </div>

            <div class="resume_entry">
                <h2 class="resume_title">Skills</h2>
                <section>
                    <h2 class="section_title">Soft skills</h2>
                    <ul>
                        <li> Great team worker </li>
                        <li> Leader with passion for diffcult projects </li>
                        <li> Learning on-demand </li>
                        <li> Public speaker with assertive dialogue courses </li>
                        <li> Passionate teacher </li>

                    </ul>
                    <h2 class="section_title">Programming languages</h2>
                    <ul>
                        <li> Systems Programming with C/C++ and Rust </li>
                        <li> AI developer, pytorch, TensorFlow and low-level</li>
                        <li> Scripting with GoLang, Python and Lua </li>
                        <li> Web development with JS/TS</li>
                        <li> Linux distro maintainer, and linux server admin </li>
                        <li> Game and physiscs engines programming </li>
                    </ul>
                    <h2 class="section_title">Frameworks</h2>
                    <ul>
                        <li>Web development with React and Django </li>
                        <li>Internal servers with ngrok and linux internal networks</li>
                    </ul>
                </section>
            </div>

            <div class="resume_entry">
                <h2 class="resume_title">Experience</h2>
                <section>
                    <div>
                        <h2 class="section_title">Robotics Teacher - Military School of Recife</h2>
                        <p>
                            I'm a robotics coach and teacher for the Military School of Recife. I thrive for the success of my team.
                        </p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 class="section_title">Robotics Judge - Brazil National Robotics Olympiad</h2>
                        <p>
                            Judged national robotics competitions, refining assertiveness and technical evaluation skills while inspiring young innovators.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 class="section_title">Hackathon Winner - Rec'n Play / Globo Challange</h2>
                        <p>
                            Developed an AI tool to automate news validation for Globo, securing 1st place in the challenge. Leveraged natural language processing and TensorFlow to streamline workflows.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 class="section_title">Guitar Teacher - Online english lessons / Recife-PE</h2>
                        <p>
                            I give guitar lessons both in english and portuguese for guitar starters.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 class="section_title">Young Entrepeneur</h2>
                        <p>
                            I have a sidekick business in which me and a group of friends develop websites and help college students with programming subjects and projects.
                        </p>
                    </div>
                </section>
            </div>

            <div class="resume_entry">
                <h2 class="resume_title">Education</h2>
                <section>
                    <ul>
                        <li><strong>Federal University of Pernambuco (UFPE):</strong> Electronic Engineering (2024 - Present)</li>
                        <li><strong>Catholic University of Pernambuco (UNICAP):</strong> Internet Systems (2024 - Present)</li>
                        <li><strong>Pernambuco Conservatory of Music:</strong> Classical Guitar (2024 - Present)</li>
                    </ul>
                </section>
            </div>

            <div class="resume_entry">
                <h2 class="resume_title">Achievements</h2>
                <section>
                    <ul>
                        <li>Best High School Researcher (Twice) - Federal University of Pernambuco (2019-2023)</li>
                        <li>3rd place - IBM Quantum Challenge (2023)</li>
                        <li>1st place - Globo Hackathon Challenge, Rec'n Play (2024)</li>
                        <li>Total of three gold medals in national robotics competitions as student and as teacher</li>
                    </ul>
                </section>
            </div>

            <div class="resume_entry">
                <h2 class="resume_title">Contact</h2>
                <section>
                    <ul>
                        <li><strong>Email: </strong><a className="prettyLink">pedrochagas.sh@gmail.com</a></li>
                        <li><strong>Linkedin: </strong> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                        <li><strong>GitHub: </strong> <a href='https://github.com/pchagas72' className='prettyLink'>pchagas72</a></li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Resume
