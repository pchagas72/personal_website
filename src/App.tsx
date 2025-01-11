import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'
import Bookshelf from './routes/Bookshelf'
import Repertoir from './routes/Repertoir'
import Notebook from './routes/Notebook'
import Background from './routes/AboutMe'
import Resume from './routes/Resume'


function App() {

    const handleUpdate = (x: number, y: number) => {
        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
    }

    const handleMouseMove = (e: MouseEvent) => {
        handleUpdate(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        handleUpdate(e.touches[0].clientX, e.touches[0].clientY);
    };

    const registerEventHandlers = () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
    }

    registerEventHandlers()

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/bookshelf" element={<Bookshelf/>}/>
            <Route path="/repertoir" element={<Repertoir/>}/>
            <Route path="/notebook" element={<Notebook/>}/>
            <Route path="/background" element={<Background/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
  )
}

export default App
