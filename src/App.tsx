import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Blog from './routes/Blog'

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
  )
}

export default App
