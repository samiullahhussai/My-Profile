import React from 'react'

function Hero() {
  return (
    <div>
      <div className="header  w-full h-screen  rounded-lg" id="content">
        <div className="flex justify-center items-center text-center h-screen">
          <div className="w-full md:w-1/2  ">
            <h1 className="text-5xl">Welcome to Our Website</h1>
            <p className="text-5xl">Full Stack Developer</p>
            <h1 className="font-bold text-5xl">Hi ,I am <span className="text-pink-500 dark:text-white"> Sami</span> </h1>
            <h1 className="font-bold text-5xl">A React Developer </h1>
          </div>
          <div className="w-0 md:w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero