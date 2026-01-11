import { useState, useEffect } from 'react'
import './css/Blog.css'
import { Link, useSearchParams } from 'react-router-dom' // Importar useSearchParams
import posts from '../markdown/blog/load_posts'
import CM from '../components/ContentMarkdown/ContentMarkdown' // Importar o renderizador de Markdown

function Blog() { 
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("id"); // Captura o ID da URL (?id=...)
    const [searchTerm, setSearchTerm] = useState("");

    // Scroll para o topo ao abrir ou mudar de post
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [postId]);

    // --- MODO LEITURA (Se houver ID na URL) ---
    if (postId) {
        const post = posts.find(p => p.id.toString() === postId);

        if (!post) {
            return (
                <div className='blog_page' style={{textAlign: 'center', paddingTop: '100px'}}>
                    <h1>LOG ENTRY NOT FOUND</h1>
                    <Link to="/blog" className="secondary_btn">RETURN TO ARCHIVES</Link>
                </div>
            );
        }

        return (
            <div className='blog_page'>
                {/* Cabeçalho do Artigo */}
                <div className="blog_hero" style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="blog_hero_content">
                        <span className="blog_tag">LOG_ID: {post.id} // {post.date}</span>
                        <h1>{post.name}</h1>
                        <Link to="/blog" className="back_home_btn" style={{marginTop: '20px', display: 'inline-block'}}>
                            &lt; Return to Logs
                        </Link>
                    </div>
                </div>

                {/* Conteúdo do Markdown */}
                <div className="blog_container" style={{ maxWidth: '900px' }}>
                    <div className="markdown_content_wrapper" style={{ color: 'var(--text-primary)', textAlign: 'left' }}>
                        <CM content={post.content} />
                    </div>
                    
                    <div className="post_footer_nav" style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                        <Link to="/blog" className="read_more_btn">&lt; Back to Engineering Logs</Link>
                    </div>
                </div>
            </div>
        );
    }

    // --- MODO LISTA (Padrão) ---
    
    // Filtragem Segura
    const filteredPosts = posts.filter(post => {
        const term = searchTerm.toLowerCase();
        const name = post.name ? post.name.toLowerCase() : "";
        const desc = post.desc ? post.desc.toLowerCase() : "";
        return name.includes(term) || desc.includes(term);
    });

    return (
        <div className='blog_page'>
            <header className="blog_hero">
                <div className="blog_hero_content">
                    <span className="blog_tag">KNOWLEDGE BASE</span>
                    <h1>Engineering Logs</h1>
                    <p>
                        Technical documentation, project breakdowns, and insights on embedded systems, 
                        automotive engineering, and software development.
                    </p>
                </div>
            </header>

            <div className="blog_container">
                <div className="search_bar_container">
                    <input 
                        type="text" 
                        placeholder="SEARCH LOGS_ (Ex: ESP32, PID, CAN Bus)" 
                        className="search_input"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="posts_grid">
                    {filteredPosts.map((post) => (
                        <Link to={"/blog?id=" + post.id} className="post_card" key={post.id}>
                            <div className="post_card_header">
                                <span className="post_id">LOG_ID: {post.id}</span>
                                <span className="post_date">{post.date}</span>
                            </div>
                            <h2 className="post_title">{post.name}</h2>
                            <p className="post_desc">
                                {post.desc || "Click to access full technical documentation."}
                            </p>
                            <div className="post_footer">
                                <span className="read_more_btn">Read Documentation &gt;</span>
                            </div>
                        </Link>
                    ))}

                    {filteredPosts.length === 0 && (
                        <div className="no_results">
                            <h3>NO ENTRIES FOUND</h3>
                            <p>Try refining your search parameters.</p>
                        </div>
                    )}
                </div>

                <div className="back_home_container">
                     <Link to="/" className="back_home_btn">&lt; Return to Main Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Blog
