import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  AOS.init({
    duration: 1000,
    throttleDelay: 300, 
    offset :200
  });
  function ClassAdd() {
    document.getElementById("skill").classList.add("dropdown-content")
  }
  return (
    <div class="md:flex md:justify-center text-center bg-blue-50 shadow-2xl mx-4 md:mx-32 rounded-lg dark:bg-black dark:text-white dark:border dark:border-white " data-aos="fade-up">
      <div className='md:w-1/3 h-[400px] '>
        <img
          src="/sami.jpeg"
          className="md:my-10 md:mx-1 block rounded-lg" data-aos="fade-right"/>
      </div>
      {/* hight ab add ki */}
      <div className="md:w-2/3 mx-4 text-center mt-8 h-[480px] md:h-[370px]" data-aos="fade-left" >
        <h2 className="font-bold text-2xl">About Me</h2>
        <p>Hi ,I am Sami, a passionate Frontend Developer with expertise in HTML, CSS, JavaScript,Bootstrap and React .
          My proficiency in JavaScript allows me to breathe life into static web pages, adding interactivity and dynamic
          functionalities. Moreover, my expertise in React empowers me to build scalable and maintainable web
          applications, leveraging component-based architecture and state management.</p>
        <div className="md:grid-cols-3 shadow-lg grid grid-cols-2">
          <div className="dropdown">
            <div tabindex="0" className=" m-1 underline decoration-blue-500 cursor-pointer " >Skills </div>
            <ul tabindex="0" className=" menu bg-blue-50 rounded-box z-[1] w-52 p-2 shadow about dark:bg-black dark:text-white" id='skill'>
              <li><span className="text-blue-500  indent-0 "> Web Development </span> <span className="indent-0">Web App
              Development</span></li>
              <li><span className="text-blue-500  indent-0"> UI/UX </span> <span className="indent-0">Designing Web Apps</span></li>
            </ul>
          </div>
          {/* <!-- second copy --> */}
          <div className="dropdown ">
            <div tabindex="0" className=" m-1 underline decoration-blue-500 cursor-pointer second"
            onClick={ClassAdd}
            >Experience </div>
            <ul tabindex="0" className="dropdown-content menu bg-blue-50 rounded-box z-[1] w-52 p-2 shadow secondDropdown dark:bg-black dark:text-white">
              <li><span className="text-blue-500 "> React </span><span className="indent-0"> React Development</span></li>
              <li><span className="text-blue-500"> Front-End </span> <span className="indent-0">HTML ,CSS ,Javascript ,Tailwind CSS</span></li>
            </ul>
          </div>
          {/* <!-- third copy --> */}
          <div className="dropdown hidden md:block">
            <div tabindex="0" className=" m-1 underline decoration-blue-500 cursor-pointer second" onClick={ClassAdd}>Lorem </div>
            <ul tabindex="0" className="dropdown-content menu bg-blue-50 rounded-box z-[1] w-52 p-2 shadow dark:bg-black dark:text-white">
              <li><span className="text-blue-500"> Lorem </span> <span className="indent-0">ispum </span></li>
              <li><span className="text-blue-500"> Lorem </span><span className="indent-0">ispum </span></li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About