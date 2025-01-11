import './css/Resume.css'
import team_pic from '../assets/team.png'
import team_now_pic from '../assets/team_now.png'
import { useEffect } from 'react'

function Background(){

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1>Past experiences until now</h1>

            <div className='resume_entry'>
                <h2 className='resume_title'>Military School, where I first begin to pursue my dreams</h2>

                <section>
                    <div>
                        <h2 className='section_title'>Robotics club - From student to teacher</h2>
                        <p>At the military school I excelled a lot in robotics, winning medals and recognition for the school, which the institution I studied never had.</p>
                        <p>  But of course I wasn't alone, my team was made up of three members and a teacher. I was both the team captain and responsible for programming the robots, and we even won two medals and two mentions in national competitions!</p>

                        <img src={team_pic}/>

                        <h2> But what now? </h2>

                        <p> Now I'm the new teacher for the robotics club! I give lessons and 
                        help the new members so the school keeps on doing great in robotics. The pleasure of travelling to do what you love is something I want 
                        the new generations of students do have.</p>

                        <img src={team_now_pic}/>

                    </div>
                </section>
                <section>
                    <div>
                        <h2 className='section_title'>Theater and acting. On the stages of the marvelous city</h2>
                        <p> For much of my early life, I was a shy and introverted child. Growing up in a small family with few friends, I found socializing to be a challenge. </p>
                        <p> However, everything changed when I discovered the world of theater. I had the incredible opportunity to study acting at one of the most renowned institutions in Recife, PE, which played a pivotal role in boosting my social confidence and interpersonal skills. This journey even led to a milestone moment: performing a theater production at the prestigious "Cidade das Artes" in Rio de Janeiro—an iconic venue where many of my idols, like Roger Waters, have graced the stage.</p>

                        <h2> What I learned with these experiences: </h2>

                        <p> I used to be so focused on technology and all things "nerdy" that I never fully realized my natural gift for the arts. However, diving into the world of performance and acting revealed something surprising: I discovered a deep, expressive side of myself with so much to share with the world. Along the way, I developed strong public speaking skills and learned to manage my nerves, gaining newfound confidence in the process. </p>

                    </div>
                </section>
                <section>
                    <div>
                        <h2 className='section_title'>First research program, convolutional machine learning</h2>
                        <p> In 2019, I was given one of the greatest opportunities of my life: the chance to join a machine learning research project at the Federal University of Pernambuco.</p>

                        <p>As a 15-year-old student, I was introduced to complex topics in mathematics and computing, such as linear algebra, calculus and AI modelling and programming. The research was a success, and my teacher and teammates were impressed by how quickly I grasped these advanced concepts.</p>

                        <p>I dedicated myself to the programming and computing aspects, and the results spoke for themselves—I won the award for Best Young Researcher in the 2019-2021 program!</p>

                        <p>This recognition opened the door to an even more exciting opportunity: joining a cutting-edge research project in the field of quantum machine learning.</p>

                        <h2> What I learned with this research? </h2>

                        <p>This experience taught me the true meaning of effective learning. With limited time to grasp such advanced topics while maintaining good grades in school, I had to develop my most valuable skill: the ability to learn quickly and efficiently, on-demand.</p>

                    </div>
                </section>
                <section>
                    <div>
                        <h2 className='section_title'>Second research program, quantum machine learning</h2>
                        <p>During my second research program, I faced significant challenges at the start. This time, I had to dive into the complexities of quantum mechanics and learn how to apply it to develop quantum machine learning models.</p>

                        <p>The research aimed to implement an Italian quantum machine learning model created by Stefano Mangini, a prominent researcher in the field. This was no easy task.</p>

                        <p>With just two years to understand and master these advanced concepts, I pushed myself to my limits. It became the most intense period of studying in my life, and through sheer determination, I exceeded my own expectations and became the best version of myself.</p>

                        <p>The research was a major success—we successfully implemented the ML model and even secured third place in the prestigious IBM Quantum Challenge!</p>

                        <h2> The results: </h2>

                        <p>Although there was no official money prize this time due to the large 2023 education sector strike, I was honored to receive first place for the best high school research program for the second time in a row, in collaboration with the Federal University of Pernambuco. From what I know, I was the only one to achieve this distinction!</p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2 className='section_title'>End of my high school studies</h2>
                        <p> In 2024, I completed my studies! My journey through this educational chapter was filled with remarkable achievements—everything from performing on Brazil's most prestigious stage to winning national robotics competitions, and even leading successful, complex research projects. </p>

                        <p> As I neared the end of high school, I applied to the three universities I admired most: the Pernambuco Conservatory of Music, the Catholic University of Pernambuco, and the Federal University of Pernambuco. To my delight, I was accepted into all of them!</p>

                        <p> Now, I’m pursuing Electronics Engineering at UFPE, which is known as the most challenging engineering program at the institution. It’s also the only one that sends students directly to PhD programs at prestigious universities like Harvard and MIT. </p>

                        <p> In addition, I’m a classical guitarist at the Pernambuco Conservatory of Music. In my first semester, I was honored to be named the top student in my class, and I even had the privilege of performing my first concert.</p>

                        <p> And to top it all off, I’m also studying Internet Systems at the Catholic University of Pernambuco! </p>
                    </div>
                </section>
            </div>

            <div className='resume_entry'>
                <h2 className='resume_title'>First semester of college</h2>

                <section>
                    <div>
                        <h2 className='section_title'>NASA Space Apps</h2>
                        <p>In my first semester of college, I applied for the prestigious NASA Space Apps Hackathon, an international event that attracts top talent from around the world.</p>

                        <p>I wasn’t expecting to be accepted, so you can imagine my surprise when I was!</p>

                        <p>The experience was truly transformative. I worked overnight with a team of people I had never met before, collaborating with brilliant individuals. I had the chance to connect with some key figures in the tech industry and even appeared on national TV for the first time!</p>

                        <p>While I didn’t win any prizes, the experience itself was invaluable. It taught me that I thrive under pressure, and I’m excited to return in 2025, stronger and more prepared than ever!</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className='section_title'>Rec'n Play, and winning my first Hackathon!</h2>
                        <p>The Rec'n Play event was an incredibly fun and educational experience held in my hometown, focusing on technology and networking.</p>

                        <p>The highlight for me was participating in "Desafio Globo," a hackathon hosted by Globo, Brazil's largest TV network—one I grew up watching!</p>

                        <p>This event was one of the most heartwarming experiences of my life. I was working on something I’m truly passionate about, in a place that brought back cherished memories.</p>

                        <p>The challenge itself was to create a system to analyze and predict reports submitted to the news department of the channel. I leveraged all my skills to develop an AI tool that earned me the honor of securing first place!</p>

                        <p>It was my second hackathon ever and the first one I won. This experience was truly life-changing, and I’m excited about the possibility of further developing my skills within Globo’s organization.</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className='section_title'>Robotics judge</h2>
                        <p>During high school, I had the honor of winning multiple robotics competitions. Now, I am privileged to give back to the community as a judge at the Brasília Robotics Olympiad!</p>

                        <p>I first served as a judge in the 2024 competition and plan to continue in 2025 and beyond. It was an incredibly rewarding experience that challenged me to refine my assertiveness and decision-making skills. For instance, handling situations like awarding zero points to a disappointed team coach was not easy, but I approached it with professionalism and fairness.</p>
                    </div>
                </section>
            </div>

            <div className='resume_entry'>
                <h2 className='resume_title'>UFPE - Engineering College (Now!)</h2>

                <section>
                    <div>
                        <h2 className='section_title'>Research Opportunities</h2>
                        <p>After tackling my first exams (which presented some challenges), I’m thrilled to explore new research opportunities on the horizon!</p>
                        <p>Here are a few I was offered and am still considering:</p>
                        <ul>
                            <li>Advancing my research in quantum machine learning: Diving deeper into this cutting-edge field and exploring its potential applications. </li>
                            <li>Combining music and engineering: Pursuing a project that bridges my two passions by creating high-quality, affordable musical instruments.</li>
                        </ul>
                        <p>I’m taking some time to carefully evaluate these opportunities, and I’ll update this list soon with the path I decide to follow.</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className='section_title'>Guitar Lessons</h2>
                        <p>After my first concert, some people recognized me and reached out for guitar lessons! Now, every Sunday morning, I have the pleasure of teaching guitar to both teachers and students from the UFPE Engineering Department.</p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Background
