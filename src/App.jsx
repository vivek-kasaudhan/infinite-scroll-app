import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Search from './components/search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/'element ={<Home/>}/>
    <Route path='/search-results' element ={<Search/>}/>
    </Routes>
    </>
  )
}
export default App
