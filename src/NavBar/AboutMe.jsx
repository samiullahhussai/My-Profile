import React from 'react'
import NaveBar from '../components/NaveBar'
import About from '../components/About'
import Contact from '../components/Contact'
function AboutMe() {
  return (
    <div>
<NaveBar/>
<div className='mt-[68px]'>
<About/>
</div>
<div className='my-14'>
<Contact/>
</div>
    </div>
  )
}

export default AboutMe