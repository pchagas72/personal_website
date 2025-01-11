import './css/Bookshelf.css'
import { useEffect } from 'react'

function Blog(){

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1> Coming soon! </h1>
        </>
    )
}

export default Blog
