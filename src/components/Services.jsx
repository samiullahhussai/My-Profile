import React from 'react'
import { FaCrop } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
  AOS.init({
    duration: 1000,
    throttleDelay: 300, 
    offset :200
  });
  return (
    <div className='overflow-hidden my-6 md:my-0' data-aos="fade-up">
      <div
        className="text-center h-16 w-screen text-4xl font-bolder bg-clip-text flex justify-center items-center font-bold my-5">
        <p className=" text-blue-500">My Services</p>
      </div>
      <div className="md:grid md:grid-cols-3  mx-12 space-y-7 md:space-y-0 mb-10" >

        <div className="card w-80 h-[350px] shadow-2xl bg-blue-50 dark:bg-black dark:text-white dark:border dark:border-white" data-aos="fade-right">
          <figure className='mt-4'>
            <FaCrop />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-blue-500">React Development</h2>
            <p className='text-blue-800'>I'm a React developer specializing in efficient state management and seamless user experiences with responsive design. Proficient in modern JavaScript, React hooks, and API integration, I focus on delivering fast, scalable, and high-quality web solutions.</p>
          </div>
        </div>


        <div>
          <div className="card w-80 h-[350px] shadow-2xl bg-blue-50  dark:bg-black dark:text-white dark:border dark:border-white" data-aos="fade-up">
            <figure className='mt-4'>
              <FaCrop />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-500">Front-End Development</h2>
              <p className='text-blue-800'>Hi ,I have expertise in HTML, CSS, JavaScript,Bootstrap and React . My proficiency in JavaScript allows me to breathe life into static web pages, adding interactivity and dynamic functionalities. </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card h-[350px] w-80 shadow-2xl bg-blue-50  dark:bg-black dark:text-white dark:border dark:border-white " data-aos="fade-left">
            <figure className='mt-4 block'>
              <FaCrop />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-blue-500">Figma to code</h2>
              <p className='text-blue-800'>
              With a strong eye for detail, I ensure that every design element is accurately translated into functional, clean, responsive, and high-quality web interfaces using modern front-end technologies. My focus is on delivering seamless user experiences that closely match the original design vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services