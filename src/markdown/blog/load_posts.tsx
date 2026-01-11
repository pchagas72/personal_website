import postsJson from './posts.json'

export interface BlogPost {
    id: number;
    name: string;
    date: string;
    content: string;
    desc: string;
}

// Tipagem segura para o JSON bruto
type RawPost = [string, string, string];

const posts_array: BlogPost[] = (postsJson as RawPost[]).map((post, index) => {
    const content = post[0] || "";
    const title = post[1] ? post[1].trim() : "Untitled Log";
    const date = post[2] ? post[2].trim() : "Unknown Date";

    // Gera preview limpo
    let plainText = content
        .replace(/<[^>]*>/g, '')         
        .replace(/!\[.*?\]\(.*?\)/g, '') 
        .replace(/#{1,6}\s/g, '')        
        .replace(/(\r\n|\n|\r)/gm, " ")  
        .replace(/\s+/g, ' ')            
        .trim();

    const desc = plainText.length > 160 ? plainText.substring(0, 160) + "..." : plainText;

    return {
        id: index,
        name: title,
        date: date,
        content: content,
        desc: desc
    }
});

export default posts_array.reverse()
