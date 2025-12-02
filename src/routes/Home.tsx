import './css/Home.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'

function Home() { 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page_body'>
            <AboutMe />
            <Projects />
            
            <div className='insideLinks'>
                <h1>Further Documentation</h1>
                
                <Link className='link_button' to={"/resume"}>Resume / CV</Link>

                <Link className='link_button' to={"/notebook"}>Engineering Notebook</Link>
                <Link className='link_button' to={"/blog"}>Technical Blog</Link>
                
                <Link className='link_button' to={"/bookshelf"}>Reading List</Link>
            </div>
        </div>
    )
}

export default Home
