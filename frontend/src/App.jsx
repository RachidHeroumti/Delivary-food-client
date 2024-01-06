import { useState } from 'react'
import NavBar from './compoanent/NavBar'
import Home from './compoanent/Home'
import HeadLineCard from './compoanent/HeadLineCard'
import Food from './compoanent/Food'
import Categories from './compoanent/Categories'


function App() {
  return (
    <div> 
      <NavBar/>
      <Home/>
      <HeadLineCard/>
      <Food/>
      <Categories/>
    </div>
  )
}

export default App
