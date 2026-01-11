import './CM.css';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface CMProps {
    content: string;
}

function CM({ content }: CMProps){
    return(
        <div className="markdown_container">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {content}
            </Markdown>
        </div>
    )
}

export default CM
