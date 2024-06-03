import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HomeCards />
    </div>
  )
}

export default App