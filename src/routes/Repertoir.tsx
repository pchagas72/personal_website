import './css/Repertoir.css'
import CS from '../components/ContentMarkdown/ContentMarkdown'
import pieces from '../markdown/repertoir/pieces.json'
import { useEffect } from 'react'
import repertoirMd from '../markdown/repertoir/repertoir.md'

function Blog(){

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <CS content={repertoirMd}/>
            <h1 className='pieces_h1'> List of pieces </h1>

            <ul className='pieces_list'>
            {
                pieces.map((piece) => 
                        <li><a href={piece[3]}>{piece[0]} - {piece[1]}</a></li>
                )
            }

            </ul>
            <h1 className='pieces_h1'> <i>Pieces with description:</i> </h1>
            {
                pieces.map((piece) =>
                <section className='piece_section'>
                    <h2 className='name'> {piece[0]} </h2>
                    <h3 className='author'> <i>{piece[1]}</i> </h3>
                    <p className='description'>{piece[2]}</p>
                </section>
            )}
        </>
    )
}

export default Blog
