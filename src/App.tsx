import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'
import Bookshelf from './routes/Bookshelf'
import Repertoir from './routes/Repertoir'

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/bookshelf" element={<Bookshelf/>}/>
            <Route path="/repertoir" element={<Repertoir/>}/>
        </Routes>
  )
}

export default App
