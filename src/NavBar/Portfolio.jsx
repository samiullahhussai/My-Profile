import React from 'react'
import NaveBar from '../components/NaveBar'
import Work from '../components/Work'
import Contact from '../components/Contact'
function Portfolio() {
  return (
    <div>
        <NaveBar/>
        <div className='mt-16'>
        <Work />
        </div>
        <Contact />
    </div>
  )
}

export default Portfolio