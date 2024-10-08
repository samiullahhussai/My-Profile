import React from 'react'
import NaveBar from '../components/NaveBar'
import Contact from '../components/Contact'
function Contack() {
  return (
    <div className='dark:bg-black dark:text-white'>

        <NaveBar/>
        <div className='mt-[68px]'>
        <Contact/>
        </div>
    </div>
  )
}

export default Contack