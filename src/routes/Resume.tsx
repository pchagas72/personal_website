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

            <div className="resume_entry">
                <h2 className="resume_title">Profile</h2>
                <section>
                    <p>
                        Passionate about technology, music, and innovation, I’m currently pursuing Electronic Engineering at UFPE while expanding my expertise in AI, software development, and classical music. I thrive in challenging environments and am eager to contribute to impactful projects.
                    </p>
                    <p>
                        I'm a strong team worker, with a gift for leadership and always working for the best of my team and project.
                        I'm also a natural born innovator! I'll always search for the best new ways to develop, interact and produce.
                    </p>
                    <p> I want to <a className="prettyLink">make a real difference</a> on <a className="prettyLink"> in real people's lives.</a></p>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">Skills</h2>
                <section>
                    <h2 className="section_title">Soft skills</h2>
                    <ul>
                        <li> Great team worker </li>
                        <li> Agile learner, Scrum Master </li>
                        <li> Leader with passion for diffcult projects </li>
                        <li> Learning on-demand </li>
                        <li> Public speaker with assertive dialogue courses </li>
                        <li> Passionate teacher </li>
                        <li> Researcher and innovator </li>
                        <li> Delegate on MUN simulations </li>

                    </ul>
                    <h2 className="section_title">Programming languages</h2>
                    <ul>
                        <li> Systems Programming with C/C++ and Rust </li>
                        <li> AI developer, PyTorch, TensorFlow and low-level development</li>
                        <li> Scripting with Go, Python and Lua </li>
                        <li> Web development with JS/TS</li>
                        <li> Linux distro maintainer, and linux server admin </li>
                        <li> Game and physics engine programming </li>
                    </ul>
                    <h2 className="section_title">Frameworks</h2>
                    <ul>
                        <li>Web development with React and Django </li>
                        <li>Internal servers with ngrok and Linux internal networks</li>
                    </ul>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">Experience</h2>
                <section>
                    <div>
                        <h2 className="section_title">Robotics Teacher - Military School of Recife / nonprofit organizations</h2>
                        <p>
                            I'm a robotics coach and teacher for the Military School of Recife. I thrive for the success of my team.
                        </p>
                        <p>
                            I also give online lessons for free for the new teams under the national system of military schools.
                        </p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 className="section_title">Robotics Judge - Brazil National Robotics Olympiad</h2>
                        <p>
                            Judged national robotics competitions, refining assertiveness and technical evaluation skills while inspiring young innovators.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 className="section_title">Hackathon Winner - Rec'n Play / Globo Challange</h2>
                        <p>
                            Developed an AI tool to automate news validation for Globo, securing 1st place in the challenge. Leveraged natural language processing and TensorFlow to streamline workflows.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 className="section_title">Guitar Teacher - Online english lessons / Recife-PE</h2>
                        <p>
                            I provide guitar lessons in both English and Portuguese for berginners.
                        </p>
                        <p>
                            Starting in 2024, I gave guitar lessons for free to young people in my neighborhood, aiming to increase the transforming power of music. Now I'm looking for a church or nonprofit organization to start a new project.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 className="section_title">Young Entrepeneur</h2>
                        <p>
                            I run a side business in which me and a group of friends develop websites and help college students with programming subjects and projects.
                        </p>
                    </div>
                </section>
            <section>
                    <div>
                        <h2 className="section_title">Delegate in MUN simulation / PEMUN/CRIJN</h2>
                        <p>
                            I take part in MUN simulations as speech advisor, and tech lead.
                        </p>
                    </div>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">Education</h2>
                <section>
                    <ul>
                        <li><strong>Federal University of Pernambuco (UFPE):</strong> Electronic Engineering (2024 - Present)</li>
                        <li><strong>Catholic University of Pernambuco (UNICAP):</strong> Internet Systems (2024 - Present)</li>
                        <li><strong>Pernambuco Conservatory of Music:</strong> Classical Guitar (2024 - Present)</li>
                    </ul>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">Achievements</h2>
                <section>
                    <ul>
                        <li>Best High School Researcher (Twice) - Federal University of Pernambuco (2019-2023)</li>
                        <li>3rd place - IBM Quantum Challenge (2023)</li>
                        <li>1st place - Globo Hackathon Challenge, Rec'n Play (2024)</li>
                        <li>Total of three gold medals in national robotics competitions as student and as teacher</li>
                        <li>Best Innovator Prize at the National Robotics Olympiad</li>
                        <li>Best programmer and robotics club president of the military school system of Brazil</li>
                        <li>First place at FEBRACE 2021</li>
                        <li>Second place at MOSTRATEC 2022</li>
                    </ul>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">What am I currently doing:</h2>
                <section>
                    <ul>
                        <li> Studying for CCNA and Amazon certifications. </li>
                        <li> Searching for my first internship. </li>
                        <li> Looking for a nonprofit organization or church to give guitar or robotics lessons. </li>
                    </ul>
                </section>
            </div>

            <div className="resume_entry">
                <h2 className="resume_title">Contact</h2>
                <section>
                    <ul>
                        <li><strong>Email: </strong><a className="prettyLink">pedro.pcsilva@ufpe.br</a></li>
                        <li><strong>Linkedin: </strong> <a href='https://www.linkedin.com/in/pedro-chagas-44a4112aa' className='prettyLink'>Pedro Chagas</a></li>
                        <li><strong>GitHub: </strong> <a href='https://github.com/pchagas72' className='prettyLink'>pchagas72</a></li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Resume
