export default function ProjectSection(props: any) {
    return (
        <section className='Project'>
            <p className='project_numbering'> Project {props.projectNumber} </p>
            <h2> {props.projectTitle} </h2>
            <p> {props.projectDesc} </p>
            <div>
                <a className='prettyLink' href={props.projectLink}>View it on github!</a>
            </div>
        </section>
    )
}
