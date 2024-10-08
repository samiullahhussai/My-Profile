import React from 'react'
import NaveBar from '../components/NaveBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
function Home() {
  return (
    <div>
        <div>
         <NaveBar />
         <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
    </div>
    </div>
  )
}

export default Home