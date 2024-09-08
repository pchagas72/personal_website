import CS from '../components/ContentMarkdown/ContentMarkdown'
import { useEffect, useState } from 'react'
import notebookMd from '../markdown/Notebook/Notebook.md'
import './css/Notebook.css'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

function Blog(){

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const [input, setInput] = useState(`# Type your markdown code`)

    return (
        <>
            <CS content={notebookMd}/>
            <div className='noteTakingApp'> 
                <div className='markdownEditor'>
                    <textarea value={input} onChange={
                        (e) => setInput(e.target.value)
                    }>
                    </textarea>
                    <div className='outputSection'>
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {input}
                        </Markdown>
                    </div>
                </div>
                <button>Save on database</button>
                <ul>
                    <li>Previous Note</li>
                    <li>Previous Note</li>
                    <li>Previous Note</li>
                    <li>Previous Note</li>
                </ul>
            </div>
        </>
    )
}

export default Blog
