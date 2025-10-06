import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Vegan from './pages/Vegan';
import Vegetarian from './pages/Vegetarian';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/vegan' element ={<Vegan/>}/>
        <Route path='/vegetarian' element ={<Vegetarian/>}/>
      </Routes>
    </>
  )
}

export default App
