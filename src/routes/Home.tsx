import './css/Home.css'
import CM from '../components/ContentMarkdown/ContentMarkdown'
import footerMd from '../markdown/footer.md'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'

function App() {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);


  return (
    <div className='page_body'>
            <AboutMe/>
            <Projects/>
            <Link to={"/blog"}><h1 className='link_button'>My Blog</h1></Link>
            <Link to={"/bookshelf"}><h1 className='link_button'>My Bookshelf</h1></Link>
            <Link to={"/repertoir"}><h1 className='link_button'>My Repertoire</h1></Link>
            <CM content={footerMd}/>
   </div>
  )
}

export default App
