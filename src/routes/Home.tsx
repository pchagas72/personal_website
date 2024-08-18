import './css/Home.css'
import CM from '../components/ContentMarkdown/ContentMarkdown'
import introMd from '../markdown/introduction.md'
import projectsMd from '../markdown/projects.md'
import footerMd from '../markdown/footer.md'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function App() {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);


  return (
    <>
            <CM content={introMd}/>
            <CM content={projectsMd}/>
            <Link to={"/blog"}><h1 className='link_button'>My Blog</h1></Link>
            <Link to={"/bookshelf"}><h1 className='link_button'>My Bookshelf</h1></Link>
            <CM content={footerMd}/>
   </>
  )
}

export default App
