import CS from '../components/ContentMarkdown/ContentMarkdown'
import { useEffect, useState } from 'react'
import notebookMd from '../markdown/Notebook/Notebook.md'
import './css/Notebook.css'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDuY4wlWQJtfV93_scQPetZxs3_BbBS5Jc",
  authDomain: "pchagas-sh.firebaseapp.com",
  projectId: "pchagas-sh",
  storageBucket: "pchagas-sh.appspot.com",
  messagingSenderId: "1083235124608",
  appId: "1:1083235124608:web:44a505a1781880d9492d65",
  measurementId: "G-Z5DNY9XK72"
})

const firestore = getFirestore(app)

function Notebook(){

    const [notes,setNotes] = useState([]);
    console.log(notes)
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
                <div className='sendToFirebaseDiv'>
                    <p> Note title: </p>
                    <textarea className='titleText' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
                    <button onClick={() => sendToFirebase(inputTitle, input)}>Save on database</button>
                </div>
                <h2 className='titleH2'> Old notes </h2>
                <ul className='oldNotes'>
                    {
                        notes.map((note) =>
                            // @ts-ignore
                            <li onClick={()=>{setInput(note.Content); setInputTitle(note.title)}}><a className='prettyLink'>{note.Name}</a></li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Notebook
