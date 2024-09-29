
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
     <BrowserRouter>
     <App />
  </BrowserRouter>
  </SearchContextProvider>
  
    
  
)
