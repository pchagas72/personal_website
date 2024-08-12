import './css/Blog.css'
import CS from '../components/ContentMarkdown/ContentMarkdown'
import blogMd from '../markdown/blog/blog.md'
import posts from '../markdown/blog/load_posts'
import { useEffect, useState } from 'react'


function Blog(){


    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const recent_post = posts[0][0]
    const [displayPost, setDisplayPost] = useState(recent_post)
    return (
        <>
            <CS content={blogMd}/>            
            <h1 className='recent_post_h1'> Most recent post: </h1>
            <CS content={displayPost}/>            
            <h1 className='recent_post_h1'> Posts: </h1>
            <ul className='older_posts_ul'>
                {posts.map((post) => (
                    <li onClick={() => setDisplayPost(post[0])}
                    > {post[1]} - {post[2]} </li>
                ))}
            </ul>
        </>
    )
}

export default Blog
