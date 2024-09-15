import './css/Home.css'
import CM from '../components/ContentMarkdown/ContentMarkdown'
import footerMd from '../markdown/footer.md'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'

function App() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='page_body'>
            <AboutMe />
            <Projects />
            <div className='insideLinks'>
                <h1> Still want to know more about me?</h1>
                <Link className='link_button' to={"/blog"}>My Blog</Link>
                <Link className='link_button' to={"/bookshelf"}>My Bookshelf</Link>
                <Link className='link_button' to={"/repertoir"}>My Repertoire</Link>
                <Link className='link_button' to={"/notebook"}>My Notebook (new)</Link>
            </div>
            <CM content={footerMd} />
        </div>
    )
}

export default App
