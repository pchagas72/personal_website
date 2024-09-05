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
        <Link to={"/blog"}><h1 className='link_button'>My Blog</h1></Link>
        <Link to={"/bookshelf"}><h1 className='link_button'>My Bookshelf</h1></Link>
        <Link to={"/repertoir"}><h1 className='link_button'>My Repertoire</h1></Link>
      </div>
      <CM content={footerMd} />
    </div>
  )
}

export default App
