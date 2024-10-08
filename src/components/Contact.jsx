import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
    AOS.init({
        duration: 1000,
        throttleDelay: 300, 
        offset :200
      });
    return (
        <div>
            <div className="bg-blue-50 dark:border dark:border-white  dark:bg-black dark:text-white mx-4 md:mx-32 mt-10 rounded-lg border shadow-2xl" id="contact" data-aos="fade-up">
                <div className=" md:grid md:grid-cols-2 place-items-center">
                    <div className="text-center md:text-left my-4" data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Contact Me:</h1>
                    </div>
                    <div className="card bg w-full max-w-sm shrink-0 shadow-2xl mx-auto my-6 dark:bg-black dark:text-white dark:border dark:border-white bg-blue-50" data-aos="fade-left">
                        <form className="card-body "
                            action="https://script.google.com/macros/s/AKfycbxw8jMjQaJZKKZoZ9ePOo6rX2I4jxSCdRp1X0rc1ACNAqqb47Veg1D9Nt5S3MPN0OpUOw/exec"
                            method="post" target='blank'>
                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text dark:text-white dark:bg-black bg-blue-50">Your Name:</span>
                                </label>
                                <input type="name" placeholder="Name" name="Name" className="input input-bordered dark:bg-black dark:text-white dark:border dark:border-white bg-blue-50" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white dark:bg-black">E-mail:</span>
                                </label>
                                <input type="email" placeholder="email" name="Email" className="input input-bordered dark:bg-black dark:text-white dark:border dark:border-white bg-blue-50" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white dark:bg-black">Your Message:</span>
                                </label>
                                <textarea placeholder="message" name="message"
                                    className="textarea textarea-bordered textarea-lg w-full max-w-xs dark:bg-black dark:text-white dark:border dark:border-white bg-blue-50"></textarea>
                            </div>

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact