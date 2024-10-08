import { useState } from 'react'
import NaveBar from './components/NaveBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
 
  return (
    <>
    <NaveBar/>
     <Hero/>
    <About/>
   <Services/>
   <Work/>
   <Contact/>
    </>
  )
}

export default App
