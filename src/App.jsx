import { useState } from 'react'
import './App.css';
import { Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Route path='/' element ={<Home/>}/>
        <Route path='/' element ={<Vegan/>}/>
        <Route path='/' element ={<Vegetarian/>}/>
        <Route path='/' element ={<Smoothies/>}/>
      </Router>
    </>
  )
}

export default App
