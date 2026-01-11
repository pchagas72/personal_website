import CS from '../components/ContentMarkdown/ContentMarkdown'
import { useEffect, useState } from 'react'
import notebookMd from '../markdown/Notebook/Notebook.md'
import './css/Notebook.css'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import 'firebase/firestore'
import 'firebase/auth';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firestore } from '../firebase';
import { auth } from '../firebase';
import Header from '../components/Header/Header'

function Notebook(){

    const [notes,setNotes] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(firestore, "notes"), (snapshot) => 
                // @ts-ignore
                setNotes(snapshot.docs.map((doc) => doc.data()))
            ), []);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    function sendToFirebase(name:string, content:string){
        setDoc(doc(firestore, "notes", name), {
            Name: name,
            Content: content
        })
    }

    function deleteFromFirebase(name:string){
            if (user){
                if (user == 'pedrochagas.sh@gmail.com'){
                    deleteDoc(doc(firestore, 'notes', name))
                }
                else{
                    alert("Parece que você não tem permissão para deletar notas!")
                }
            } else{
                alert("Faça login primeiro.")
            }
        }


    const [input, setInput] = useState(
        `# Type your markdown code

## How to use this tool:

- Write your markdown in the left text area
- Save it by clicking in the "save" button below
- Old files will appear just below the save button

Be aware that this is the first version of this tool!

## Enjoy!`
    )

    const [inputTitle, setInputTitle] = useState("")

    //@ts-ignore
    const [user, setUser] = useState('')

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((data)=>
            //@ts-ignore
            setUser(data.user.email)
        );
    }

    return (
        <>
            <Header/>
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
                <div className='sendToFirebaseDiv'>
                    <p> Note title: </p>
                    <textarea className='titleText' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    { user == "pedrochagas.sh@gmail.com"?
                        <button onClick={() => sendToFirebase(inputTitle, input)}>Save on database</button>
                        : user? <p>Looks like you don't have permission to upload items to the database...</p>:<button onClick={handleGoogle}>Sign in to save on database</button>
                    }
                </div>
                <h2 className='titleH2'> Old notes </h2>
                <ul className='oldNotes'>
                    {
                        notes.map((note) =>
                            // @ts-ignore
                            <li><a onClick={()=>{setInput(note.Content); setInputTitle(note.title)}} className='prettyLink'>{note.Name}</a>
                                { user?
                            <a className='prettyLink' onClick={
                                    // @ts-ignore
                                    () => deleteFromFirebase(note.Name)}
                                    > - Delete</a>                                    
                                : <a></a>}
                            </li> 
                        )

                    }
                </ul>
            </div>
        </>
    )
}

export default Notebook
