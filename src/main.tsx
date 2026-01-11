import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <div className='website_border'>
            { /* <Header/> */ }
                <App />
            </div>
        </StrictMode>
    </BrowserRouter>
)
