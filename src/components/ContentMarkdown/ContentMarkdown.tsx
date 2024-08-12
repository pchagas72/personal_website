import './CM.css';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';


function CM(props: any){
    return(
        <div className="header">
            <div className="intro_text">
                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {props.content}
                </Markdown>
            </div>
        </div>
    )
}

export default CM
