import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'
import Bookshelf from './routes/Bookshelf'

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/bookshelf" element={<Bookshelf/>}/>
        </Routes>
  )
}

export default App
