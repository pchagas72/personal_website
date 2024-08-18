import './css/Bookshelf.css'
import CS from '../components/ContentMarkdown/ContentMarkdown'
import books from '../markdown/bookshelf/books.json'
import { useEffect } from 'react'
import bookshelfMd from '../markdown/bookshelf/bookshelf.md'

function Blog(){

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CS content={bookshelfMd}/>
            <h1 className='bookshelf_h1'> <i>Books:</i> </h1>
            {
                books.map((book) =>
                <section className='book_section'>
                    <CS content={book}/>
                </section>
            )}
        </>
    )
}

export default Blog
