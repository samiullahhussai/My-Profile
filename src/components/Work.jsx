import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Work() {
    AOS.init({
        duration: 1000,
        throttleDelay: 300, 
        offset :200
      });
    return (
        <div className='dark:text-white dark:bg-black ' data-aos="fade-left">
            <div
                className="text-center h-16 w-screen text-4xl font-bolder bg-clip-text flex justify-center items-center font-bold my-5"
                id="work" >
                <p className=" ">My Work</p>
            </div>
            <div className="md:grid md:grid-cols-3  mx-12 space-y-7 md:space-y-0 mb-10" >
                <div data-aos="fade-right">
                    {/* ba sgrpup ko h and w ni dia.  */}
                    <div className="card shadow-2xl w-80 h-[500px] dark:bg-black dark:text-white dark:border dark:border-white bg-blue-50" >
                        <figure className='group relative overflow-hidden '>
                            <img
                                src="/weather.png"
                                alt="Shoes" className='w-[320px] h-[350px]' />
                            <div className='absolute left-0 right-0 bottom-[100%] group-hover:bottom-[0%]  overflow-hidden transition-all duration-1000 ease-in-out  text-center rounded-2xl  bg-slate-100 bg-opacity-30 w-[320px] h-[350px] '>
                            </div>
                            <a href="https://github.com/samiullahhussai/weather.git " className='absolute top-[50%] left-[35%] text-2xl font-bold hidden group-hover:block transition-all duration-1000 ease-in-out delay-500' target='blank' >Github Link</a>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Weather</h2>
                            <p>HTML CSS JavaScript</p>

                        </div>
                    </div>
                </div>
                {/* second */}
                <div >
                    {/* ba sgrpup ko h and w ni dia.  */}
                    <div className="card bg-blue-50 shadow-2xl w-80 h-[500px] dark:bg-black dark:text-white dark:border dark:border-white" data-aos="fade-up">
                        <figure className='group relative overflow-hidden '>
                            <img
                                src="/clock.png"
                                alt="Shoes" className='w-[320px] h-[350px] rounded-2xl' />
                            <div className='absolute left-0 right-0 bottom-[100%] group-hover:bottom-[0%]  overflow-hidden transition-all duration-1000 ease-in-out  text-center rounded-2xl  bg-slate-100 bg-opacity-30 w-[320px] h-[350px] '>
                            </div>
                            <a href="https://github.com/samiullahhussai/weather.git " className='absolute top-[50%] left-[35%] text-2xl font-bold hidden group-hover:block transition-all duration-1000 ease-in-out delay-500' target='blank' >Github Link</a>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Digital Clock</h2>
                            <p>HTML CSS JavaScript</p>

                        </div>
                    </div>
                </div>
                {/* third */}
                <div >
                    {/* ba sgrpup ko h and w ni dia.  */}
                    <div className="card bg-blue-50 shadow-2xl w-80 h-[500px] dark:bg-black dark:text-white dark:border dark:border-white" data-aos="fade-left">
                        <figure className='group relative overflow-hidden '>
                            <img
                                src="/sami.jpeg"
                                alt="Shoes" className='w-[320px] h-[350px]' />
                            <div className='absolute left-0 right-0 bottom-[100%] group-hover:bottom-[0%]  overflow-hidden transition-all duration-1000 ease-in-out  text-center rounded-2xl  bg-slate-100 bg-opacity-30 w-[320px] h-[350px] '>
                            </div>
                            <a href="https://github.com/samiullahhussai/weather.git " className='absolute top-[50%] left-[35%] text-2xl font-bold hidden group-hover:block transition-all duration-1000 ease-in-out delay-500 ' target='blank'
                                onClick={e => e.preventDefault()} >This Project</a>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">PortFolio Website:</h2>
                            <p>React, React Router, Form Validation with Google Sheets </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work