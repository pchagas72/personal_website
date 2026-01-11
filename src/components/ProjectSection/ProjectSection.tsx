import '../Projects/Projects.css' // Importando o CSS global de projetos para usar as classes novas

export default function ProjectSection(props: any) {
    // Transforma a string "Python, React, C++" em um array para renderizar chips
    const techStack = props.tech ? props.tech.split(',').map((t: string) => t.trim()) : [];

    return (
        <section className='project_card'>
            <div className='project_header'>
                <span className='project_id'>PRJ-{props.projectNumber}</span>
                <div className='project_status_dot'></div>
            </div>
            
            <h2 className='project_title'>{props.projectTitle}</h2>
            
            <p className='project_desc'> {props.projectDesc} </p>
            
            <div className='project_tech_container'>
                {techStack.map((tech: string, index: number) => (
                    <span key={index} className='tech_chip'>{tech}</span>
                ))}
            </div>

            <div className='project_footer'>
                <a className='project_link_btn' href={props.projectLink} target="_blank" rel="noreferrer">
                    View Source Code
                </a>
            </div>
        </section>
    )
}
